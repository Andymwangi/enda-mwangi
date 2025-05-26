import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LinkedInService() {
  return (
    <div className="min-h-screen bg-background section-padding container-padding">
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="heading-1 mb-4 gradient-text">LinkedIn Profile Optimization</h1>
        <p className="body-large mb-8">
          Transform your LinkedIn profile into a powerful tool that attracts recruiters, clients, and opportunities.
        </p>
        <Link href="/contact" className="button-primary">
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </section>
      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="glass-card p-8">
          <h2 className="heading-3 mb-4">What's Included</h2>
          <ul className="list-disc list-inside text-left body-regular space-y-2">
            <li>Profile audit & personalized recommendations</li>
            <li>Headline & summary optimization</li>
            <li>Keyword integration for search visibility</li>
            <li>Experience & skills enhancement</li>
            <li>Visual branding (photo, banner, etc.)</li>
          </ul>
        </div>
        <div className="glass-card p-8">
          <h2 className="heading-3 mb-4">How It Works</h2>
          <ol className="list-decimal list-inside text-left body-regular space-y-2">
            <li>Book a free consultation</li>
            <li>Receive a detailed profile audit</li>
            <li>Collaborate on profile updates</li>
            <li>Get a final review and tips for ongoing success</li>
          </ol>
        </div>
      </section>
    </div>
  );
} 