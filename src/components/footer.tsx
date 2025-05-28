// components/footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const currentYear = new Date().getFullYear();

    const services = [
        { name: "LinkedIn Profile Optimization", href: "/services/linkedin" },
        { name: "ATS-Friendly Resume Writing", href: "/services/resume" },
        { name: "Professional Content Creation", href: "/services/content" },
        { name: "Career Consultation", href: "#contact" },
    ];

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-xl">R</span>
                            </div>
                            <div>
                                <div className="font-bold text-2xl">Resume by Edna</div>
                                <div className="text-blue-300">Professional Career Services</div>
                            </div>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                            Transforming careers through expert LinkedIn optimization, ATS-friendly resume writing,
                            and professional content creation. Let's unlock your professional potential together.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-300">
                                <MapPin className="h-5 w-5 text-blue-400" />
                                <span>Nairobi, Kenya</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Phone className="h-5 w-5 text-blue-400" />
                                <span>+254 712 545 458</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Mail className="h-5 w-5 text-blue-400" />
                                <span>mwangiedna9@gmail.com</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-lg font-semibold mb-6 text-blue-300">Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block text-sm"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-lg font-semibold mb-6 text-blue-300">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <h4 className="text-lg font-semibold mb-4 text-blue-300">Follow Me</h4>
                            <div className="flex space-x-4">
                                <Link
                                    href="https://www.linkedin.com/in/ednawanja/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="mailto:mwangiedna9@gmail.com"
                                    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                                    aria-label="Email Contact"
                                >
                                    <Mail className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Newsletter Signup */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-blue-800/30 backdrop-blur-sm rounded-2xl p-8 mb-12"
                >
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                        <p className="text-gray-300 mb-6">
                            Get career tips, industry insights, and exclusive offers delivered to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-white/10 border border-gray-500/30 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-300"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {currentYear} Resume by Edna. All rights reserved. Transforming careers, one profile at a time.
                    </div>

                    <div className="flex items-center space-x-6">
                        <Link
                            href="/privacy"
                            className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                        >
                            Terms of Service
                        </Link>
                        <button
                            onClick={scrollToTop}
                            className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}