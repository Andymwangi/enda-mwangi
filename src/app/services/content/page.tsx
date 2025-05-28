"use client";
import { ArrowLeft, CheckCircle, Star, PenTool, TrendingUp, Target, Zap, Globe, BarChart3, Users, Clock, Shield, Lightbulb, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const packages = [
    {
        name: "Content Starter",
        price: { usd: 99, ksh: 12700 },
        duration: "3-5 days",
        features: [
            "Content audit and strategy session",
            "5 SEO-optimized blog posts/articles",
            "Professional bio rewrite",
            "Basic social media content templates",
            "Content calendar for 2 weeks"
        ],
        popular: false
    },
    {
        name: "Content Pro",
        price: { usd: 199, ksh: 25500 },
        duration: "7-10 days",
        features: [
            "Everything in Content Starter",
            "10 high-quality blog posts/articles",
            "Website copy optimization",
            "Email marketing sequence (5 emails)",
            "Social media content for 30 days",
            "SEO keyword research report",
            "2 rounds of revisions"
        ],
        popular: true
    },
    {
        name: "Content Authority",
        price: { usd: 349, ksh: 44800 },
        duration: "10-14 days",
        features: [
            "Everything in Content Pro",
            "15 premium articles + thought leadership pieces",
            "Complete website copywriting overhaul",
            "Lead magnet creation (eBook/whitepaper)",
            "Video script writing (3 scripts)",
            "Press release writing",
            "60-day content strategy",
            "Unlimited revisions for 30 days"
        ],
        popular: false
    }
];

const results = [
    { metric: "400%", label: "Average Engagement Increase" },
    { metric: "250%", label: "Website Traffic Boost" },
    { metric: "90%", label: "Client Satisfaction Rate" },
    { metric: "3x", label: "Lead Generation Improvement" }
];

const contentTypes = [
    {
        icon: PenTool,
        title: "Blog Posts & Articles",
        description: "SEO-optimized, engaging content that drives traffic and establishes thought leadership in your industry"
    },
    {
        icon: Globe,
        title: "Website Copy",
        description: "Compelling web copy that converts visitors into customers with clear messaging and strong calls-to-action"
    },
    {
        icon: Target,
        title: "Social Media Content",
        description: "Platform-specific content that builds engagement, grows your audience, and strengthens your brand"
    },
    {
        icon: Zap,
        title: "Email Marketing",
        description: "High-converting email sequences that nurture leads and drive sales through strategic storytelling"
    },
    {
        icon: BarChart3,
        title: "Marketing Materials",
        description: "Professional brochures, case studies, and sales materials that communicate your value proposition"
    },
    {
        icon: Lightbulb,
        title: "Thought Leadership",
        description: "Industry insights and opinion pieces that position you as an expert and build credibility"
    }
];

export default function ContentCreation() {
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
            <section className="py-16 bg-gradient-to-br from-purple-50 via-slate-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-6">
                                    <PenTool className="mr-2 h-4 w-4" />
                                    Content That Converts
                                </div>

                                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                                    Professional Content
                                    <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                                        Creation
                                    </span>
                                </h1>

                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    Elevate your brand with compelling content that engages your audience and establishes thought leadership. From SEO-optimized blog posts to conversion-focused website copy, we create content that drives results and builds your authority.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="#packages" className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                                        View Packages
                                    </a>
                                    <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold rounded-xl transition-all duration-300">
                                        Free Consultation
                                    </a>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                            <BarChart3 className="h-6 w-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Content Performance</h3>
                                            <p className="text-gray-600">Average Client Results</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {results.map((result, index) => (
                                            <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-slate-50 rounded-xl">
                                                <span className="text-gray-700">{result.label}</span>
                                                <span className="text-2xl font-bold text-purple-600">{result.metric}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Types Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                                Content That Commands Attention
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                From strategic blog posts to compelling website copy, we create content that not only engages but converts your audience into loyal customers
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {contentTypes.map((item, index) => (
                                <div key={index} className="group p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center justify-center w-14 h-14 bg-purple-100 rounded-xl mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                                        <item.icon className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Content Section */}
            <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                                Why Our Content Works
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our content creation process combines strategic thinking, audience psychology, and SEO best practices to deliver measurable results
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                {[
                                    {
                                        title: "Research-Driven Strategy",
                                        description: "Every piece of content starts with thorough audience research and competitive analysis to ensure maximum impact."
                                    },
                                    {
                                        title: "SEO Optimization",
                                        description: "All content is optimized for search engines without sacrificing readability, helping you rank higher and attract organic traffic."
                                    },
                                    {
                                        title: "Brand Voice Consistency",
                                        description: "We develop and maintain a consistent brand voice across all platforms that resonates with your target audience."
                                    },
                                    {
                                        title: "Performance Tracking",
                                        description: "We provide detailed analytics and recommendations to continuously improve your content performance."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                            <CheckCircle className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="relative">
                                <div className="bg-white rounded-3xl shadow-2xl p-8">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Content Success Formula</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                                            <span className="font-semibold text-slate-900">Research & Strategy</span>
                                            <span className="text-purple-600 font-bold">25%</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                                            <span className="font-semibold text-slate-900">Content Creation</span>
                                            <span className="text-blue-600 font-bold">40%</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                                            <span className="font-semibold text-slate-900">SEO Optimization</span>
                                            <span className="text-green-600 font-bold">20%</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
                                            <span className="font-semibold text-slate-900">Review & Refinement</span>
                                            <span className="text-orange-600 font-bold">15%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section id="packages" className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                                Content Creation Packages
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Choose the package that aligns with your content needs and business goals. All packages include revisions and strategy consultation.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {packages.map((pkg, index) => (
                                <div key={index} className={`bg-white rounded-3xl shadow-lg border-2 p-8 relative flex flex-col ${pkg.popular ? 'border-purple-500 scale-105' : 'border-gray-100'}`}>
                                    {pkg.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                                        <div className="mb-4">
                                            <span className="text-4xl font-bold text-purple-600">${pkg.price.usd}</span>
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
                                            ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl'
                                            : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
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
            <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                                Our Content Creation Process
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                A systematic approach that ensures every piece of content serves your business objectives and resonates with your audience
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Discovery & Research",
                                    description: "We dive deep into your brand, audience, and competitors to develop a winning content strategy."
                                },
                                {
                                    step: "02",
                                    title: "Content Planning",
                                    description: "Strategic content mapping with SEO keywords, topics, and publishing schedules tailored to your goals."
                                },
                                {
                                    step: "03",
                                    title: "Creation & Optimization",
                                    description: "Expert writers craft compelling, SEO-optimized content that engages and converts your audience."
                                },
                                {
                                    step: "04",
                                    title: "Review & Delivery",
                                    description: "Thorough quality checks and revisions to ensure content exceeds your expectations."
                                }
                            ].map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
            <section id="contact" className="py-16 bg-gradient-to-r from-slate-900 to-purple-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                            Ready to Transform Your Content Strategy?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join 200+ businesses that have elevated their brand presence with our strategic content creation services.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={`/payment?package=${encodeURIComponent('Content Pro')}&price=199&service=${encodeURIComponent('Content Creation')}`}
                                className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Start Your Content Journey
                            </Link>
                            <a
                                href="https://wa.me/254712545458text=I'm interested in Professional Content Creation"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-xl transition-all duration-300"
                            >
                                Free Strategy Call
                            </a>
                        </div>

                        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-400">24-48h</div>
                                <div className="text-gray-300">Response Time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-400">100%</div>
                                <div className="text-gray-300">Original Content</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-400">200+</div>
                                <div className="text-gray-300">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-400">90%</div>
                                <div className="text-gray-300">Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}