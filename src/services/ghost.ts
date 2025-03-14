
import GhostContentAPI from '@tryghost/content-api';

// Initialize Ghost API client
// When you set up your Ghost blog, you'll need to replace these values with your actual Ghost URL and content API key
export const ghost = new GhostContentAPI({
  url: process.env.GHOST_URL || 'https://demo.ghost.io', // Using demo for development (replace with your Ghost URL)
  key: process.env.GHOST_CONTENT_API_KEY || '22444f78447824223cefc48062', // Demo key (replace with your Content API key)
  version: 'v5.0'
});

export type Post = {
  id: string;
  slug: string;
  title: string;
  html: string;
  feature_image?: string;
  excerpt?: string;
  published_at?: string;
  reading_time?: number;
  primary_author?: {
    name: string;
    profile_image?: string;
  };
};

// Fetch all posts
export const getPosts = async (limit = 10): Promise<Post[]> => {
  try {
    return await ghost.posts
      .browse({
        limit,
        include: ['tags', 'authors'],
      });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

// Fetch a single post by slug
export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    return await ghost.posts.read({
      slug,
      include: ['tags', 'authors'],
    });
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
};
