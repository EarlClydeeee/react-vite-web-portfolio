import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { splitTextReveal, animateCounter } from '../utils/animations'
import { Code, Award, Users, Coffee } from 'lucide-react'

const stats = [
    { icon: Code, label: 'Projects Completed', value: 50, suffix: '+' },
    { icon: Award, label: 'Awards Won', value: 15, suffix: '+' },
    { icon: Users, label: 'Happy Clients', value: 30, suffix: '+' },
    { icon: Coffee, label: 'Cups of Coffee', value: 1000, suffix: '+' },
]

export function About() {
    const titleRef = useRef<HTMLHeadingElement>(null)
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        if (inView && titleRef.current && !hasAnimated) {
            splitTextReveal(titleRef.current, 0.1)
            setHasAnimated(true)
        }
    }, [inView, hasAnimated])

    useEffect(() => {
        if (inView && !hasAnimated) {
            stats.forEach((stat, index) => {
                const element = document.getElementById(`stat-${index}`)
                if (element) {
                    setTimeout(() => {
                        animateCounter(element, 0, stat.value, 2)
                    }, index * 200)
                }
            })
        }
    }, [inView, hasAnimated])

    return (
        <section id="about" className="section-sm bg-gradient-to-b from-black via-gray-900/20 to-black">
            <div className="container" ref={ref}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="relative overflow-hidden rounded-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-cyan-500/20 z-10 group-hover:opacity-0 transition-opacity duration-500" />
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
                                alt="Profile"
                                className="w-full h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-2xl" />
                        </div>

                        {/* Floating decoration */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-cyan-400 rounded-full blur-3xl opacity-50 animate-pulse" />
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.3 }}
                            className="text-cyan-400 font-semibold uppercase tracking-wider text-sm"
                        >
                            About Me
                        </motion.span>

                        <h2 ref={titleRef} className="gradient-text-hero text-5xl md:text-6xl font-black my-6">
                            Passionate Developer
                        </h2>

                        <div className="space-y-4 text-gray-400 leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 }}
                            >
                                I'm a creative developer specialized in building stunning digital experiences that
                                combine beautiful design with cutting-edge technology. With a passion for modern
                                web development, I transform ideas into reality.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.7 }}
                            >
                                My expertise spans across frontend development, UI/UX design, and 3D web
                                experiences. I believe in creating products that not only look amazing but also
                                provide seamless user experiences.
                            </motion.p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 mt-12">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon
                                return (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.9 + index * 0.1 }}
                                        className="glass-card p-6 text-center group hover:border-cyan-500/50 transition-all"
                                    >
                                        <Icon className="w-8 h-8 mx-auto mb-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                                        <div className="text-3xl font-bold gradient-text mb-1">
                                            <span id={`stat-${index}`}>0</span>
                                            {stat.suffix}
                                        </div>
                                        <div className="text-sm text-gray-500">{stat.label}</div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
