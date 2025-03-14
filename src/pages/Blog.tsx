
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import PostCard from "../components/blog/PostCard";
import { getPosts } from "../services/ghost";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: () => getPosts(),
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader 
          title="Insights for Mental Wellbeing" 
          description="Explore articles, tips, and resources for improving your mental health."
          pageName="Blog & Resources"
        />
        
        <section className="section">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="h-48 w-full rounded-lg" />
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-12 text-gray-500">
                <p>Failed to load blog posts. Please try again later.</p>
              </div>
            ) : posts?.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p>No blog posts found. Check back soon for new content.</p>
                <p className="mt-4 text-sm">
                  This blog section is powered by Ghost CMS. If you're an administrator, you can
                  add posts through the Ghost admin panel.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
