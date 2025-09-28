import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FilterSidebar from "@/components/FilterSidebar";
import ResourceGrid from "@/components/ResourceGrid";
import { Heart } from "lucide-react";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <FilterSidebar 
            isOpen={isSidebarOpen} 
            onClose={closeSidebar}
          />
          
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <ResourceGrid onToggleFilters={toggleSidebar} />
          </main>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">NIT Patna Resource Hub</h3>
              <p className="text-sm text-primary-foreground/80">
                Your one-stop destination for academic resources, 
                notes, and study materials at NIT Patna.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Browse Resources</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Submit Resource</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Guidelines</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Help & Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Categories</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Notes</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Previous Year Questions</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">External Links</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Lab Manuals</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>National Institute of Technology Patna</li>
                <li>Ashok Rajpath, Mahendru, Patna</li>
                <li>Bihar 800005</li>
                <li><a href="mailto:resources@nitp.ac.in" className="hover:text-primary-foreground transition-colors">resources@nitp.ac.in</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-hover mt-8 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2024 National Institute of Technology Patna. All Rights Reserved.</p>
            <p className="mt-1 flex items-center justify-center gap-1">Built with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> by NIT Patna Students</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;