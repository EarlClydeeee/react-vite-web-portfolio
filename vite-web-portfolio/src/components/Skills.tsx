import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    Code2,
    Palette,
    Smartphone,
    Database,
    Layers,
    Zap,
    Globe,
    Box,
} from 'lucide-react'

const skills = [
    { icon: Code2, name: 'Frontend Development', color: 'text-yellow-400' },
    { icon: Palette, name: 'UI/UX Design', color: 'text-pink-400' },
    { icon: Smartphone, name: 'Responsive Design', color: 'text-cyan-400' },
    { icon: Database, name: 'Backend Integration', color: 'text-green-400' },
    { icon: Layers, name: 'Component Libraries', color: 'text-purple-400' },
    { icon: Zap, name: 'Performance Optimization', color: 'text-orange-400' },
    { icon: Globe, name: 'Web3 & Blockchain', color: 'text-blue-400' },
    { icon: Box, name: '3D Graphics & WebGL', color: 'text-teal-400' },
]

const technologies = [
    'React',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'Framer Motion',
    'Three.js',
    'GSAP',
    'Node.js',
    'GraphQL',
    'WebGL',
    'Vite',
    'Figma',
]

export function Skills() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="skills" className="section-sm relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

            <div className="container relative z-10" ref={ref}>
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        className="text-cyan-400 font-semibold uppercase tracking-wider text-sm"
                    >
                        What I Do
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="gradient-text-hero text-5xl md:text-7xl font-black mt-4 mb-6"
                    >
                        SKILLS
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Specialized in modern web technologies and creative development
                    </motion.p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card group hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 mb-4 group-hover:animate-glow-pulse">
                                        <Icon className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform`} />
                                    </div>
                                    <h3 className="text-white font-semibold mb-2">{skill.name}</h3>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Technologies */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="glass-card p-8"
                >
                    <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
                        Technologies & Tools
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.8 + index * 0.05 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-cyan-500/50 text-gray-300 font-medium transition-all cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
