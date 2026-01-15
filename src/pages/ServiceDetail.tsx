import { useParams, Link } from "react-router-dom";
import { Shield, Brain, Users, Settings, Monitor, Lock, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceData = {
  "cloud-security-strategy": {
    icon: Shield,
    title: "Cloud Security Strategy",
    subtitle: "Build a resilient security foundation for your cloud infrastructure",
    description: "Our Cloud Security Strategy service helps organizations design and implement robust security architectures that protect critical assets while enabling business agility. We leverage Zero Trust principles and industry-leading frameworks to ensure your cloud environment is secure, compliant, and scalable.",
    features: [
      "Zero Trust Architecture Design & Implementation",
      "Cloud Security Posture Management (CSPM)",
      "Multi-cloud Security Strategy (Azure, AWS, GCP)",
      "Compliance Framework Alignment (SOC 2, ISO 27001, GDPR)",
      "Security Architecture Review & Assessment",
      "Cloud Workload Protection Planning",
    ],
    benefits: [
      "Reduce security risks by up to 70% with proactive measures",
      "Achieve compliance faster with pre-built frameworks",
      "Enable secure cloud adoption at scale",
      "Lower total cost of security operations",
    ],
  },
  "data-ai-security": {
    icon: Brain,
    title: "Data & AI Security",
    subtitle: "Protect your AI systems and data assets with enterprise-grade security",
    description: "As AI becomes central to business operations, securing AI systems and data pipelines is critical. Our Data & AI Security service provides comprehensive protection for your machine learning models, training data, and AI-driven workflows against emerging threats.",
    features: [
      "AI/ML Model Security Assessment",
      "Data Pipeline Protection & Encryption",
      "AI Governance Framework Implementation",
      "Adversarial Attack Prevention",
      "Data Privacy & Classification",
      "Secure AI Development Lifecycle",
    ],
    benefits: [
      "Protect proprietary AI models from theft and manipulation",
      "Ensure data privacy across AI workflows",
      "Meet regulatory requirements for AI governance",
      "Build trust with stakeholders through transparent AI security",
    ],
  },
  "identity-access-management": {
    icon: Lock,
    title: "Identity & Access Management",
    subtitle: "Secure identities and control access across your organization",
    description: "Identity is the new security perimeter. Our IAM services help organizations implement comprehensive identity solutions that secure user access, reduce friction, and enable Zero Trust principles across hybrid and multi-cloud environments.",
    features: [
      "Microsoft Entra ID Implementation & Optimization",
      "Privileged Access Management (PAM)",
      "Single Sign-On (SSO) & Multi-Factor Authentication",
      "Identity Governance & Administration",
      "Conditional Access Policy Design",
      "Identity Threat Detection & Response",
    ],
    benefits: [
      "Reduce identity-related breaches by 80%",
      "Improve user experience with seamless authentication",
      "Automate access governance and compliance",
      "Enable secure remote work at scale",
    ],
  },
  "sentinel-operations": {
    icon: Monitor,
    title: "Microsoft Sentinel Operations",
    subtitle: "24/7 security monitoring and intelligent threat detection",
    description: "Our Microsoft Sentinel Operations service provides round-the-clock security monitoring, advanced threat detection, and rapid incident response. We leverage AI-powered analytics to identify and neutralize threats before they impact your business.",
    features: [
      "24/7 Security Operations Center (SOC)",
      "Advanced Threat Detection & Hunting",
      "Automated Incident Response Playbooks",
      "Security Orchestration & Automation (SOAR)",
      "Custom Detection Rule Development",
      "Executive Security Reporting & Dashboards",
    ],
    benefits: [
      "Detect threats in real-time with AI-powered analytics",
      "Reduce mean time to respond (MTTR) by 60%",
      "Lower operational costs vs. in-house SOC",
      "Gain actionable insights from security data",
    ],
  },
  "ai-engineering-operations": {
    icon: Settings,
    title: "AI Engineering & Operations",
    subtitle: "Build and secure AI workflows with automation-driven excellence",
    description: "Our AI Engineering & Operations service combines deep AI expertise with security best practices to help organizations build, deploy, and operate AI systems at scale. We ensure your AI initiatives are both innovative and secure.",
    features: [
      "AI Infrastructure Design & Deployment",
      "MLOps Pipeline Implementation",
      "AI Model Monitoring & Optimization",
      "Secure AI/ML Development Practices",
      "AI Cost Optimization & FinOps",
      "AI Integration & API Security",
    ],
    benefits: [
      "Accelerate AI deployment with secure pipelines",
      "Reduce AI operational costs by 40%",
      "Ensure AI model reliability and performance",
      "Enable continuous AI improvement cycles",
    ],
  },
  "staff-augmentation": {
    icon: Users,
    title: "Staff Augmentation",
    subtitle: "Embed expert specialists directly into your teams",
    description: "Our Staff Augmentation service provides access to top-tier Cloud Security, AI, and IAM specialists who integrate seamlessly with your teams. Whether you need short-term project support or long-term expertise, we deliver the talent you need.",
    features: [
      "Cloud Security Architects & Engineers",
      "AI/ML Security Specialists",
      "IAM Consultants & Administrators",
      "SOC Analysts & Threat Hunters",
      "DevSecOps Engineers",
      "Compliance & GRC Specialists",
    ],
    benefits: [
      "Access specialized expertise on-demand",
      "Scale your team without permanent hires",
      "Reduce time-to-hire for critical roles",
      "Transfer knowledge to internal teams",
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug as keyof typeof serviceData] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/#services">
            <Button>Back to Services</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="hero-glow top-0 left-1/2 -translate-x-1/2 opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            to="/#services" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shadow-lg shadow-primary/20">
              <IconComponent className="w-10 h-10 text-primary" />
            </div>
            <div>
              <span className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary mb-2">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mb-6">
            {service.subtitle}
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-4xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-lg shadow-primary/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                What We Deliver
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 shadow-lg shadow-primary/10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                Key Benefits
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{index + 1}</span>
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our {service.title} service can help transform your organization's security posture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button size="lg" className="px-8">
                Contact Us
              </Button>
            </Link>
            <Link to="/#services">
              <Button size="lg" variant="outline" className="px-8">
                Explore Other Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
