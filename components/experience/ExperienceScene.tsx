'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

/* Scroll + pointer store shared with the frame loop. */
let scrollProgress = 0;
let pointerX = 0;
let pointerY = 0;

export function setExperienceProgress(p: number) {
  scrollProgress = p;
}

/* Dust field — wasteland atmosphere. */
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
    const warm = THREE.MathUtils.clamp((scrollProgress - 0.55) / 0.45, 0, 1);
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

/* The Operator — hooded figure with swinging arms and stepping legs. */
function Operator() {
  const group = useRef<THREE.Group>(null);
  const armL = useRef<THREE.Group>(null);
  const armR = useRef<THREE.Group>(null);
  const legL = useRef<THREE.Group>(null);
  const legR = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const ph = t * 3.2;
    if (group.current) {
      group.current.position.y = -1.4 + Math.abs(Math.sin(ph)) * 0.2;
      group.current.rotation.z = Math.sin(ph) * 0.04;
    }
    if (armL.current) armL.current.rotation.x = Math.sin(ph) * 0.5;
    if (armR.current) armR.current.rotation.x = -Math.sin(ph) * 0.5;
    if (legL.current) legL.current.rotation.x = -Math.sin(ph) * 0.5;
    if (legR.current) legR.current.rotation.x = Math.sin(ph) * 0.5;
  });

  return (
    <group ref={group} position={[-3.4, -1.4, -5.5]} scale={0.72}>
      <mesh>
        <coneGeometry args={[1.1, 3.6, 14]} />
        <meshStandardMaterial color="#161616" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.9, 0]}>
        <sphereGeometry args={[0.56, 20, 16]} />
        <meshStandardMaterial color="#0e0e0e" roughness={0.9} />
      </mesh>
      <mesh position={[0, 2.14, -0.22]} rotation={[0.5, 0, 0]}>
        <coneGeometry args={[0.6, 0.85, 12]} />
        <meshStandardMaterial color="#0e0e0e" roughness={0.9} />
      </mesh>
      <group ref={armL} position={[-0.75, 1.0, 0]}>
        <mesh position={[0, -0.7, 0]}>
          <cylinderGeometry args={[0.13, 0.16, 1.5, 8]} />
          <meshStandardMaterial color="#141414" roughness={0.9} />
        </mesh>
      </group>
      <group ref={armR} position={[0.75, 1.0, 0]}>
        <mesh position={[0, -0.7, 0]}>
          <cylinderGeometry args={[0.13, 0.16, 1.5, 8]} />
          <meshStandardMaterial color="#141414" roughness={0.9} />
        </mesh>
      </group>
      <mesh position={[0.9, 0.4, 0]} rotation={[0, 0, -0.15]}>
        <cylinderGeometry args={[0.05, 0.05, 4.2, 6]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
      </mesh>
      <group ref={legL} position={[-0.3, -1.7, 0]}>
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[0.16, 0.2, 0.7, 8]} />
          <meshStandardMaterial color="#101010" roughness={0.9} />
        </mesh>
      </group>
      <group ref={legR} position={[0.3, -1.7, 0]}>
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[0.16, 0.2, 0.7, 8]} />
          <meshStandardMaterial color="#101010" roughness={0.9} />
        </mesh>
      </group>
    </group>
  );
}

/* Monolith + circular portal. */
function Monolith() {
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ring.current) return;
    const m = ring.current.material as THREE.MeshStandardMaterial;
    m.emissiveIntensity = 1.6 + Math.sin(state.clock.elapsedTime * 2.2) * 0.7;
  });

  return (
    <group position={[0, 0, -14]}>
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

/* Cathedral pillars — rise skyward in the final act. */
const PILLARS: Array<[number, number, number]> = [
  [-6, 0, -26], [-3, 0, -28], [0, 0, -30], [3, 0, -28], [6, 0, -26],
  [-6, 0, -34], [6, 0, -34], [0, 0, -38],
];

function Pillars() {
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!group.current) return;
    const lift = THREE.MathUtils.clamp((scrollProgress - 0.78) / 0.22, 0, 1);
    group.current.position.y = lift * 8;
    group.current.children.forEach((c, i) => {
      c.position.y = lift * (i % 3) * 1.5;
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

/* Pour stream — liquid falling into the vortex (elapsed-time driven, no getDelta). */
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
    const active = THREE.MathUtils.clamp((scrollProgress - 0.6) / 0.15, 0, 1);
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
    <points ref={ref} position={[0, -1, -36]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#c82924" size={0.12} transparent opacity={0} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/* Vortex — swirling burst. */
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
    ref.current.scale.setScalar(1 + scrollProgress * 2);
    const mat = ref.current.material as THREE.PointsMaterial;
    mat.opacity = THREE.MathUtils.clamp((scrollProgress - 0.6) / 0.2, 0, 0.9);
  });

  return (
    <points ref={ref} position={[0, 0, -40]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#c82924" size={0.14} transparent opacity={0} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function CameraRig() {
  const { camera } = useThree();

  useFrame(() => {
    const p = scrollProgress;
    camera.position.z = -p * 46;
    camera.position.y = Math.sin(p * Math.PI) * 3;
    camera.position.x += (pointerX * 2 - camera.position.x) * 0.05;
    camera.lookAt(0, Math.sin(p * Math.PI) * 1.5, -p * 46 - 12);
  });

  return null;
}

function Background() {
  const { scene } = useThree();
  useFrame(() => {
    const p = scrollProgress;
    const grey = new THREE.Color('#101014');
    const red = new THREE.Color('#2a0a10');
    scene.background = grey.lerp(red, THREE.MathUtils.clamp((p - 0.55) / 0.45, 0, 1)).clone();
  });
  return null;
}

/* Ambient audio — synthesized drone + footsteps. No asset files. */
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
      if (!ctx || !masterRef.current || scrollProgress > 0.35) return;
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
        camera={{ fov: 55, near: 0.1, far: 120, position: [0, 0, 6] }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        style={{ position: 'fixed', inset: 0, zIndex: 0 }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 2, -12]} intensity={60} color="#4F8CFF" distance={40} />
        <directionalLight position={[6, 10, 4]} intensity={0.9} color="#ffffff" />

        <Background />
        <CameraRig />
        <Dust />
        <Operator />
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
          bottom: 24,
          left: 24,
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
