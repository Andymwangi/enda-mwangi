import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContentService() {
  return (
    <div className="min-h-screen bg-background section-padding container-padding">
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="heading-1 mb-4 gradient-text">Professional Content Creation</h1>
        <p className="body-large mb-8">
          High-impact writing for blogs, articles, business profiles, and more.
        </p>
        <Link href="/contact" className="button-primary">
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </section>
      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="glass-card p-8">
          <h2 className="heading-3 mb-4">What's Included</h2>
          <ul className="list-disc list-inside text-left body-regular space-y-2">
            <li>Blog posts & articles</li>
            <li>Business profiles & bios</li>
            <li>Website & social media content</li>
            <li>Editing & proofreading</li>
            <li>SEO optimization (on request)</li>
          </ul>
        </div>
        <div className="glass-card p-8">
          <h2 className="heading-3 mb-4">How It Works</h2>
          <ol className="list-decimal list-inside text-left body-regular space-y-2">
            <li>Discuss your content needs</li>
            <li>Receive a content plan & outline</li>
            <li>Review drafts and provide feedback</li>
            <li>Get polished, ready-to-publish content</li>
          </ol>
        </div>
      </section>
    </div>
  );
} 