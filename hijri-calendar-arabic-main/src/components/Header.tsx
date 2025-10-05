import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="no-underline">
              <span className="text-2xl font-bold bg-gradient-to-r from-islamic-green to-islamic-blue bg-clip-text text-transparent">
                Taqweem Hijri
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                to="/" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                to="/converter" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                Date Converter
              </Link>
              <Link 
                to="/calendar" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
                title="Hijri Monthly Calendar"
              >
                Calendar
              </Link>
              <Link 
                to="/articles" 
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                Articles
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9"
            >
              {isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              className="md:hidden" 
              size="icon"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="block px-4 py-2 text-foreground/80 hover:bg-muted rounded-md"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link 
                  to="/converter" 
                  className="block px-4 py-2 text-foreground/80 hover:bg-muted rounded-md"
                  onClick={toggleMenu}
                >
                  Date Converter
                </Link>
                <Link 
                  to="/calendar" 
                  className="block px-4 py-2 text-foreground/80 hover:bg-muted rounded-md"
                  onClick={toggleMenu}
                  title="Hijri Monthly Calendar"
                >
                  Calendar
                </Link>
                <Link 
                  to="/articles" 
                  className="block px-4 py-2 text-foreground/80 hover:bg-muted rounded-md"
                  onClick={toggleMenu}
                >
                  Articles
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;