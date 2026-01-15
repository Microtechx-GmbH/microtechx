import { CheckCircle, Shield, Sparkles } from "lucide-react";

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
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-secondary/50 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium text-primary mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            Why Microtechx
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Your Trusted Partner in{" "}
            <span className="gradient-text">Digital Security</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
            Microtechx is dedicated to helping organizations secure, scale, and modernize 
            their digital environments with strategic consulting, intelligent automation, 
            and expert-managed services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Key Differentiators Card */}
          <div className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-[0_0_40px_rgba(59,130,246,0.1)] hover:shadow-[0_0_60px_rgba(59,130,246,0.2)] hover:border-primary/50 hover:-translate-y-2 transition-all duration-500 animate-fade-up" style={{ animationDelay: '300ms' }}>
            {/* Decorative icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <Shield className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold mb-6 mt-4 group-hover:text-primary transition-colors duration-300">Key Differentiators</h3>
            <div className="space-y-4">
              {differentiators.map((item, index) => (
                <div 
                  key={item} 
                  className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: `${400 + index * 50}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary group-hover/item:scale-110 transition-all duration-300">
                    <CheckCircle className="w-4 h-4 text-primary group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise Card */}
          <div className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-[0_0_40px_rgba(59,130,246,0.1)] hover:shadow-[0_0_60px_rgba(59,130,246,0.2)] hover:border-primary/50 hover:-translate-y-2 transition-all duration-500 animate-fade-up" style={{ animationDelay: '400ms' }}>
            {/* Decorative icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold mb-6 mt-4 group-hover:text-primary transition-colors duration-300">Expertise & Heritage</h3>
            <p className="text-muted-foreground mb-6">
              Our consultants bring deep experience in:
            </p>
            <div className="space-y-4">
              {expertise.map((item, index) => (
                <div 
                  key={item} 
                  className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: `${500 + index * 50}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary group-hover/item:scale-110 transition-all duration-300">
                    <CheckCircle className="w-4 h-4 text-primary group-hover/item:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">{item}</span>
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