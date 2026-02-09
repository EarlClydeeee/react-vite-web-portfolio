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
                        className="text-cyan-300 font-bold uppercase tracking-widest text-xs inline-flex items-center gap-2"
                    >
                        <span className="w-8 h-[2px] bg-gradient-to-r from-yellow-400 to-cyan-400" />
                        What I Do
                        <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-lime-400" />
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="gradient-text-hero text-6xl md:text-8xl font-black mt-4 mb-6 tracking-tighter"
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ scale: 1.05, y: -8 }}
                                className="glass-card group transition-all duration-300 cursor-pointer"
                            >
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 mb-5 group-hover:bg-gradient-to-br group-hover:from-gray-700/70 group-hover:to-gray-800/70 transition-all border border-gray-700/50 group-hover:border-cyan-500/30">
                                        <Icon className={`w-10 h-10 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                                    </div>
                                    <h3 className="text-white font-bold text-sm leading-tight">{skill.name}</h3>
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
                    className="glass-card p-10"
                >
                    <h3 className="text-3xl font-black text-center mb-10 gradient-text-hero tracking-tight">
                        TECH STACK
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.8 + index * 0.04 }}
                                whileHover={{ scale: 1.08, y: -6 }}
                                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-gray-800/60 to-gray-900/60 border-2 border-gray-700/50 hover:border-cyan-400/70 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-lime-500/10 text-gray-200 font-bold text-sm uppercase tracking-wider transition-all cursor-default shadow-lg hover:shadow-cyan-500/20"
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
