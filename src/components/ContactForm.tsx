// src/components/ContactForm.tsx
"use client";
import { useState } from 'react';
import { CheckCircle, Mail, Linkedin, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
    name: string;
    email: string;
    service: string;
    message: string;
}

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        service: '',
        message: '',
    });

    const [status, setStatus] = useState<FormStatus>({
        type: 'idle',
        message: '',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form
        if (!formData.name.trim() || !formData.email.trim() || !formData.service || !formData.message.trim()) {
            setStatus({
                type: 'error',
                message: 'Please fill in all fields.',
            });
            return;
        }

        setStatus({
            type: 'loading',
            message: 'Sending your message...',
        });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: result.message || 'Thank you for your message. We\'ll be in touch soon!',
                });

                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    service: '',
                    message: '',
                });

                // Clear success message after 5 seconds
                setTimeout(() => {
                    setStatus({ type: 'idle', message: '' });
                }, 5000);
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus({
                type: 'error',
                message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
            });
        }
    };

    return (
        <section id="contact" className="section-padding black-gradient text-white">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in">
                        <span className="text-blue-400 font-semibold text-lg">Get In Touch</span>
                        <h2 className="heading mt-2 mb-6">
                            Ready to Transform Your Career?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Let's discuss how we can elevate your professional presence and unlock new opportunities together
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8 animate-fade-in">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Why Choose Professional Services?</h3>
                                <div className="space-y-4">
                                    {[
                                        {
                                            title: "Proven Track Record",
                                            desc: "95% of clients see improved professional opportunities within 30 days"
                                        },
                                        {
                                            title: "Personalized Approach",
                                            desc: "Every service is tailored to your unique career goals and industry"
                                        },
                                        {
                                            title: "Ongoing Support",
                                            desc: "Continuous guidance and updates to keep you competitive"
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                                <CheckCircle className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-lg">{item.title}</h4>
                                                <p className="text-gray-300">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex space-x-6">
                                <a
                                    href="https://www.linkedin.com/in/ednawanja/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                                >
                                    <Linkedin className="h-6 w-6" />
                                    <span>LinkedIn</span>
                                </a>
                                <a
                                    href="mailto:mwangiedna9@gmail.com"
                                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                                >
                                    <Mail className="h-6 w-6" />
                                    <span>Email</span>
                                </a>
                            </div>
                        </div>

                        <div className="animate-fade-in animation-delay-200">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        disabled={status.type === 'loading'}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 disabled:opacity-50"
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        disabled={status.type === 'loading'}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 disabled:opacity-50"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                                        Service Interest *
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        disabled={status.type === 'loading'}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 disabled:opacity-50"
                                        required
                                    >
                                        <option value="" className="bg-gray-800">Select a service</option>
                                        <option value="LinkedIn Profile Optimization" className="bg-gray-800">LinkedIn Profile Optimization</option>
                                        <option value="ATS-Friendly Resume Writing" className="bg-gray-800">ATS-Friendly Resume Writing</option>
                                        <option value="Professional Content Creation" className="bg-gray-800">Professional Content Creation</option>
                                        <option value="Career Consultation" className="bg-gray-800">Career Consultation</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        disabled={status.type === 'loading'}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 disabled:opacity-50 resize-vertical min-h-[100px]"
                                        placeholder="Tell me about your career goals and how I can help..."
                                        required
                                    ></textarea>
                                </div>

                                {/* Status Messages */}
                                <AnimatePresence>
                                    {status.type !== 'idle' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className={`p-4 rounded-xl flex items-center space-x-3 ${status.type === 'success'
                                                    ? 'bg-green-600/20 border border-green-500/30 text-green-300'
                                                    : status.type === 'error'
                                                        ? 'bg-red-600/20 border border-red-500/30 text-red-300'
                                                        : 'bg-blue-600/20 border border-blue-500/30 text-blue-300'
                                                }`}
                                        >
                                            {status.type === 'loading' && (
                                                <Loader2 className="h-5 w-5 animate-spin flex-shrink-0" />
                                            )}
                                            {status.type === 'success' && (
                                                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                                            )}
                                            {status.type === 'error' && (
                                                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                                            )}
                                            <p className="text-sm font-medium">{status.message}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <button
                                    type="submit"
                                    disabled={status.type === 'loading'}
                                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center space-x-2"
                                >
                                    {status.type === 'loading' ? (
                                        <>
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Mail className="h-5 w-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;