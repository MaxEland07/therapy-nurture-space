
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPostBySlug } from "../services/ghost";
import { Skeleton } from "@/components/ui/skeleton";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: () => getPostBySlug(slug || ''),
    enabled: !!slug,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // If error or post not found, redirect back to blog
  useEffect(() => {
    if (error || (post === null && !isLoading)) {
      navigate('/blog');
    }
  }, [error, post, isLoading, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {isLoading ? (
          <div className="container mx-auto px-4 py-12 max-w-3xl">
            <Skeleton className="h-12 w-3/4 mb-6" />
            <Skeleton className="h-6 w-full mb-8" />
            <Skeleton className="h-72 w-full mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        ) : post ? (
          <>
            {post.feature_image && (
              <div className="relative w-full h-[40vh] overflow-hidden">
                <img 
                  src={post.feature_image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            )}
            
            <article className="container mx-auto px-4 py-12 max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex items-center text-gray-500 mb-8">
                {post.primary_author?.profile_image && (
                  <img 
                    src={post.primary_author.profile_image} 
                    alt={post.primary_author.name} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                )}
                <div>
                  <div className="font-medium">{post.primary_author?.name || 'Anonymous'}</div>
                  {post.published_at && (
                    <div className="text-sm">
                      {format(new Date(post.published_at), 'MMMM d, yyyy')} 
                      {post.reading_time && ` • ${post.reading_time} min read`}
                    </div>
                  )}
                </div>
              </div>
              
              <div 
                className="prose prose-lg max-w-none prose-slate"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </article>
          </>
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
