'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

/* ── Shared scroll + pointer state ────────────────────────────────────────── */
/* Raw scroll target (written on scroll) → time-damped progress read by every
   channel, so camera, character, and scene stay synchronized. */
let scrollTarget = 0;
let smoothed = 0;
let pointerX = 0.5;
let pointerY = 0.5;

export function setExperienceProgress(p: number) {
  scrollTarget = Math.min(1, Math.max(0, p));
}

/* One damped value, elapsed-time decay — survives reverse scroll, anchor jumps,
   and hidden-tab resume without a time-step jump. */
function Damp() {
  useFrame((_, delta) => {
    const dt = Math.min(0.05, delta);
    smoothed += (scrollTarget - smoothed) * (1 - Math.exp(-14 * dt));
  }, -1);
  return null;
}

/* ── The Operator's path ──────────────────────────────────────────────────── */
/* He walks forward (-Z) through the world. Landmarks are re-spaced so the walk
   lands on the 5 acts: wasteland → portal → cathedral → pour → sky. */
const CHAR_START_Z = 3;
const CHAR_HOLD_Z = -24;

function charPose(p: number) {
  const walk = THREE.MathUtils.clamp(p / 0.72, 0, 1);
  const z = THREE.MathUtils.lerp(CHAR_START_Z, CHAR_HOLD_Z, walk);
  const x = THREE.MathUtils.lerp(-1.9, -0.2, walk) + Math.sin(walk * Math.PI * 2) * 0.12;
  return { x, z };
}

/* ── Dust field — wasteland atmosphere ────────────────────────────────────── */
function Dust({ count = 1200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 70;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 45;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 70;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    const mat = ref.current.material as THREE.PointsMaterial;
    const warm = THREE.MathUtils.clamp((smoothed - 0.6) / 0.4, 0, 1);
    mat.color.setRGB(0.55 + 0.25 * warm, 0.55 - 0.1 * warm, 0.55 - 0.3 * warm);
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.09} color="#8a8a8a" transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/* ── The Operator — Quaternius Animated Wizard (CC-BY), a walking silhouette ─ */
function Wizard() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF('/models/wizard.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Cloak in shadow — hide cartoon colors, keep silhouette + walk weight.
    scene.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh) {
        const m = mesh.material as THREE.MeshStandardMaterial;
        if (m && 'color' in m) {
          m.color.set('#17171c');
          m.roughness = 0.95;
          m.metalness = 0;
          if ('emissive' in m) m.emissive.set('#000000');
        }
      }
    });
    const walk = actions['CharacterArmature|Walk'];
    walk?.reset().play();
    return () => { walk?.stop(); };
  }, [scene, actions]);

  useFrame(() => {
    if (!group.current) return;
    const { x, z } = charPose(smoothed);
    // Feet stay planted; the walk cycle supplies the weight transfer.
    group.current.position.set(x, -2.2, z);
    // Face the direction of travel. Model forward is +Z (Blender -Y front → glTF +Z).
    const a = charPose(Math.max(0, smoothed - 0.03));
    const b = charPose(Math.min(1, smoothed + 0.03));
    group.current.rotation.y = Math.atan2(b.x - a.x, b.z - a.z);
  });

  return (
    <group ref={group} position={[0, -2.2, CHAR_START_Z]} scale={1.1}>
      <primitive object={scene} />
    </group>
  );
}

