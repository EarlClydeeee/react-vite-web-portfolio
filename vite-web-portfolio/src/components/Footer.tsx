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
                        <h3 className="gradient-text-hero text-3xl font-black mb-4">PORTFOLIO</h3>
                        <p className="text-gray-400 mb-6">
                            Creating stunning digital experiences with modern technology and creative design.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-cyan-500/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors"
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
                        <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 duration-300"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact CTA */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-4">Let's Work Together</h4>
                        <p className="text-gray-400 mb-6">
                            Have a project in mind? Let's create something amazing together.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary w-full md:w-auto"
                        >
                            Get In Touch
                        </motion.button>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p className="flex items-center gap-2">
                        Made with <Heart size={16} className="text-red-500 animate-pulse" /> by{' '}
                        <span className="text-cyan-400 font-semibold">Your Name</span>
                    </p>
                    <p>© {currentYear} All rights reserved.</p>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        </footer>
    )
}
