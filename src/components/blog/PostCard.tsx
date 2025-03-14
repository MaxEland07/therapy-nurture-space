
import { Link } from "react-router-dom";
import { Post } from "../../services/ghost";
import { formatDistance } from "date-fns";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300">
      <CardHeader className="p-0">
        {post.feature_image && (
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <img
              src={post.feature_image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-grow p-5">
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt || ''}
        </p>
      </CardContent>
      <CardFooter className="px-5 pb-5 pt-0 text-sm text-gray-500 flex justify-between items-center">
        <div className="flex items-center">
          {post.primary_author?.profile_image && (
            <img
              src={post.primary_author.profile_image}
              alt={post.primary_author.name}
              className="w-8 h-8 rounded-full mr-2"
            />
          )}
          <span>{post.primary_author?.name || 'Anonymous'}</span>
        </div>
        {post.published_at && (
          <span>{formatDistance(new Date(post.published_at), new Date(), { addSuffix: true })}</span>
        )}
      </CardFooter>
    </Card>
  );
};

export default PostCard;
