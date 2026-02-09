import gsap from 'gsap'

// Magnetic button effect
export function magneticEffect(element: HTMLElement, strength = 0.3) {
    const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const deltaX = (e.clientX - centerX) * strength
        const deltaY = (e.clientY - centerY) * strength

        gsap.to(element, {
            x: deltaX,
            y: deltaY,
            duration: 0.3,
            ease: 'power2.out',
        })
    }

    const handleMouseLeave = () => {
        gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
        })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
        element.removeEventListener('mousemove', handleMouseMove)
        element.removeEventListener('mouseleave', handleMouseLeave)
    }
}

// Split text animation
export function splitTextReveal(element: HTMLElement, delay = 0) {
    const text = element.textContent || ''
    const words = text.split(' ')

    element.innerHTML = words
        .map((word) => `<span class="word inline-block">${word}&nbsp;</span>`)
        .join('')

    const wordElements = element.querySelectorAll('.word')

    return gsap.from(wordElements, {
        opacity: 0,
        y: 30,
        rotateX: -90,
        stagger: 0.05,
        duration: 0.8,
        delay,
        ease: 'back.out(1.7)',
    })
}

// Fade in up animation
export function fadeInUp(elements: Element[] | NodeListOf<Element>, stagger = 0.1) {
    return gsap.from(elements, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger,
        ease: 'power3.out',
    })
}

// Scale in animation
export function scaleIn(elements: Element[] | NodeListOf<Element>, stagger = 0.1) {
    return gsap.from(elements, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger,
        ease: 'back.out(1.7)',
    })
}

// Parallax scroll effect
export function parallaxScroll(element: HTMLElement, speed = 0.5) {
    const handleScroll = () => {
        const scrolled = window.pageYOffset
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + scrolled

        if (scrolled + window.innerHeight > elementTop && scrolled < elementTop + rect.height) {
            const yPos = -(scrolled - elementTop) * speed
            gsap.to(element, {
                y: yPos,
                duration: 0.3,
                ease: 'none',
            })
        }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
}

// Counter animation
export function animateCounter(
    element: HTMLElement,
    start: number,
    end: number,
    duration = 2
) {
    const obj = { value: start }

    return gsap.to(obj, {
        value: end,
        duration,
        ease: 'power2.out',
        onUpdate: () => {
            element.textContent = Math.round(obj.value).toString()
        },
    })
}
