import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays, Clock, Share2 } from "lucide-react";
import { articles } from './Articles';

export default function ArticleDetail() {
  const { id, title: urlTitle } = useParams<{ id: string; title?: string }>();
  const navigate = useNavigate();
  const article = articles.find(a => a.id.toString() === id);
  
  // If the URL title doesn't match the article's title, redirect to the correct URL
  useEffect(() => {
    if (article && urlTitle) {
      const createSlug = (text: string) => {
        return text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-')
          .replace(/--+/g, '-');
      };
      
      const expectedSlug = createSlug(article.title);
      if (urlTitle !== expectedSlug) {
        navigate(`/articles/${id}/${expectedSlug}`, { replace: true });
      }
    }
  }, [article, id, urlTitle, navigate]);

  // Handle clicks on internal links and table of contents
  const handleArticleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' && target.hasAttribute('href') && target.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
      const id = target.getAttribute('href')?.substring(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100; // Adjust this value based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Update URL without page reload
          window.history.pushState({}, '', `#${id}`);
        }
      }
    } else if (target.tagName === 'A' && target.hasAttribute('data-internal-link')) {
      e.preventDefault();
      const href = target.getAttribute('href');
      if (href) {
        navigate(href);
      }
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/articles">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/articles" className="flex items-center text-islamic-blue">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>
        </Button>
        
        <header className="mb-12">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
            <span className="px-3 py-1 bg-islamic-green/10 text-islamic-green text-xs font-medium rounded-full">
              {article.category}
            </span>
            <span className="flex items-center">
              <CalendarDays className="mr-1 h-4 w-4" />
              {article.date}
            </span>
            <span className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {article.readTime} read
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {article.title}
          </h1>
          
          {/* Article Image */}
          <div className="w-full mb-8 rounded-lg overflow-hidden shadow-md">
            <img 
              src="/images/convert%20hijri%20to%20gregorian.jpg.png" 
              alt="Hijri to Gregorian date conversion" 
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-sm font-medium">
                A
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Anas</h3>
            </div>
            <Button variant="outline" size="icon" className="ml-auto">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
        </header>
        
        <div className="prose dark:prose-invert max-w-none">
          <div 
            className="prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold mb-6">About the Author</h2>
            <div className="flex items-start space-x-6">
              <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center">
                <span className="text-lg font-medium">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{article.author}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Anas is a dedicated researcher of Islamic studies with a passion for sharing knowledge about the Hijri calendar and Islamic traditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
