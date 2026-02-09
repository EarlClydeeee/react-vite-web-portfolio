import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FloatingObjects3D } from './FloatingObjects3D'
import { splitTextReveal } from '../utils/animations'

export function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        if (titleRef.current) {
            setTimeout(() => splitTextReveal(titleRef.current!, 0.2), 500)
        }
    }, [])

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        })
    }

    return (
        <section className="section relative overflow-hidden">
            {/* 3D Floating Objects Background */}
            <FloatingObjects3D />

            {/* Gradient Mesh Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

            <div className="container relative z-10">
                <div className="flex flex-col items-center justify-center min-h-screen text-center">
                    {/* Animated Greeting */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-6"
                    >
                        <span className="inline-block px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
                            Welcome to my portfolio
                        </span>
                    </motion.div>

                    {/* Main Heading with Bold Gradient */}
                    <h1
                        ref={titleRef}
                        className="gradient-text-hero text-[clamp(3rem,12vw,8rem)] font-black leading-[0.9] mb-6"
                        style={{ perspective: '1000px' }}
                    >
                        CREATIVE DESIGNER
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        ref={subtitleRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
                    >
                        Crafting stunning digital experiences with modern design and cutting-edge technology
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <button className="btn btn-primary group">
                            <span>View Projects</span>
                            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </button>
                        <button className="btn btn-secondary">Get In Touch</button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2 }}
                        onClick={scrollToContent}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group"
                        aria-label="Scroll down"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-sm text-gray-500 uppercase tracking-wider">Scroll</span>
                            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
                                <motion.div
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                                    className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                                />
                            </div>
                        </div>
                    </motion.button>
                </div>
            </div>
        </section>
    )
}
