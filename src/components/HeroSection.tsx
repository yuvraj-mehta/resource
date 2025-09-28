import { Search, BookOpen, FileText, ExternalLink, Users, Monitor, TrendingUp, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="gradient-subtle py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Academic Resource Hub
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Access notes, previous year questions, and study materials shared by your fellow NITians. 
            Find resources organized by branch, year, and subject.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="sample" 
                className="pl-12 pr-4 py-4 text-lg border-2 focus:border-primary shadow-soft"
              />
              <Button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3 mx-auto">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">1,250+</div>
              <div className="text-sm text-muted-foreground">Resources</div>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-lg mb-3 mx-auto">
                <FileText className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">850+</div>
              <div className="text-sm text-muted-foreground">Notes</div>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3 mx-auto">
                <ExternalLink className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">400+</div>
              <div className="text-sm text-muted-foreground">PYQs</div>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-3 mx-auto">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">200+</div>
              <div className="text-sm text-muted-foreground">Contributors</div>
            </div>
          </div>

          {/* Browse Categories */}
          <div className="text-center">
            <h2 className="text-lg font-semibold text-foreground mb-4">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                <BookOpen className="w-4 h-4 mr-2" />Notes
              </Button>
              <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                <FileText className="w-4 h-4 mr-2" />Previous Year Questions
              </Button>
              <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                <Search className="w-4 h-4 mr-2" />External Links
              </Button>
              <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                <Monitor className="w-4 h-4 mr-2" />Computer Science
              </Button>
              <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                <TrendingUp className="w-4 h-4 mr-2" />Electrical Engineering
              </Button>
              <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                <Wrench className="w-4 h-4 mr-2" />Mechanical Engineering
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
