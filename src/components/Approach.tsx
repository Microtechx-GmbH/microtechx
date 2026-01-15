import { Target, Search, Compass, Wrench, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Discover",
    description: "We analyze your infrastructure, identify gaps, and align security goals with business objectives.",
    number: "01",
  },
  {
    icon: Search,
    title: "Assess",
    description: "Comprehensive vulnerability scanning, risk evaluation, and compliance audit across your systems.",
    number: "02",
  },
  {
    icon: Compass,
    title: "Strategize",
    description: "Custom roadmap with prioritized actions, timelines, and clear success metrics.",
    number: "03",
  },
  {
    icon: Wrench,
    title: "Execute",
    description: "Seamless implementation with zero downtime, following industry best practices.",
    number: "04",
  },
  {
    icon: TrendingUp,
    title: "Evolve",
    description: "Ongoing monitoring, optimization, and proactive threat management.",
    number: "05",
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500 ease-out animate-fade-up ${
                  index === 4 ? 'sm:col-span-2 sm:max-w-[calc(50%-0.5rem)] sm:mx-auto' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Number badge */}
                <span className="absolute top-4 right-4 text-4xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out shadow-lg shadow-primary/30">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
