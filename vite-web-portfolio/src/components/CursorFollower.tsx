import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function CursorFollower() {
    const dotRef = useRef<HTMLDivElement>(null)
    const outlineRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Only show custom cursor on desktop
        if (window.innerWidth < 1024) return

        const handleMouseMove = (e: MouseEvent) => {
            if (dotRef.current) {
                gsap.to(dotRef.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.1,
                    ease: 'power2.out',
                })
            }

            if (outlineRef.current) {
                gsap.to(outlineRef.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.3,
                    ease: 'power2.out',
                })
            }
        }

        const handleMouseEnter = () => {
            if (outlineRef.current) {
                gsap.to(outlineRef.current, {
                    scale: 1.5,
                    duration: 0.3,
                    ease: 'power2.out',
                })
            }
        }

        const handleMouseLeave = () => {
            if (outlineRef.current) {
                gsap.to(outlineRef.current, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out',
                })
            }
        }

        window.addEventListener('mousemove', handleMouseMove)

        // Add hover effect to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer')
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter)
            el.addEventListener('mouseleave', handleMouseLeave)
        })

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    // Don't render on mobile
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        return null
    }

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={outlineRef} className="cursor-outline" />
        </>
    )
}
