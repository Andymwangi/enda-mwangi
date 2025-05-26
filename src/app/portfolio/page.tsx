import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    name: "Jane Doe",
    title: "Marketing Manager",
    testimonial:
      "Edna transformed my LinkedIn profile and resume. I landed interviews at top companies within weeks!",
  },
  {
    name: "Samuel Kim",
    title: "Recent Graduate",
    testimonial:
      "The resume Edna created was not only beautiful but also got through every ATS I tried. Highly recommended!",
  },
  {
    name: "Aisha Patel",
    title: "Freelance Writer",
    testimonial:
      "Edna's content writing services helped me win more clients and grow my business online.",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background section-padding container-padding">
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="heading-1 mb-4 gradient-text">Portfolio & Success Stories</h1>
        <p className="body-large mb-8">
          Real results from real clients. See how Edna has helped professionals achieve their goals.
        </p>
        <Link href="/contact" className="button-primary">
          Work With Edna <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {caseStudies.map((c, i) => (
          <div key={i} className="glass-card p-8 hover:shadow-modern-hover transition-all duration-300">
            <Star className="h-8 w-8 text-primary mb-4 animate-float" />
            <blockquote className="body-regular italic mb-4">"{c.testimonial}"</blockquote>
            <div className="font-semibold text-foreground">{c.name}</div>
            <div className="text-sm text-muted-foreground">{c.title}</div>
          </div>
        ))}
      </section>
    </div>
  );
} 