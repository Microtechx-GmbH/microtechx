import { useParams, Link } from "react-router-dom";
import { Shield, Brain, Users, Settings, Monitor, Lock, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const serviceData: Record<string, any> = {
  "cloud-security-strategy": {
    icon: Shield,
    title: "Cloud Security Strategy",
    subtitle: "Build a resilient security foundation for your cloud infrastructure",
    description: "Our Cloud Security Strategy service helps organizations design and implement robust security architectures.",
    features: ["Zero Trust Architecture Design", "Cloud Security Posture Management", "Multi-cloud Security Strategy", "Compliance Framework Alignment", "Security Architecture Review"],
    benefits: ["Reduce security risks by up to 70%", "Achieve compliance faster", "Enable secure cloud adoption", "Lower security operations costs"],
  },
  "data-ai-security": {
    icon: Brain,
    title: "Data & AI Security",
    subtitle: "Protect your AI systems and data assets",
    description: "Comprehensive protection for your machine learning models, training data, and AI-driven workflows.",
    features: ["AI/ML Model Security Assessment", "Data Pipeline Protection", "AI Governance Framework", "Adversarial Attack Prevention", "Data Privacy & Classification"],
    benefits: ["Protect proprietary AI models", "Ensure data privacy", "Meet regulatory requirements", "Build stakeholder trust"],
  },
  "identity-access-management": {
    icon: Lock,
    title: "Identity & Access Management",
    subtitle: "Secure identities and control access",
    description: "Comprehensive identity solutions that secure user access and enable Zero Trust.",
    features: ["Microsoft Entra ID Implementation", "Privileged Access Management", "SSO & MFA", "Identity Governance", "Conditional Access"],
    benefits: ["Reduce identity breaches by 80%", "Improve user experience", "Automate access governance", "Enable secure remote work"],
  },
  "sentinel-operations": {
    icon: Monitor,
    title: "Microsoft Sentinel Operations",
    subtitle: "24/7 security monitoring and threat detection",
    description: "Round-the-clock security monitoring, advanced threat detection, and rapid incident response.",
    features: ["24/7 SOC", "Advanced Threat Detection", "Automated Playbooks", "SOAR Integration", "Custom Detection Rules"],
    benefits: ["Real-time threat detection", "Reduce MTTR by 60%", "Lower costs vs in-house SOC", "Actionable security insights"],
  },
  "ai-engineering-operations": {
    icon: Settings,
    title: "AI Engineering & Operations",
    subtitle: "Build and secure AI workflows",
    description: "Deep AI expertise with security best practices for AI systems at scale.",
    features: ["AI Infrastructure Design", "MLOps Pipeline", "AI Model Monitoring", "Secure AI Development", "AI Cost Optimization"],
    benefits: ["Accelerate AI deployment", "Reduce AI costs by 40%", "Ensure model reliability", "Enable continuous improvement"],
  },
  "staff-augmentation": {
    icon: Users,
    title: "Staff Augmentation",
    subtitle: "Embed expert specialists into your teams",
    description: "Access to top-tier Cloud Security, AI, and IAM specialists.",
    features: ["Cloud Security Architects", "AI/ML Security Specialists", "IAM Consultants", "SOC Analysts", "DevSecOps Engineers"],
    benefits: ["On-demand expertise", "Scale without permanent hires", "Reduce time-to-hire", "Knowledge transfer"],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/#services"><Button>Back to Services</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/#services" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
              <IconComponent className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">{service.subtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-card border border-border/50">
              <h2 className="text-2xl font-bold mb-6">What We Deliver</h2>
              <ul className="space-y-4">
                {service.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                    </div>
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-background text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <div className="flex gap-4 justify-center">
            <Link to="/#contact"><Button size="lg">Contact Us</Button></Link>
            <Link to="/#services"><Button size="lg" variant="outline">Other Services</Button></Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
