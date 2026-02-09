import { Canvas } from '@react-three/fiber'
import { Float, Sphere, Torus, Icosahedron, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

function FloatingShape({ position, color, type = 'sphere' }: any) {
    const meshRef = useRef<Mesh>(null)

    useFrame((state) => {
        if (!meshRef.current) return
        const time = state.clock.getElapsedTime()
        meshRef.current.rotation.x = time * 0.2
        meshRef.current.rotation.y = time * 0.3
    })

    const shapes = {
        sphere: (
            <Sphere ref={meshRef} args={[1, 32, 32]}>
                <MeshDistortMaterial color={color} speed={2} distort={0.3} roughness={0.2} />
            </Sphere>
        ),
        torus: (
            <Torus ref={meshRef} args={[1, 0.4, 16, 100]}>
                <MeshDistortMaterial color={color} speed={2} distort={0.2} roughness={0.2} />
            </Torus>
        ),
        icosahedron: (
            <Icosahedron ref={meshRef} args={[1, 0]}>
                <MeshDistortMaterial color={color} speed={2} distort={0.4} roughness={0.2} />
            </Icosahedron>
        ),
    }

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh position={position}>{shapes[type as keyof typeof shapes]}</mesh>
        </Float>
    )
}

export function FloatingObjects3D() {
    return (
        <div className="absolute inset-0 -z-10 opacity-40">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00D9FF" />

                <FloatingShape position={[-4, 2, 0]} color="#FFE34D" type="sphere" />
                <FloatingShape position={[4, -1, -2]} color="#00D9FF" type="torus" />
                <FloatingShape position={[0, -3, -1]} color="#BFFF00" type="icosahedron" />
                <FloatingShape position={[-2, -2, -3]} color="#00FFB3" type="sphere" />
                <FloatingShape position={[3, 3, -2]} color="#8b5cf6" type="icosahedron" />
            </Canvas>
        </div>
    )
}
