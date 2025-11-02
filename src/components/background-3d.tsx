"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import * as THREE from "three"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"

/**
 * Floating particles component for 3D background
 * Creates animated particles that float and rotate
 */
function FloatingParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const count = 100

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const x = Math.random() * 2000 - 1000
      const y = Math.random() * 2000 - 1000
      const z = Math.random() * 2000 - 1000

      temp.push({ time, factor, speed, x, y, z })
    }
    return temp
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return

    particles.forEach((particle, i) => {
      let { factor, speed, x, y, z } = particle
      const t = particle.time + state.clock.elapsedTime * speed

      // Create floating motion
      meshRef.current!.setMatrixAt(
        i,
        new THREE.Matrix4().compose(
          new THREE.Vector3(
            x + Math.cos((t / 10) * factor) + (Math.sin(t * factor) * 50) / 10,
            y + Math.sin((t / 10) * factor) + (Math.cos(t * 2 * factor) * 50) / 10,
            z + Math.cos((t / 10) * factor) + (Math.sin(t * 3 * factor) * 50) / 10
          ),
          new THREE.Quaternion().setFromEuler(
            new THREE.Euler(t + factor, t * factor, 0)
          ),
          new THREE.Vector3(1, 1, 1)
        )
      )
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#3b82f6"
        emissive="#3b82f6"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </instancedMesh>
  )
}

/**
 * 3D Background Canvas Component
 * Provides an interactive 3D background for the hero section
 */
export function Background3D() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 200]} fov={75} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        <FloatingParticles />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}

