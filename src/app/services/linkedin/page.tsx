"use client";
import { ArrowLeft, CheckCircle, Star, Users, TrendingUp, Eye, MessageSquare, Award, Clock, Shield } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const packages = [
    {
        name: "Profile Audit",
        price: { usd: 49, ksh: 6300 },
        duration: "2-3 days",
        features: [
            "Complete LinkedIn profile analysis",
            "Detailed improvement recommendations",
            "Keyword research and strategy",
            "Competitor analysis report",
            "PDF action plan delivered"
        ],
        popular: false
    },
    {
        name: "Complete Optimization",
        price: { usd: 149, ksh: 19100 },
        duration: "5-7 days",
        features: [
            "Everything in Profile Audit",
            "Professional headline rewrite",
            "Compelling summary creation",
            "Experience section enhancement",
            "Skills and endorsements optimization",
            "Visual branding guidance",
            "2 rounds of revisions"
        ],
        popular: true
    },
    {
        name: "Premium Package",
        price: { usd: 249, ksh: 32000 },
        duration: "7-10 days",
        features: [
            "Everything in Complete Optimization",
            "LinkedIn content strategy (30 days)",
            "3 custom LinkedIn posts",
            "Connection outreach templates",
            "Interview preparation guide",
            "30-day follow-up support",
            "Unlimited revisions"
        ],
        popular: false
    }
];

const results = [
    { metric: "300%", label: "Average Profile Views Increase" },
    { metric: "5x", label: "More Connection Requests" },
    { metric: "85%", label: "Clients Get Interview Calls" },
    { metric: "2 weeks", label: "Average Time to See Results" }
];

export default function LinkedInOptimization() {
    const [selectedPackage, setSelectedPackage] = useState(1);

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation Spacer */}
            <div className="h-16"></div>

            {/* Back Navigation */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 pt-8">
                <Link href="/#services" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Services
                </Link>
            </div>

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-br from-blue-50 via-slate-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                                    <TrendingUp className="mr-2 h-4 w-4" />
                                    Most Popular Service
                                </div>

                                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                                    LinkedIn Profile
                                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                        Optimization
                                    </span>
                                </h1>

                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    Transform your LinkedIn profile into a powerful networking and job-search tool. Our comprehensive optimization increases profile visibility by up to 300% and attracts quality connections and opportunities.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="#packages" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                                        View Packages
                                    </a>
                                    <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-xl transition-all duration-300">
                                        Free Consultation
                                    </a>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                            <Users className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Profile Performance</h3>
                                            <p className="text-gray-600">Before vs After Optimization</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {results.map((result, index) => (
                                            <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl">
                                                <span className="text-gray-700">{result.label}</span>
                                                <span className="text-2xl font-bold text-blue-600">{result.metric}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                                Complete LinkedIn Transformation
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our comprehensive approach covers every aspect of your LinkedIn presence to maximize your professional impact
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Eye,
                                    title: "Profile Audit & Analysis",
                                    description: "Comprehensive review of your current profile with detailed recommendations for improvement"
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Keyword Optimization",
                                    description: "Strategic keyword placement to improve search visibility and attract the right opportunities"
                                },
                                {
                                    icon: MessageSquare,
                                    title: "Compelling Summary",
                                    description: "Professional summary that tells your story and showcases your unique value proposition"
                                },
                                {
                                    icon: Award,
                                    title: "Experience Enhancement",
                                    description: "Transform job descriptions into achievement-focused content that demonstrates impact"
                                },
                                {
                                    icon: Users,
                                    title: "Visual Branding",
                                    description: "Guidance on profile photo, banner, and visual elements that reinforce your professional brand"
                                },
                                {
                                    icon: Shield,
                                    title: "Content Strategy",
                                    description: "30-day content plan to maintain engagement and build thought leadership"
                                }
                            ].map((item, index) => (
                                <div key={index} className="group p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                                        <item.icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            {/* Packages Section */}
            <section id="packages" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                                Choose Your Package
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Select the package that best fits your needs and budget. All packages include revisions and satisfaction guarantee.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {packages.map((pkg, index) => (
                                <div key={index} className={`bg-white rounded-3xl shadow-lg border-2 p-8 relative flex flex-col ${pkg.popular ? 'border-blue-500 scale-105' : 'border-gray-100'}`}>
                                    {pkg.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                                        <div className="mb-4">
                                            <span className="text-4xl font-bold text-blue-600">${pkg.price.usd}</span>
                                            <span className="text-gray-600 ml-2">/ KSh {pkg.price.ksh.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center justify-center text-gray-600">
                                            <Clock className="h-4 w-4 mr-2" />
                                            <span>{pkg.duration}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-4 mb-8 flex-grow">
                                        {pkg.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start">
                                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={`/payment?package=${encodeURIComponent(pkg.name)}&price=${pkg.price.usd}&service=${encodeURIComponent('Content Creation')}`}
                                        className={`block w-full py-4 rounded-xl font-semibold transition-all duration-300 text-center mt-auto ${pkg.popular
                                            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                                            : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                                            }`}
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Process Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                                Our Proven Process
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                A systematic approach that ensures your LinkedIn profile gets the attention it deserves
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery & Analysis",
                                    description: "We analyze your current profile, industry, and career goals to create a customized strategy."
                                },
                                {
                                    step: "02",
                                    title: "Content Creation",
                                    description: "Our experts craft compelling content that showcases your expertise and attracts opportunities."
                                },
                                {
                                    step: "03",
                                    title: "Optimization & Implementation",
                                    description: "We optimize every section of your profile for maximum visibility and engagement."
                                },
                                {
                                    step: "04",
                                    title: "Review & Refine",
                                    description: "Final review with revisions to ensure your profile exceeds expectations."
                                }
                            ].map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                            Ready to Transform Your LinkedIn Presence?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join 300+ professionals who have elevated their careers with our LinkedIn optimization services.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={`/payment?package=${encodeURIComponent('Complete Optimization')}&price=149&service=${encodeURIComponent('LinkedIn Profile Optimization')}`}
                                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Start Your Transformation
                            </Link>
                            <a
                                href="https://wa.me/254712545458?text=I'm interested in LinkedIn Profile Optimization"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-xl transition-all duration-300"
                            >
                                Free Consultation
                            </a>
                        </div>

                        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-400">24-48h</div>
                                <div className="text-gray-300">Response Time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-400">100%</div>
                                <div className="text-gray-300">Satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-400">300+</div>
                                <div className="text-gray-300">Success Stories</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-400">95%</div>
                                <div className="text-gray-300">Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}