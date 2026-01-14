import { CheckCircle } from "lucide-react";

const About = () => {
  const differentiators = [
    "Security and AI expertise under one roof",
    "Strong focus on people, process, and technology",
    "Automation-driven security and compliance",
    "Proven delivery playbooks and measurable outcomes",
    "Long-term partnerships, not just projects",
  ];

  const expertise = [
    "Microsoft technology strategy",
    "Multi-cloud security architecture",
    "Enterprise identity protection",
    "Advanced threat detection",
    "Compliance frameworks & governance",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-6">
            Why Microtechx
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Your Trusted Partner in{" "}
            <span className="gradient-text">Digital Security</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Microtechx is dedicated to helping organizations secure, scale, and modernize 
            their digital environments with strategic consulting, intelligent automation, 
            and expert-managed services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl card-gradient border-glow">
            <h3 className="text-2xl font-bold mb-6">Key Differentiators</h3>
            <div className="space-y-4">
              {differentiators.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl card-gradient border-glow">
            <h3 className="text-2xl font-bold mb-6">Expertise & Heritage</h3>
            <p className="text-muted-foreground mb-6">
              Our consultants bring deep experience in:
            </p>
            <div className="space-y-4">
              {expertise.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
