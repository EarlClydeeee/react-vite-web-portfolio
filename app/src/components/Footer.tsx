import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
]

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer id="contact" className="relative bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
            <div className="container py-16">
                {/* Top Section */}
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Branding */}
                    <div>
                        <h3 className="gradient-text-hero text-4xl font-black mb-4 tracking-tighter inline-flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-cyan-400 animate-pulse" />
                            PORTFOLIO
                        </h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Creating stunning digital experiences with modern technology and creative design.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.15, y: -4 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 border-2 border-gray-700/50 hover:border-cyan-400/70 flex items-center justify-center text-gray-400 hover:text-cyan-300 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
                                        aria-label={social.label}
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                                <motion.li 
                                    key={link}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-gray-300 hover:text-cyan-300 transition-all inline-flex items-center gap-2 group font-medium"
                                    >
                                        <span className="w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-cyan-400 group-hover:w-4 transition-all duration-300" />
                                        {link}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact CTA */}
                    <div>
                        <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">Let's Work Together</h4>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Have a project in mind? Let's create something <span className="text-cyan-300 font-semibold">amazing</span> together.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn btn-primary w-full md:w-auto"
                        >
                            Get In Touch
                        </motion.button>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-400/30 via-cyan-400/50 to-transparent mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p className="flex items-center gap-2 font-medium">
                        Made with <Heart size={16} className="text-red-400 animate-pulse" /> by{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-lime-300 font-bold">Your Name</span>
                    </p>
                    <p className="font-medium">© {currentYear} All rights reserved.</p>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        </footer>
    )
}
