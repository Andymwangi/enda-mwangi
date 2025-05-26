import { ArrowRight, Linkedin, FileText, PenTool } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/ui/animated-section";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20 overflow-hidden rounded-b-3xl shadow-modern">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto container-padding relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">
              Transform Your Professional Presence with{" "}
              <span className="gradient-text">Expert Solutions</span>
            </h1>
            <p className="body-large mb-8">
              LinkedIn Profile Optimization • ATS-Friendly Resumes • Professional Content Creation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#services"
                className="button-primary"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="button-secondary"
              >
                Get in Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="section-padding bg-background/80 rounded-3xl shadow-modern my-8">
        <div className="container mx-auto container-padding">
          <AnimatedSection>
            <h2 className="heading-2 text-center mb-12">
              Professional Services
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-8 hover:shadow-modern-hover transition-all duration-300">
                <Linkedin className="h-12 w-12 text-primary mb-4 animate-float" />
                <h3 className="heading-3 mb-2">LinkedIn Optimization</h3>
                <p className="body-regular">
                  Transform your LinkedIn profile into a powerful professional tool that attracts opportunities.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="glass-card p-8 hover:shadow-modern-hover transition-all duration-300">
                <FileText className="h-12 w-12 text-primary mb-4 animate-float" />
                <h3 className="heading-3 mb-2">Resume Writing</h3>
                <p className="body-regular">
                  Create ATS-friendly resumes that stand out and get you noticed by top employers.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <div className="glass-card p-8 hover:shadow-modern-hover transition-all duration-300">
                <PenTool className="h-12 w-12 text-primary mb-4 animate-float" />
                <h3 className="heading-3 mb-2">Content Creation</h3>
                <p className="body-regular">
                  Professional writing services for blogs, articles, and business content.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-secondary/40 rounded-3xl shadow-modern my-8">
        <div className="container mx-auto container-padding max-w-3xl">
          <AnimatedSection>
            <h2 className="heading-2 text-center mb-8">About Edna</h2>
            <div className="body-large text-center space-y-4">
              <p>
                <span className="font-semibold text-foreground">Edna Wanja Mwangi</span> is a seasoned professional specializing in optimizing LinkedIn profiles, crafting ATS-friendly resumes, and delivering high-impact online content. With a keen eye for detail and a passion for helping others succeed, Edna transforms ordinary profiles and resumes into compelling narratives that open doors to new opportunities.
              </p>
              <p>
                Her approach combines industry best practices, creativity, and a deep understanding of what recruiters and algorithms look for. Whether you're a recent graduate, a career changer, or an executive, Edna tailors her services to your unique goals and background.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-background/80 rounded-3xl shadow-modern my-8">
        <div className="container mx-auto container-padding max-w-2xl">
          <AnimatedSection>
            <h2 className="heading-2 text-center mb-8">Contact</h2>
            <form className="glass-card p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input 
                  id="name" 
                  name="name" 
                  type="text" 
                  required 
                  className="input-field" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  className="input-field" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  className="input-field" 
                />
              </div>
              <button 
                type="submit" 
                className="button-primary w-full"
              >
                Send Message
              </button>
            </form>
            <div className="flex justify-center gap-6 mt-8">
              <a 
                href="https://www.linkedin.com/in/ednawanja/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-2 transition-all hover:scale-105"
              >
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a
                href="mailto:edna@example.com" 
                className="text-primary hover:underline flex items-center gap-2 transition-all hover:scale-105"
              >
                <FileText className="h-5 w-5" /> Email
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
