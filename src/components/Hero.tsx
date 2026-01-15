import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  const features = [
    "40-70% Cost Reduction",
    "8-12 Week Deployment",
    "Production-Ready Systems",
    "Custom + Platform Options",
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="hero-glow top-1/4 -right-40" />
      <div className="hero-glow bottom-1/4 -left-40 opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center my-[25px]">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Cyber Security & AI Consulting
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-balance">
              Your Partner in Building{" "}
              <span className="gradient-text">Secure Cloud Foundations</span>{" "}
              for Intelligent Enterprises
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              We bridge the gap between complex technology challenges and clear, 
              actionable security outcomes. Empowering businesses to grow securely 
              with intelligent, scalable solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-gradient inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base group"
              >
                <span className="flex items-center gap-2">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                to="/services/consulting"
                className="inline-flex items-center justify-center px-8 py-4 bg-card border border-border rounded-lg font-semibold text-base text-foreground shadow-md hover:shadow-lg hover:border-primary/50 transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-3 px-5 py-4 bg-card border border-border/50 rounded-xl shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
