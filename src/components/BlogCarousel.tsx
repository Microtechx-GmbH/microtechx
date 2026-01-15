import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

const BlogCarousel = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between mb-12">
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Latest Insights</span>
          <h2 className="section-title">From Our <span className="gradient-text">Blog</span></h2>
        </div>
        <Link to="/blog" className="btn-outline hidden md:inline-flex items-center px-6 py-3 rounded-lg font-semibold">
          View All <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(0, 3).map((post: BlogPost) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-card rounded-2xl overflow-hidden border border-border/50 card-hover">
            <div className="aspect-video overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">{post.category}</span>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="text-center mt-8 md:hidden">
        <Link to="/blog" className="btn-gradient inline-flex items-center px-6 py-3 rounded-lg font-semibold">
          View All Posts <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  </section>
);

export default BlogCarousel;
