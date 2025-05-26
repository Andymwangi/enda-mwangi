import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ResumeService() {
  return (
    <div className="min-h-screen bg-background section-padding container-padding">
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="heading-1 mb-4 gradient-text">ATS-Friendly Resume Writing</h1>
        <p className="body-large mb-8">
          Get a resume that stands out to both recruiters and applicant tracking systems (ATS).
        </p>
        <Link href="/contact" className="button-primary">
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </section>
      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="glass-card p-8">
          <h2 className="heading-3 mb-4">What's Included</h2>
          <ul className="list-disc list-inside text-left body-regular space-y-2">
            <li>Custom resume tailored to your goals</li>
            <li>ATS optimization for keyword matching</li>
            <li>Professional formatting & design</li>
            <li>Cover letter (optional add-on)</li>
            <li>Unlimited revisions for 14 days</li>
          </ul>
        </div>
        <div className="glass-card p-8">
          <h2 className="heading-3 mb-4">How It Works</h2>
          <ol className="list-decimal list-inside text-left body-regular space-y-2">
            <li>Share your career goals and background</li>
            <li>Receive a draft for review</li>
            <li>Collaborate on edits and improvements</li>
            <li>Get your final, polished resume</li>
          </ol>
        </div>
      </section>
    </div>
  );
} 