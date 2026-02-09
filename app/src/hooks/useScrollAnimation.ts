import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollAnimationOptions {
    trigger?: string | HTMLElement
    start?: string
    end?: string
    scrub?: boolean | number
    markers?: boolean
    stagger?: number
}

export function useScrollAnimation(
    animationFn: (element: HTMLElement) => gsap.core.Timeline | gsap.core.Tween,
    options: ScrollAnimationOptions = {}
) {
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!elementRef.current) return

        const {
            trigger = elementRef.current,
            start = 'top 80%',
            end = 'bottom 20%',
            scrub = false,
            markers = false,
        } = options

        const animation = animationFn(elementRef.current)

        ScrollTrigger.create({
            trigger,
            start,
            end,
            scrub,
            markers,
            animation,
        })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [animationFn, options])

    return elementRef
}

// Helper function for stagger animations
export function createStaggerAnimation(
    elements: NodeListOf<Element> | Element[],
    props: gsap.TweenVars,
    stagger = 0.1
) {
    return gsap.from(elements, {
        ...props,
        stagger,
    })
}
