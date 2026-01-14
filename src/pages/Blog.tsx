import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">Blog</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Insights & <span className="gradient-text">Resources</span></h1>
          <p className="text-lg text-muted-foreground">Stay updated with the latest in cybersecurity, AI, and cloud technology.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-card rounded-2xl overflow-hidden border border-border/50 card-hover">
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">{post.category}</span>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Blog;
