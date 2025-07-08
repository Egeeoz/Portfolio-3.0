'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Float, Stars } from '@react-three/drei';
import { Suspense } from 'react';

export default function PortfolioScene() {
  return (
    <main className="h-screen w-full bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            fade
            speed={1}
          />

          <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh>
              <boxGeometry args={[3.5, 2, 0.1]} />
              <meshStandardMaterial color="#111" transparent opacity={0.6} />

              <Html center>
                <div className="text-white text-center font-mono p-4">
                  <h1 className="text-2xl md:text-4xl font-bold mb-2">
                    Ege – Fullstack Dev
                  </h1>
                  <p className="text-sm mb-4">React • Supabase • Next.js</p>
                  <div className="flex justify-center gap-4 text-2xl">
                    <a href="#" className="hover:text-cyan-400">
                      🔗
                    </a>
                    <a href="#" className="hover:text-cyan-400">
                      💼
                    </a>
                    <a href="#" className="hover:text-cyan-400">
                      📧
                    </a>
                  </div>
                </div>
              </Html>
            </mesh>
          </Float>
        </Suspense>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </main>
  );
}
