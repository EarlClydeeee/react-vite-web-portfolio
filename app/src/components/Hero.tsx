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
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-cyan-400/40 bg-cyan-400/5 text-cyan-300 text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-lg shadow-cyan-500/10">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            Portfolio 2026
                        </span>
                    </motion.div>

                    {/* Main Heading with Bold Gradient */}
                    <h1
                        ref={titleRef}
                        className="gradient-text-hero text-[clamp(3.5rem,15vw,12rem)] font-black leading-[0.85] mb-8 tracking-tighter"
                        style={{ perspective: '1000px' }}
                    >
                        <span className="block">CREATIVE</span>
                        <span className="block">DESIGNER</span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        ref={subtitleRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="text-xl md:text-3xl text-gray-300 max-w-3xl mb-16 leading-relaxed font-light"
                    >
                        Crafting stunning digital experiences with
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-cyan-300 font-semibold"> modern design</span> and cutting-edge technology
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                        className="flex flex-wrap gap-5 justify-center items-center"
                    >
                        <motion.button 
                            className="btn btn-primary group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>View Projects</span>
                            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </motion.button>
                        <motion.button 
                            className="btn btn-secondary group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span>Get In Touch</span>
                        </motion.button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 2 }}
                        onClick={scrollToContent}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group"
                        aria-label="Scroll down"
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className="flex flex-col items-center gap-3">
                            <span className="text-xs text-gray-400 uppercase tracking-widest font-bold group-hover:text-cyan-300 transition-colors">Scroll</span>
                            <div className="w-7 h-11 border-2 border-gray-600 group-hover:border-cyan-400/60 rounded-full flex items-start justify-center p-2 transition-all">
                                <motion.div
                                    animate={{ y: [0, 14, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                                    className="w-1.5 h-1.5 bg-gradient-to-b from-lime-400 to-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                                />
                            </div>
                        </div>
                    </motion.button>
                </div>
            </div>
        </section>
    )
}
