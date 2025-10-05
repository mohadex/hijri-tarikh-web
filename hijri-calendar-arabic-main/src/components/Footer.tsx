import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Logo and Description */}
          <div className="text-center md:text-start">
            <h3 className="text-lg font-bold mb-4">Taqweem Hijri</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A comprehensive platform for displaying Hijri and Gregorian dates with conversion tools and monthly calendar
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/converter" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Date Converter
              </Link>
              <Link to="/calendar" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Monthly Calendar
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center md:text-end">
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>• All rights reserved {new Date().getFullYear()}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Note: This website is for educational and illustrative purposes. For accurate dates, please refer to official sources.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;