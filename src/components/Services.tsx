import { Shield, Brain, Users, Settings, Monitor, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield,
    title: "Cloud Security Strategy",
    description: "Design and implement robust cloud security architectures with Zero Trust adoption and compliance frameworks.",
    slug: "cloud-security-strategy",
  },
  {
    icon: Brain,
    title: "Data & AI Security",
    description: "Protect your AI systems and data pipelines with enterprise-grade security measures and governance.",
    slug: "data-ai-security",
  },
  {
    icon: Lock,
    title: "Identity & Access Management",
    description: "Implement comprehensive IAM solutions to secure identities and control access across your organization.",
    slug: "identity-access-management",
  },
  {
    icon: Monitor,
    title: "Microsoft Sentinel Operations",
    description: "24/7 security monitoring and threat detection with Microsoft Sentinel managed services.",
    slug: "sentinel-operations",
  },
  {
    icon: Settings,
    title: "AI Engineering & Operations",
    description: "Build and secure AI workflows with automation-driven security and continuous optimization.",
    slug: "ai-engineering-operations",
  },
  {
    icon: Users,
    title: "Staff Augmentation",
    description: "Embed expert Cloud Security, AI, and IAM specialists directly into your teams.",
    slug: "staff-augmentation",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="hero-glow top-0 left-1/2 -translate-x-1/2 opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-6">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive <span className="gradient-text">Security</span> & AI Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We specialize in designing, implementing, and managing secure cloud and AI 
            environments while enabling agility, scalability, and business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 shadow-lg shadow-primary/10 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/60 hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Blue glow effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
              <div className="absolute inset-0 bg-card rounded-2xl" />
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to={`/services/${service.slug}`}>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group/btn"
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
