import { BookOpen, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b shadow-soft ${isScrolled ? 'bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40 border-border/50' : 'bg-background border-border'}`}>
      {/* Main Header */}
      <div className="px-4 py-2">
        <div className="container mx-auto">
          {/* Brand */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Resource Hub
                </h1>
                <p className="text-xs text-muted-foreground">
                  Your Academic Resource Platform
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="bg-primary rounded-md shadow-medium">
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center gap-6">
                <a href="/" className="text-primary-foreground hover:bg-primary/60 px-2.5 py-1.5 rounded transition-colors">
                  Home
                </a>
                <a href="/browse" className="text-primary-foreground hover:bg-primary/60 px-2.5 py-1.5 rounded transition-colors">
                  Browse
                </a>
                <a href="/submit" className="text-primary-foreground hover:bg-primary/60 px-2.5 py-1.5 rounded transition-colors">
                  Submit
                </a>
                <a href="/about" className="text-primary-foreground hover:bg-primary/60 px-2.5 py-1.5 rounded transition-colors">
                  About
                </a>
              </div>
              

              <div className="flex items-center gap-2">
                <Button variant="secondary" size="sm" className="hidden md:flex h-8 px-3">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden text-primary-foreground h-8 px-3"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden border-t border-primary-hover px-4 py-3 space-y-3">
                <Button variant="secondary" size="sm" className="w-full h-9">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
