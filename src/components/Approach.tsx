import { Target, Search, Compass, Wrench, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Understand",
    description: "Deep dive into your business goals and security requirements",
  },
  {
    icon: Search,
    title: "Assess",
    description: "Comprehensive technical and security scope analysis",
  },
  {
    icon: Compass,
    title: "Design",
    description: "Tailored solution roadmap aligned with your objectives",
  },
  {
    icon: Wrench,
    title: "Implement",
    description: "Precision execution with industry best practices",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    description: "Continuous management and performance enhancement",
  },
];

const Approach = () => {
  return (
    <section id="approach" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="hero-glow bottom-0 right-0 opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-6">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Structured, <span className="gradient-text">Outcome-Driven</span> Delivery
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Microtechx follows a proven methodology that ensures every engagement 
              delivers measurable results. From initial assessment to continuous optimization, 
              we're committed to your success.
            </p>

            <div className="space-y-4">
              {["Security-first mindset", "Trust and transparency", "Innovation through automation", "Long-term partnerships"].map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group flex gap-6 p-6 rounded-xl card-gradient border-glow hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-semibold text-primary/60">
                      STEP {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
