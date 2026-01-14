import heroNetwork from "@/assets/hero-network.png";

const Hero = () => {
  const features = [
    "100+ Customers Served",
    "8+ Years Experience",
    "120+ Projects Delivered",
    "Microsoft Security Experts",
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="hero-glow top-1/4 -right-40" />
      <div className="hero-glow bottom-1/4 -left-40 opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Cyber Security & AI Consulting
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              From Complexity to{" "}
              <span className="gradient-text">Clarity</span>{" "}
              in Security & AI
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              We bridge the gap between complex technology challenges and clear, 
              actionable security outcomes. Empowering businesses to grow securely 
              with intelligent, scalable solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:bg-primary/90 transition-all duration-300 glow-effect"
              >
                Book Free Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-lg font-semibold text-base hover:bg-secondary transition-all duration-300"
              >
                Explore Services
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-in">
            <div className="relative">
              <img
                src={heroNetwork}
                alt="Cybersecurity Network"
                className="w-full h-auto rounded-2xl animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
