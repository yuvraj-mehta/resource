import { useState } from "react";
import { Grid, List, Filter, SlidersHorizontal, Clock, Eye, Download, SortAsc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ResourceCard from "./ResourceCard";

const mockResources = [
  {
    id: "1",
    title: "Data Structures and Algorithms - Complete Notes",
    description: "Comprehensive notes covering all topics from arrays to graphs with examples and code implementations.",
    branch: "Computer Science & Engineering",
    year: "2nd Year", 
    category: "Notes",
    tags: ["Data Structures", "Algorithms", "Programming", "C++"],
    uploader: "Rahul Kumar",
    uploadedAt: "2024-03-15",
    type: "file" as const,
    views: 245,
    downloads: 89
  },
  {
    id: "2", 
    title: "Thermodynamics PYQ 2019-2023",
    description: "Previous year question papers for Thermodynamics course with solutions and marking schemes.",
    branch: "Mechanical Engineering",
    year: "3rd Year",
    category: "Previous Year Questions", 
    tags: ["Thermodynamics", "Heat Transfer", "Energy"],
    uploader: "Priya Sharma",
    uploadedAt: "2024-03-10",
    type: "file" as const,
    views: 156,
    downloads: 67
  },
  {
    id: "3",
    title: "Digital Electronics Tutorial Series",
    description: "External link to comprehensive video tutorial series on digital electronics concepts.",
    branch: "Electronics & Communication",
    year: "2nd Year",
    category: "External Links",
    tags: ["Digital Electronics", "Logic Gates", "Flip Flops"],
    uploader: "Amit Verma", 
    uploadedAt: "2024-03-08",
    type: "link" as const,
    views: 98,
    downloads: 45
  },
  {
    id: "4",
    title: "Fluid Mechanics Lab Manual",
    description: "Complete lab manual with experiments, procedures, and calculation methods for fluid mechanics laboratory.",
    branch: "Civil Engineering", 
    year: "3rd Year",
    category: "Notes",
    tags: ["Fluid Mechanics", "Laboratory", "Experiments"],
    uploader: "Sneha Gupta",
    uploadedAt: "2024-03-05",
    type: "file" as const,
    views: 134,
    downloads: 52
  },
  {
    id: "5",
    title: "Mathematics-III Solved Examples",
    description: "Step-by-step solutions to complex problems in Mathematics-III including Fourier series and transforms.",
    branch: "Computer Science & Engineering",
    year: "2nd Year",
    category: "Notes", 
    tags: ["Mathematics", "Fourier Series", "Calculus"],
    uploader: "Vikash Singh",
    uploadedAt: "2024-03-01",
    type: "file" as const,
    views: 189,
    downloads: 73
  },
  {
    id: "6",
    title: "Power Systems PYQ with Solutions",
    description: "Previous year questions from 2020-2024 with detailed solutions and explanations.",
    branch: "Electrical Engineering",
    year: "4th Year",
    category: "Previous Year Questions",
    tags: ["Power Systems", "Electrical", "Solutions"],
    uploader: "Anjali Das",
    uploadedAt: "2024-02-28",
    type: "file" as const,
    views: 167,
    downloads: 61
  }
];

interface ResourceGridProps {
  onToggleFilters: () => void;
}

const ResourceGrid = ({ onToggleFilters }: ResourceGridProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');

  const handlePreview = (id: string) => {
    console.log('Preview resource:', id);
    // TODO: Open preview modal
  };

  const handleDownload = (id: string) => {
    console.log('Download resource:', id);
    // TODO: Handle download/external link
  };

  return (
    <div className="space-y-8">
      {/* Enhanced Controls */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-soft">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={onToggleFilters}
              className="lg:hidden shadow-sm hover:shadow-medium transition-shadow"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <p className="text-sm font-medium text-foreground">
                Showing <span className="text-primary font-semibold">{mockResources.length}</span> resources
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-44 shadow-sm hover:shadow-medium transition-shadow">
                <SlidersHorizontal className="w-4 h-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="sample" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest"><Clock className="w-4 h-4 inline mr-2" />Newest First</SelectItem>
                <SelectItem value="oldest"><Clock className="w-4 h-4 inline mr-2" />Oldest First</SelectItem>
                <SelectItem value="most-viewed"><Eye className="w-4 h-4 inline mr-2" />Most Viewed</SelectItem>
                <SelectItem value="most-downloaded"><Download className="w-4 h-4 inline mr-2" />Most Downloaded</SelectItem>
                <SelectItem value="title"><SortAsc className="w-4 h-4 inline mr-2" />Title A-Z</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center bg-muted rounded-lg p-1 shadow-sm">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="px-3 transition-all duration-200"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="px-3 transition-all duration-200"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid/List */}
      <div className={
        viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          : "space-y-6"
      }>
        {mockResources.map((resource, index) => (
          <div 
            key={resource.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ResourceCard
              resource={resource}
              onPreview={handlePreview}
              onDownload={handleDownload}
              viewMode={viewMode}
            />
          </div>
        ))}
      </div>

      {/* Enhanced Load More */}
      <div className="text-center pt-12">
        <div className="inline-flex flex-col items-center gap-4">
          <Button variant="hero" size="lg" className="px-8 py-3 text-lg">
            Load More Resources
          </Button>
          <p className="text-sm text-muted-foreground">
            Showing {mockResources.length} of 1,250+ resources
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourceGrid;
