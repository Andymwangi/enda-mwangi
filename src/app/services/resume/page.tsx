"use client";
import { ArrowLeft, CheckCircle, Star, Users, TrendingUp, FileText, Award, Clock, Shield, Target, Search, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const packages = [
    {
        name: "Resume Review",
        price: { usd: 79, ksh: 10200 },
        duration: "2-3 days",
        features: [
            "Comprehensive resume analysis",
            "ATS compatibility check",
            "Detailed improvement recommendations",
            "Industry-specific feedback",
            "PDF report with action items"
        ],
        popular: false
    },
    {
        name: "Professional Rewrite",
        price: { usd: 199, ksh: 25500 },
        duration: "5-7 days",
        features: [
            "Everything in Resume Review",
            "Complete resume rewrite",
            "ATS-optimized formatting",
            "Achievement-focused content",
            "Keyword optimization",
            "Cover letter template",
            "2 rounds of revisions"
        ],
        popular: true
    },
    {
        name: "Executive Package",
        price: { usd: 349, ksh: 44800 },
        duration: "7-10 days",
        features: [
            "Everything in Professional Rewrite",
            "Executive-level positioning",
            "LinkedIn profile alignment",
            "Custom cover letter",
            "Interview preparation guide",
            "30-day job search strategy",
            "Unlimited revisions for 30 days"
        ],
        popular: false
    }
];

const results = [
    { metric: "92%", label: "Pass ATS Screening" },
    { metric: "4x", label: "More Interview Calls" },
    { metric: "78%", label: "Land Job Within 60 Days" },
    { metric: "3 weeks", label: "Average Response Time" }
];

export default function ResumeWriting() {
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
            <section className="py-16 bg-gradient-to-br from-green-50 via-slate-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
                                    <Target className="mr-2 h-4 w-4" />
                                    ATS-Optimized Resumes
                                </div>

                                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                                    Professional Resume
                                    <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                                        Writing Service
                                    </span>
                                </h1>

                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    Get past applicant tracking systems and impress hiring managers with professionally crafted resumes that showcase your unique value proposition and career achievements effectively. Our ATS-optimized resumes increase interview callbacks by 400%.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="#packages" className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                                        View Packages
                                    </a>
                                    <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold rounded-xl transition-all duration-300">
                                        Free Consultation
                                    </a>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                            <FileText className="h-6 w-6 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">Resume Performance</h3>
                                            <p className="text-gray-600">ATS & Recruiter Success Rates</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {results.map((result, index) => (
                                            <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-slate-50 rounded-xl">
                                                <span className="text-gray-700">{result.label}</span>
                                                <span className="text-2xl font-bold text-green-600">{result.metric}</span>
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
                                ATS-Optimized Resume Creation
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our comprehensive approach ensures your resume gets past automated systems and impresses human recruiters
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Search,
                                    title: "ATS Optimization",
                                    description: "Strategic keyword placement and formatting that passes automated screening systems with 92% success rate"
                                },
                                {
                                    icon: Target,
                                    title: "Achievement-Focused Content",
                                    description: "Transform job descriptions into quantified achievements that demonstrate your impact and value"
                                },
                                {
                                    icon: Zap,
                                    title: "Industry Customization",
                                    description: "Tailored content and terminology specific to your target industry and role requirements"
                                },
                                {
                                    icon: Award,
                                    title: "Professional Formatting",
                                    description: "Clean, modern design that's both ATS-friendly and visually appealing to human recruiters"
                                },
                                {
                                    icon: FileText,
                                    title: "Cover Letter Creation",
                                    description: "Compelling cover letters that complement your resume and tell your professional story"
                                },
                                {
                                    icon: Shield,
                                    title: "Quality Guarantee",
                                    description: "Satisfaction guarantee with unlimited revisions until you're completely happy with the result"
                                }
                            ].map((item, index) => (
                                <div key={index} className="group p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-xl mb-4 group-hover:bg-green-600 transition-colors duration-300">
                                        <item.icon className="h-7 w-7 text-green-600 group-hover:text-white transition-colors duration-300" />
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
            <section id="packages" className="py-16 bg-gradient-to-br from-slate-50 to-green-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                                Choose Your Resume Package
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Professional resume writing services with ATS optimization and satisfaction guarantee. All packages include revisions.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {packages.map((pkg, index) => (
                                <div key={index} className={`bg-white rounded-3xl shadow-lg border-2 p-8 relative flex flex-col ${pkg.popular ? 'border-green-500 scale-105' : 'border-gray-100'}`}>
                                    {pkg.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                                        <div className="mb-4">
                                            <span className="text-4xl font-bold text-green-600">${pkg.price.usd}</span>
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
                                        href={`/payment?package=${encodeURIComponent(pkg.name)}&price=${pkg.price.usd}&service=${encodeURIComponent('resume-writing')}`}
                                        className={`block w-full py-4 rounded-xl font-semibold transition-all duration-300 text-center mt-auto ${pkg.popular
                                            ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl'
                                            : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
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
                                Our Resume Writing Process
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                A proven methodology that transforms your career history into a compelling professional narrative
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Career Assessment",
                                    description: "We analyze your career history, achievements, and target roles to develop a strategic approach."
                                },
                                {
                                    step: "02",
                                    title: "Content Development",
                                    description: "Professional writers craft achievement-focused content with quantified results and industry keywords."
                                },
                                {
                                    step: "03",
                                    title: "ATS Optimization",
                                    description: "We format and optimize your resume to pass automated screening systems successfully."
                                },
                                {
                                    step: "04",
                                    title: "Final Review",
                                    description: "Quality check and revisions to ensure your resume exceeds industry standards."
                                }
                            ].map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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

            {/* Industries Section */}
            <section className="py-16 bg-gradient-to-br from-slate-50 to-green-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
                                Industries We Serve
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Specialized resume writing experience across diverse industries and career levels
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                "Technology & IT",
                                "Healthcare & Medicine",
                                "Finance & Banking",
                                "Marketing & Sales",
                                "Engineering",
                                "Education",
                                "Consulting",
                                "Manufacturing",
                                "Legal Services",
                                "Real Estate",
                                "Non-Profit",
                                "Government"
                            ].map((industry, index) => (
                                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300">
                                    <span className="text-gray-700 font-medium">{industry}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-16 bg-gradient-to-r from-slate-900 to-green-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                            Ready to Land Your Dream Job?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join hundreds of professionals who have secured interviews and job offers with our ATS-optimized resumes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={`/payment?package=${encodeURIComponent('Professional Rewrite')}&price=199&service=${encodeURIComponent(' ATS friendly Resume Writing')}`}
                                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Start Your Transformation
                            </Link>
                            <a
                                href="https://wa.me/254700000000?text=I'm interested in LinkedIn Profile Optimization"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-xl transition-all duration-300"
                            >
                                Free Consultation
                            </a>
                        </div>

                        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-400">24-48h</div>
                                <div className="text-gray-300">Turnaround</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-400">92%</div>
                                <div className="text-gray-300">ATS Pass Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-400">500+</div>
                                <div className="text-gray-300">Resumes Created</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-400">78%</div>
                                <div className="text-gray-300">Job Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}