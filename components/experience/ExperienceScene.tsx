'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Outlines } from '@react-three/drei';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';

/**
 * Scroll progress store — shared between the DOM scroll listener and the R3F frame loop.
 * Single module-level mutable value, read every frame (no React re-render per scroll).
 */
let scrollProgress = 0;
let pointerX = 0;
let pointerY = 0;

export function setExperienceProgress(p: number) {
  scrollProgress = p;
}

/* Comic toon banding — 4-step luminance ramp for flat "brute ink" shading. */
const TOON_RAMP = (() => {
  const data = new Uint8Array([72, 140, 205, 255]);
  const tex = new THREE.DataTexture(data, 4, 1, THREE.RedFormat);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.needsUpdate = true;
  return tex;
})();

/* ────────────────────────────────────────────────────────────
   Dust field — the "wasteland" atmosphere.
──────────────────────────────────────────────────────────── */
function Dust({ count = 1400 }: { count?: number }) {
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

/* ────────────────────────────────────────────────────────────
   The Operator — a procedural hooded figure, walking in the wasteland.
   The saint analogue: no face, long robe, bare feet. Walk-cycle via code.
──────────────────────────────────────────────────────────── */
function Operator() {
  const group = useRef<THREE.Group>(null);
  const robe = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    // stride bob + sway
    group.current.position.y = -2.4 + Math.abs(Math.sin(t * 3.4)) * 0.22;
    group.current.rotation.z = Math.sin(t * 3.4) * 0.05;
    group.current.rotation.x = -0.08;
    if (robe.current) {
      // robe hem flutter
      robe.current.scale.y = 1 + Math.sin(t * 3.4) * 0.02;
    }
  });

  return (
    <group ref={group} position={[2.2, 0, -3.5]}>
      {/* long robe */}
      <mesh ref={robe}>
        <coneGeometry args={[1.05, 3.6, 12]} />
        <meshToonMaterial color="#161616" gradientMap={TOON_RAMP} />
        <Outlines thickness={0.04} color="#000000" />
      </mesh>
      {/* hooded head */}
      <mesh position={[0, 1.85, 0]}>
        <sphereGeometry args={[0.55, 20, 16]} />
        <meshToonMaterial color="#0e0e0e" gradientMap={TOON_RAMP} />
        <Outlines thickness={0.04} color="#000000" />
      </mesh>
      {/* hood peak */}
      <mesh position={[0, 2.1, -0.2]} rotation={[0.5, 0, 0]}>
        <coneGeometry args={[0.58, 0.85, 12]} />
        <meshToonMaterial color="#0e0e0e" gradientMap={TOON_RAMP} />
      </mesh>
    </group>
  );
}

/* ────────────────────────────────────────────────────────────
   Monolith + circular portal — the brand's "cork door" motif.
──────────────────────────────────────────────────────────── */
function Monolith() {
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ring.current) return;
    const m = ring.current.material as THREE.MeshStandardMaterial;
    m.emissiveIntensity = 1.6 + Math.sin(state.clock.elapsedTime * 2.2) * 0.7;
  });

  return (
    <group position={[0, 0, -14]}>
      {/* slab — comic ink outline */}
      <mesh>
        <boxGeometry args={[3.4, 9, 1.6]} />
        <meshToonMaterial color="#1c1c1c" gradientMap={TOON_RAMP} />
        <Outlines thickness={0.05} color="#000000" />
      </mesh>
      {/* circular portal */}
      <mesh ref={ring} position={[0, 1.1, 0.85]}>
        <torusGeometry args={[1.25, 0.07, 16, 64]} />
        <meshStandardMaterial color="#4F8CFF" emissive="#4F8CFF" emissiveIntensity={2} roughness={0.3} />
      </mesh>
      {/* glowing disc inside */}
      <mesh position={[0, 1.1, 0.9]}>
        <circleGeometry args={[1.15, 64]} />
        <meshBasicMaterial color="#4F8CFF" transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

/* ────────────────────────────────────────────────────────────
   Cathedral pillars — rise and drift skyward in the final act.
──────────────────────────────────────────────────────────── */
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
          <meshToonMaterial color="#262626" gradientMap={TOON_RAMP} />
        </mesh>
      ))}
    </group>
  );
}

/* ────────────────────────────────────────────────────────────
   Vortex — the "pour" moment. Swirling particle burst.
──────────────────────────────────────────────────────────── */
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
    const s = 1 + scrollProgress * 2;
    ref.current.scale.setScalar(s);
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

/* ────────────────────────────────────────────────────────────
   Camera rig — forward journey driven by scroll + mouse parallax.
──────────────────────────────────────────────────────────── */
function CameraRig() {
  const { camera } = useThree();

  useFrame(() => {
    const p = scrollProgress;
    camera.position.z = -p * 46;
    camera.position.y = Math.sin(p * Math.PI) * 3;
    camera.position.x += (pointerX * 2 - camera.position.x) * 0.05;
    camera.position.y += (pointerY * 1.2 - camera.position.y * 0.1) * 0.03;
    camera.lookAt(0, Math.sin(p * Math.PI) * 1.5, -p * 46 - 12);
  });

  return null;
}

/* ────────────────────────────────────────────────────────────
   Background — dark wasteland grey → deep red night.
──────────────────────────────────────────────────────────── */
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

/* ────────────────────────────────────────────────────────────
   Full scene — Canvas wrapper with lights + all zones.
──────────────────────────────────────────────────────────── */
export default function ExperienceScene() {
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
    <Canvas
      dpr={[1, 1.75]}
      camera={{ fov: 55, near: 0.1, far: 120, position: [0, 0, 6] }}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      style={{ position: 'fixed', inset: 0, zIndex: 0 }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[0, 2, -12]} intensity={60} color="#4F8CFF" distance={40} />
      <directionalLight position={[6, 10, 4]} intensity={0.8} color="#ffffff" />

      <Background />
      <CameraRig />
      <Dust />
      <Operator />
      <Monolith />
      <Pillars />
      <Vortex />
    </Canvas>
  );
}
