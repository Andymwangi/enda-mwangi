"use client";
import ContactForm from "@/components/ContactForm";
import { Navigation } from "@/components/navigation";
import { ArrowRight, Linkedin, FileText, PenTool, Star, Users, Award, CheckCircle, Mail, Phone, MapPin, Link, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const testimonials = [
  {
    name: "Sarah Kamau",
    title: "Marketing Director at TechCorp",
    content: "Edna transformed my LinkedIn profile completely. Within just two weeks, I received three interview invitations from companies I had been targeting for months. Her strategic approach to keyword optimization and professional storytelling made all the difference.",
    rating: 5,
    image: "images/testimonials/sarah-kamau.jpg"
  },
  {
    name: "John Njega",
    title: "Software Engineer",
    content: "After struggling with my resume for months, Edna created an ATS-optimized version that landed me interviews at Google, Microsoft, and Amazon. Her understanding of what recruiters look for is exceptional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    name: "Dr. Aisha Patel",
    title: "Healthcare Administrator",
    content: "The content Edna created for our medical practice website increased our online engagement by 300%. Her ability to translate complex medical concepts into accessible, engaging content is remarkable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

const stats = [
  { number: "300+", label: "Profiles Optimized", icon: Users },
  { number: "95%", label: "Success Rate", icon: Award },
  { number: "20+", label: "Industries Served", icon: Star },
  { number: "500+", label: "Content Pieces Created", icon: PenTool }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white pt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-slate-600/10 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-1000"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block px-6 py-3 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4 border border-blue-200">
                Professional Career Transformation
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              Transform Your Career with{" "}
              <span className="text-gradient">
                Expert Guidance
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
              Specializing in LinkedIn Profile Optimization, ATS-Friendly Resume Creation, and Professional Content Development.
              Let's unlock your professional potential and open doors to extraordinary opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-400">
              <a
                href="#services"
                className="group btn-primary flex items-center"
              >
                Explore My Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="btn-secondary"
              >
                Schedule Consultation
              </a>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto animate-fade-in animation-delay-600">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                      <stat.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-slate-900">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/edna-profile.jpeg"
                      alt="Edna Wanja Mwangi - Professional Career Consultant"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-2xl shadow-lg animate-pulse">
                    <Star className="h-8 w-8" />
                  </div>
                </div>
              </div>

              <div className="space-y-6 animate-fade-in animation-delay-200">
                <div>
                  <span className="text-blue-600 font-semibold text-lg">About Edna</span>
                  <h2 className="subheading text-slate-900 mt-2 mb-6">
                    Your Professional Success Partner
                  </h2>
                </div>

                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    <strong className="text-slate-900">Edna Wanja Mwangi</strong> is a distinguished career transformation specialist with over 3 years of experience in professional development. Her expertise spans across LinkedIn optimization, ATS-compliant resume crafting, and strategic content creation that drives results.
                  </p>

                  <p>
                    What sets Edna apart is her deep understanding of both human psychology and algorithmic requirements. She doesn't just optimize profiles; she crafts compelling professional narratives that resonate with both recruiters and automated systems, ensuring maximum visibility and impact.
                  </p>

                  <p>
                    Her client-centric approach has helped professionals across 50+ industries secure positions at Fortune 500 companies, launch successful entrepreneurial ventures, and build thought leadership in their respective fields.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    "LinkedIn Certified",
                    "HR Insights Expert",
                    "ATS Optimization",
                    "Content Strategy"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <span className="text-blue-600 font-semibold text-lg">Services</span>
              <h2 className="heading text-slate-900 mt-2 mb-6">
                Professional Services That Deliver Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive career transformation services designed to elevate your professional presence and accelerate your success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* LinkedIn Optimization */}
              <div className="group bg-white p-8 rounded-3xl shadow-lg card-hover border border-gray-100 animate-fade-in">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Linkedin className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">LinkedIn Profile Optimization</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Transform your LinkedIn profile into a powerful networking and job-search tool. Our comprehensive optimization increases profile visibility by up to 300% and attracts quality connections and opportunities.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Complete profile audit and strategy development",
                    "Keyword-optimized headline and summary writing",
                    "Experience section enhancement and achievement highlighting",
                    "Visual branding guidance and content strategy"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <a href="/services/linkedin" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Resume Writing */}
              <div className="group bg-white p-8 rounded-3xl shadow-lg card-hover border border-gray-100 animate-fade-in animation-delay-200">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  <FileText className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">ATS-Friendly Resume Writing</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Get past applicant tracking systems and impress hiring managers with professionally crafted resumes that showcase your unique value proposition and career achievements effectively.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "ATS-optimized formatting and keyword integration",
                    "Achievement-focused content with quantified results",
                    "Industry-specific customization and targeting",
                    "Cover letter creation and interview preparation tips"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <a href="/services/resume" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Content Creation */}
              <div className="group bg-white p-8 rounded-3xl shadow-lg card-hover border border-gray-100 animate-fade-in animation-delay-400">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                  <PenTool className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">Professional Content Creation</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Elevate your brand with compelling content that engages your audience and establishes thought leadership. From blog posts to business communications, we create content that converts.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "SEO-optimized blog posts and articles",
                    "Professional bios and company profiles",
                    "Social media content and email campaigns",
                    "Website copy and marketing materials"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <a href="/services/content" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <span className="text-blue-600 font-semibold text-lg">Success Stories</span>
              <h2 className="heading text-slate-900 mt-2 mb-6">
                Real Results from Real Clients
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our professional services have transformed careers and opened doors to new opportunities
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl animate-fade-in animation-delay-200">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-slate-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].title}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>

  );
}