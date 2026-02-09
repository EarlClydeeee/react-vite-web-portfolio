import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
    {
        title: 'AI-Powered Dashboard',
        description: 'Modern analytics dashboard with real-time data visualization and AI insights',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        tags: ['React', 'TypeScript', 'D3.js', 'AI'],
        size: 'large',
    },
    {
        title: '3D Portfolio Experience',
        description: 'Interactive 3D portfolio with WebGL and smooth animations',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
        tags: ['Three.js', 'GSAP', 'WebGL'],
        size: 'medium',
    },
    {
        title: 'E-Commerce Platform',
        description: 'Full-stack online store with payment integration',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
        tags: ['Next.js', 'Stripe', 'MongoDB'],
        size: 'medium',
    },
    {
        title: 'Social Media App',
        description: 'Real-time social platform with chat and notifications',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
        tags: ['React', 'Firebase', 'WebSockets'],
        size: 'large',
    },
]

export function Projects() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section id="projects" className="section-sm bg-gradient-to-b from-black via-gray-900/20 to-black">
            <div className="container" ref={ref}>
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        className="text-cyan-300 font-bold uppercase tracking-widest text-xs inline-flex items-center gap-2"
                    >
                        <span className="w-8 h-[2px] bg-gradient-to-r from-yellow-400 to-cyan-400" />
                        My Work
                        <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-lime-400" />
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        className="gradient-text-hero text-6xl md:text-8xl font-black mt-4 mb-6 tracking-tighter"
                    >
                        PROJECTS
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        A collection of my recent work showcasing modern web development
                    </motion.p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className={`glass-card p-0 overflow-hidden group cursor-pointer ${project.size === 'large' ? 'md:col-span-2' : ''
                                }`}
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <motion.img
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="absolute bottom-0 left-0 right-0 p-8 flex gap-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 text-black font-bold text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/50"
                                        >
                                            <ExternalLink size={16} />
                                            View Live
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-sm border-2 border-white/30 uppercase tracking-wider"
                                        >
                                            <Github size={16} />
                                            Code
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Gradient border effect */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/60 transition-all duration-500 pointer-events-none rounded-lg" />
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 gradient-text group-hover:scale-105 transition-transform duration-300 inline-block">{project.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-lime-500/10 text-cyan-300 text-xs font-bold border border-cyan-500/30 uppercase tracking-wide hover:border-cyan-400/60 hover:bg-cyan-500/20 transition-all cursor-default"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary"
                    >
                        View All Projects
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}
