import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Users, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const roles = ["Microsoft Sentinel Engineer", "Microsoft 365 Security Engineer", "Microsoft Cloud Security Engineer", "DevSecOps Engineer", "AI Security Engineer"];
const benefits = ["Certified in Microsoft Security, Azure IAM, Sentinel, and AI", "Fast Scaling: Quickly expand your team", "Security-First approach in every solution", "Flexible engagement models", "Cost-Efficient access to top skills"];
const steps = [{ step: "01", title: "Consultation", desc: "Share your project requirements and technical stack." }, { step: "02", title: "Talent Matching", desc: "We match skilled engineers to your project needs." }, { step: "03", title: "Onboarding", desc: "Efficient onboarding with your workflows." }, { step: "04", title: "Delivery", desc: "Continuous delivery and support." }];

const ManagedServices = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">Staff Augmentation</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Scale Smarter. <span className="gradient-text">Engineer Faster.</span> Secure Better.</h1>
          <p className="text-lg text-muted-foreground">Bridge skill gaps and accelerate delivery with on-demand cloud, security, and engineering talent.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Our Expert Augmentation Solutions</h2>
            <div className="space-y-4">
              {roles.map(role => (
                <div key={role} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border/50">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-medium">{role}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border/50">
            <h3 className="text-xl font-semibold mb-6">Why Hire from Us?</h3>
            <div className="space-y-4">
              {benefits.map(b => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {steps.map(s => (
            <div key={s.step} className="bg-card rounded-2xl p-6 border border-border/50 text-center">
              <div className="text-sm font-bold text-primary mb-2">STEP {s.step}</div>
              <h4 className="font-semibold mb-2">{s.title}</h4>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contact" className="btn-gradient inline-flex items-center px-8 py-4 rounded-lg font-semibold">
            <span className="flex items-center gap-2">Get Started <ArrowRight className="w-5 h-5" /></span>
          </Link>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ManagedServices;
