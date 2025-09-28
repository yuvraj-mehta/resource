import HeroSection from "@/components/HeroSection";
import { BookOpen, Search, Users } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Resource Hub?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-background rounded-lg shadow-soft">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Vast Collection</h3>
            <p className="text-muted-foreground">Access thousands of academic resources, notes, and study materials</p>
          </div>
          <div className="text-center p-6 bg-background rounded-lg shadow-soft">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
            <p className="text-muted-foreground">Find exactly what you need with advanced filtering and search</p>
          </div>
          <div className="text-center p-6 bg-background rounded-lg shadow-soft">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-muted-foreground">Resources shared by students, for students</p>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;