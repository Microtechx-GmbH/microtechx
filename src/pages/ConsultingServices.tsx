import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, Lock, RefreshCw, Monitor, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Shield, title: "Cloud Identities", description: "Secure and streamline identity access across hybrid and cloud environments with Zero Trust, automated governance, and seamless user experiences." },
  { icon: CheckCircle, title: "Compliance Management", description: "Ensure regulatory adherence and reduce risk through tailored compliance roadmaps, governance policies, data protection solutions, and certification support." },
  { icon: Lock, title: "Platform Security", description: "Protect cloud platforms with zero-trust architecture, advanced threat detection, and integrated tools like Microsoft Entra, Defender, and Sentinel." },
  { icon: RefreshCw, title: "Security Modernization", description: "Modernize legacy security with zero-trust architecture, cloud-native controls, identity protection, and intelligent threat detection." },
  { icon: Monitor, title: "Digital Workplace", description: "Enable a seamless, secure hybrid work experience with device lifecycle management, service desk support, and unified endpoint operations." },
  { icon: Brain, title: "AI Security", description: "Secure AI environments with advanced threat detection, responsible AI governance, risk-based access controls, and protection against adversarial attacks." },
];

const ConsultingServices = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">Consulting Services</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Secure Your Cloud, <span className="gradient-text">Empower Your Business</span></h1>
          <p className="text-lg text-muted-foreground">At Microtechx, we deliver cutting-edge, security-first solutions that empower businesses to thrive in the digital era.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={service.title} className="bg-card rounded-2xl p-8 border border-border/50 card-hover">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/contact" className="btn-gradient inline-flex items-center px-8 py-4 rounded-lg font-semibold">
            <span className="flex items-center gap-2">Get Started <ArrowRight className="w-5 h-5" /></span>
          </Link>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ConsultingServices;
