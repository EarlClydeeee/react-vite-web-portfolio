import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface MouseParallaxOptions {
    strength?: number
    smoothness?: number
    maxDistance?: number
}

export function useMouseParallax(options: MouseParallaxOptions = {}) {
    const { strength = 20, smoothness = 0.15, maxDistance = 50 } = options
    const elementRef = useRef<HTMLDivElement>(null)
    const mousePos = useRef({ x: 0, y: 0 })
    const targetPos = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!elementRef.current) return

            const rect = elementRef.current.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            // Calculate relative position
            const deltaX = (e.clientX - centerX) / rect.width
            const deltaY = (e.clientY - centerY) / rect.height

            // Apply strength and max distance
            targetPos.current = {
                x: Math.max(Math.min(deltaX * strength, maxDistance), -maxDistance),
                y: Math.max(Math.min(deltaY * strength, maxDistance), -maxDistance),
            }
        }

        const animate = () => {
            mousePos.current.x += (targetPos.current.x - mousePos.current.x) * smoothness
            mousePos.current.y += (targetPos.current.y - mousePos.current.y) * smoothness

            if (elementRef.current) {
                gsap.set(elementRef.current, {
                    x: mousePos.current.x,
                    y: mousePos.current.y,
                })
            }

            requestAnimationFrame(animate)
        }

        window.addEventListener('mousemove', handleMouseMove)
        const animationId = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationId)
        }
    }, [strength, smoothness, maxDistance])

    return elementRef
}
