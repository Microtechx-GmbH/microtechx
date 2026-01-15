import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
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

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p: BlogPost) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold">Post not found</h1>
          <Link to="/blog" className="text-primary mt-4 inline-block">Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">{post.category}</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-6 text-muted-foreground mb-8">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{post.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</span>
          </div>
          
          <img src={post.image} alt={post.title} className="w-full rounded-2xl mb-12" />
          
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph: string, i: number) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={i} className="list-disc pl-6 my-4 space-y-2">
                    {paragraph.split('\n').map((item: string, j: number) => (
                      <li key={j} className="text-muted-foreground">{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.match(/^\d\./)) {
                return (
                  <ol key={i} className="list-decimal pl-6 my-4 space-y-2">
                    {paragraph.split('\n').map((item: string, j: number) => (
                      <li key={j} className="text-muted-foreground">{item.replace(/^\d\.\s/, '')}</li>
                    ))}
                  </ol>
                );
              }
              return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>;
            })}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
