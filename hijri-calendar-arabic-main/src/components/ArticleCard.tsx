import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, CalendarDays, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  id?: string | number;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: string;
  imageUrl?: string;
}

export const ArticleCard = ({
  id,
  title,
  excerpt,
  readTime,
  date,
  category,
  imageUrl
}: ArticleCardProps) => {
  // Function to create URL-friendly slug from title
  const createSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .trim()
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/--+/g, '-'); // Replace multiple hyphens with single hyphen
  };

  return (
    <Link to={`/articles/${id || '1'}/${createSlug(title)}`} className="block h-full group">
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/images/placeholder-article.jpg';
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-islamic-green/20 to-islamic-blue/20">
              <BookOpen className="h-12 w-12 text-gray-400" />
            </div>
          )}
        </div>
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span className="flex items-center gap-1">
              {category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              {date}
            </span>
          </div>
          <h3 className="text-xl font-bold line-clamp-2">{title}</h3>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center pt-0">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {readTime} read
          </div>
          <Button variant="ghost" className="text-islamic-blue hover:bg-islamic-blue/10">
            Read More
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
