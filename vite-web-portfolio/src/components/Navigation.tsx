import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            // Update active section based on scroll position
            const sections = navItems.map((item) => item.href.slice(1))
            for (const section of sections.reverse()) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 100) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (href: string) => {
        const element = document.getElementById(href.slice(1))
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
                        : 'bg-transparent'
                    }`}
            >
                <div className="container">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection('#home')
                            }}
                            className="text-2xl font-bold gradient-text-hero cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            PORTFOLIO
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        scrollToSection(item.href)
                                    }}
                                    className={`relative text-sm font-medium uppercase tracking-wider transition-colors ${activeSection === item.href.slice(1)
                                            ? 'text-cyan-400'
                                            : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {item.label}
                                    {activeSection === item.href.slice(1) && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-cyan-400"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* CTA Button (Desktop) */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:block btn btn-primary"
                        >
                            Hire Me
                        </motion.button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-20 left-0 right-0 z-40 md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
                    >
                        <div className="container py-6">
                            <div className="flex flex-col gap-4">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.href}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            scrollToSection(item.href)
                                        }}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`text-lg font-medium uppercase tracking-wider py-2 ${activeSection === item.href.slice(1)
                                                ? 'text-cyan-400'
                                                : 'text-gray-400'
                                            }`}
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                                <motion.button
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navItems.length * 0.1 }}
                                    className="btn btn-primary mt-4"
                                >
                                    Hire Me
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