/* ── Monolith + circular portal (act 2) ───────────────────────────────────── */
function Monolith() {
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ring.current) return;
    const m = ring.current.material as THREE.MeshStandardMaterial;
    m.emissiveIntensity = 1.6 + Math.sin(state.clock.elapsedTime * 2.2) * 0.7;
  });

  return (
    <group position={[0, 0, -6]}>
      <mesh>
        <boxGeometry args={[3.4, 9, 1.6]} />
        <meshStandardMaterial color="#1c1c1c" roughness={0.85} metalness={0.25} />
      </mesh>
      <mesh ref={ring} position={[0, 1.1, 0.85]}>
        <torusGeometry args={[1.25, 0.07, 16, 64]} />
        <meshStandardMaterial color="#4F8CFF" emissive="#4F8CFF" emissiveIntensity={2} roughness={0.3} />
      </mesh>
      <mesh position={[0, 1.1, 0.9]}>
        <circleGeometry args={[1.15, 64]} />
        <meshBasicMaterial color="#4F8CFF" transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

/* ── Cathedral pillars (acts 3–5) — rise skyward in the finale ────────────── */
const PILLARS: Array<[number, number, number]> = [
  [-5, 0, -12], [-2.5, 0, -14], [0, 0, -16], [2.5, 0, -14], [5, 0, -12],
  [-5, 0, -18], [5, 0, -18], [0, 0, -22],
];

function Pillars() {
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!group.current) return;
    const lift = THREE.MathUtils.clamp((smoothed - 0.8) / 0.2, 0, 1);
    group.current.position.y = lift * 26;
    group.current.children.forEach((c, i) => {
      c.position.y = lift * (i % 3) * 3;
      c.position.x += Math.sin(lift * Math.PI + i) * 0.02;
      c.rotation.z = lift * (i % 2 === 0 ? 0.25 : -0.25);
      c.rotation.x = lift * 0.15 * (i % 3);
    });
  });

  return (
    <group ref={group}>
      {PILLARS.map((p, i) => (
        <mesh key={i} position={p}>
          <cylinderGeometry args={[0.5, 0.7, 14, 12]} />
          <meshStandardMaterial color="#262626" roughness={0.9} metalness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

/* ── Pour stream — liquid falling into the vortex (act 4) ─────────────────── */
function PourStream({ count = 400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const seeds = useMemo(() => {
    const arr = new Float32Array(count * 4);
    for (let i = 0; i < count; i++) {
      arr[i * 4] = (Math.random() - 0.5) * 0.4;
      arr[i * 4 + 1] = Math.random() * 10;
      arr[i * 4 + 2] = (Math.random() - 0.5) * 0.4;
      arr[i * 4 + 3] = 3 + Math.random() * 5;
    }
    return arr;
  }, [count]);
  const positions = useMemo(() => new Float32Array(count * 3), [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const active = THREE.MathUtils.clamp((smoothed - 0.62) / 0.15, 0, 1);
    const mat = ref.current.material as THREE.PointsMaterial;
    mat.opacity = active * 0.9;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const speed = seeds[i * 4 + 3];
      const fall = (t * speed + seeds[i * 4 + 1]) % 10;
      positions[i * 3] = seeds[i * 4];
      positions[i * 3 + 1] = 8 - fall;
      positions[i * 3 + 2] = seeds[i * 4 + 2];
    }
    ref.current.geometry.getAttribute('position').needsUpdate = true;
    ref.current.rotation.y = t * 0.8;
  });

  return (
    <points ref={ref} position={[0, -1, -24]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#c82924" size={0.12} transparent opacity={0} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/* ── Vortex — swirling burst (act 4) ──────────────────────────────────────── */
function Vortex({ count = 900 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = Math.random() * 4;
      const a = Math.random() * Math.PI * 2;
      arr[i * 3] = Math.cos(a) * r;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = Math.sin(a) * r;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.6;
    ref.current.scale.setScalar(1 + smoothed * 2);
    const mat = ref.current.material as THREE.PointsMaterial;
    mat.opacity = THREE.MathUtils.clamp((smoothed - 0.62) / 0.2, 0, 0.9);
  });

  return (
    <points ref={ref} position={[0, 0, -26]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#c82924" size={0.14} transparent opacity={0} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/* ── Follow camera — trails the operator, looks ahead ─────────────────────── */
function CameraRig() {
  const { camera } = useThree();
  const look = useRef(new THREE.Vector3(0, 1.2, -8));

  useFrame(() => {
    const { x, z } = charPose(smoothed);
    const tx = x + 2.0 + (pointerX - 0.5) * 1.6;
    const ty = 2.1 + (pointerY - 0.5) * 0.7;
    const tz = z + 5.4;
    camera.position.x += (tx - camera.position.x) * 0.06;
    camera.position.y += (ty - camera.position.y) * 0.06;
    camera.position.z += (tz - camera.position.z) * 0.06;
    look.current.set(x, 1.15, z - 4);
    camera.lookAt(look.current);
  });

  return null;
}

function Background() {
  const { scene } = useThree();
  useFrame(() => {
    const grey = new THREE.Color('#101014');
    const red = new THREE.Color('#2a0a10');
    scene.background = grey.lerp(red, THREE.MathUtils.clamp((smoothed - 0.6) / 0.4, 0, 1)).clone();
  });
  return null;
}

/* ── Ambient audio — synthesized drone + footsteps, no asset files ────────── */
function useAmbientAudio() {
  const [muted, setMuted] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);

  useEffect(() => {
    const ensure = () => {
      if (ctxRef.current) {
        ctxRef.current.resume();
        return;
      }
      const wk = (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      const Ctx = window.AudioContext ?? wk;
      if (!Ctx) return;
      const ctx = new Ctx();
      const master = ctx.createGain();
      master.gain.value = 0.5;
      master.connect(ctx.destination);

      const o1 = ctx.createOscillator();
      o1.type = 'sawtooth';
      o1.frequency.value = 55;
      const o2 = ctx.createOscillator();
      o2.type = 'sawtooth';
      o2.frequency.value = 55.6;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 220;
      const g = ctx.createGain();
      g.gain.value = 0.06;
      o1.connect(lp); o2.connect(lp); lp.connect(g); g.connect(master);
      o1.start(); o2.start();

      const buf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
      const ch = buf.getChannelData(0);
      for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1;
      const noise = ctx.createBufferSource();
      noise.buffer = buf; noise.loop = true;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass'; bp.frequency.value = 500; bp.Q.value = 0.6;
      const ng = ctx.createGain(); ng.gain.value = 0.02;
      noise.connect(bp); bp.connect(ng); ng.connect(master);
      noise.start();

      ctxRef.current = ctx;
      masterRef.current = master;
    };

    const footTimer = setInterval(() => {
      const ctx = ctxRef.current;
      if (!ctx || !masterRef.current || smoothed > 0.35) return;
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(80, t);
      osc.frequency.exponentialRampToValueAtTime(40, t + 0.12);
      const fg = ctx.createGain();
      fg.gain.setValueAtTime(0.12, t);
      fg.gain.exponentialRampToValueAtTime(0.0001, t + 0.15);
      osc.connect(fg); fg.connect(masterRef.current);
      osc.start(t); osc.stop(t + 0.16);
    }, 620);

    const onFirst = () => { ensure(); window.removeEventListener('pointerdown', onFirst); };
    window.addEventListener('pointerdown', onFirst);

    return () => {
      clearInterval(footTimer);
      window.removeEventListener('pointerdown', onFirst);
      ctxRef.current?.close();
      ctxRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (masterRef.current) masterRef.current.gain.value = muted ? 0 : 0.5;
  }, [muted]);

  return { muted, toggle: () => setMuted((m) => !m) };
}

export default function ExperienceScene() {
  const { muted, toggle } = useAmbientAudio();

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setExperienceProgress(max > 0 ? h.scrollTop / max : 0);
    };
    const onMove = (e: PointerEvent) => {
      pointerX = e.clientX / window.innerWidth;
      pointerY = e.clientY / window.innerHeight;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <>
      <Canvas
        dpr={[1, 1.75]}
        camera={{ fov: 55, near: 0.1, far: 120, position: [0, 2.1, 8.4] }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        style={{ position: 'fixed', inset: 0, zIndex: 0 }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 2, -12]} intensity={60} color="#4F8CFF" distance={40} />
        <directionalLight position={[6, 10, 4]} intensity={0.9} color="#ffffff" />

        <Damp />
        <Background />
        <CameraRig />
        <Suspense fallback={null}>
          <Wizard />
        </Suspense>
        <Monolith />
        <Pillars />
        <PourStream />
        <Vortex />
      </Canvas>

      <button
        onClick={toggle}
        aria-label={muted ? 'Unmute ambient audio' : 'Mute ambient audio'}
        style={{
          position: 'fixed',
          bottom: '6rem',
          left: '2rem',
          zIndex: 55,
          width: 44,
          height: 44,
          borderRadius: '50%',
          border: '1px solid var(--glass-border)',
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(8px)',
          color: 'var(--text)',
          cursor: 'pointer',
          fontSize: 'var(--text-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {muted ? '🔇' : '🔊'}
      </button>
    </>
  );
}
