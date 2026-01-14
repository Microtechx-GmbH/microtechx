import { Shield, Brain, Users, Settings, Monitor, Lock } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Cloud Security Strategy",
    description: "Design and implement robust cloud security architectures with Zero Trust adoption and compliance frameworks.",
  },
  {
    icon: Brain,
    title: "Data & AI Security",
    description: "Protect your AI systems and data pipelines with enterprise-grade security measures and governance.",
  },
  {
    icon: Lock,
    title: "Identity & Access Management",
    description: "Implement comprehensive IAM solutions to secure identities and control access across your organization.",
  },
  {
    icon: Monitor,
    title: "Microsoft Sentinel Operations",
    description: "24/7 security monitoring and threat detection with Microsoft Sentinel managed services.",
  },
  {
    icon: Settings,
    title: "AI Engineering & Operations",
    description: "Build and secure AI workflows with automation-driven security and continuous optimization.",
  },
  {
    icon: Users,
    title: "Staff Augmentation",
    description: "Embed expert Cloud Security, AI, and IAM specialists directly into your teams.",
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
              className="group relative p-8 rounded-2xl bg-card border border-border/50 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
