import { useState } from "react";
import { ChevronDown, ChevronUp, Filter, X, GraduationCap, BookOpen, Tag, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar = ({ isOpen, onClose }: FilterSidebarProps) => {
  const [expandedSections, setExpandedSections] = useState({
    branch: true,
    year: true,
    category: true,
    tags: false
  });

  const [selectedFilters, setSelectedFilters] = useState({
    branches: [] as string[],
    years: [] as string[],
    categories: [] as string[],
    tags: [] as string[]
  });

  const branches = [
    "Computer Science & Engineering",
    "Electrical Engineering", 
    "Mechanical Engineering",
    "Civil Engineering",
    "Electronics & Communication",
    "Architecture"
  ];

  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
  const categories = ["Notes", "Previous Year Questions", "External Links", "Other"];
  const tags = ["Mathematics", "Physics", "Programming", "Data Structures", "Algorithms", "Thermodynamics"];

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      branches: [],
      years: [],
      categories: [],
      tags: []
    });
  };

  const hasActiveFilters = Object.values(selectedFilters).some(arr => arr.length > 0);

  const FilterSection = ({ 
    title, 
    section, 
    items, 
    selected, 
    onToggle 
  }: {
    title: React.ReactNode;
    section: keyof typeof expandedSections;
    items: string[];
    selected: string[];
    onToggle: (item: string) => void;
  }) => (
    <div className="space-y-4">
      <Button
        variant="ghost"
        className="w-full justify-between p-3 h-auto font-semibold text-left hover:bg-muted/50 transition-colors rounded-lg"
        onClick={() => toggleSection(section)}
      >
        <span className="text-base">{title}</span>
        <div className={`transition-transform duration-200 ${expandedSections[section] ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </Button>
      
      {expandedSections[section] && (
        <div className="space-y-3 pl-4 animate-accordion-down">
          {items.map((item) => (
            <label key={item} className="flex items-center space-x-3 cursor-pointer group hover:bg-muted/30 p-2 rounded-md transition-colors">
              <Checkbox 
                checked={selected.includes(item)}
                onCheckedChange={() => onToggle(item)}
                className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                {item}
              </span>
              {selected.includes(item) && (
                <div className="ml-auto w-2 h-2 bg-accent rounded-full" />
              )}
            </label>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Enhanced Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 h-screen w-80 bg-card/95 backdrop-blur-xl border-r border-border/50 z-50
        transform transition-all duration-300 ease-in-out shadow-elegant
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:block overflow-y-auto
      `}>
        <div className="p-6">
          {/* Enhanced Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Filter className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Filters
              </h2>
            </div>
            <div className="flex items-center gap-2">
              {hasActiveFilters && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearAllFilters}
                  className="text-destructive hover:text-destructive hover:bg-destructive/10 transition-colors"
                >
                  Clear All
                </Button>
              )}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onClose}
                className="lg:hidden hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Enhanced Active Filters */}
          {hasActiveFilters && (
            <div className="mb-8 p-4 bg-accent/5 border border-accent/20 rounded-lg">
              <p className="text-sm font-semibold mb-3 text-accent">Active Filters:</p>
              <div className="flex flex-wrap gap-2">
                {[...selectedFilters.branches, ...selectedFilters.years, ...selectedFilters.categories, ...selectedFilters.tags].map((filter) => (
                  <Badge key={filter} variant="secondary" className="text-xs px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                    {filter}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <Separator className="mb-8 bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Enhanced Filter Sections */}
          <div className="space-y-8">
            <FilterSection
              title={<><GraduationCap className="w-4 h-4 inline mr-2" />Branch</>}
              section="branch"
              items={branches}
              selected={selectedFilters.branches}
              onToggle={(item) => {
                setSelectedFilters(prev => ({
                  ...prev,
                  branches: prev.branches.includes(item)
                    ? prev.branches.filter(b => b !== item)
                    : [...prev.branches, item]
                }));
              }}
            />

            <Separator className="bg-gradient-to-r from-transparent via-border to-transparent" />

            <FilterSection
              title={<><BookOpen className="w-4 h-4 inline mr-2" />Academic Year</>}
              section="year"
              items={years}
              selected={selectedFilters.years}
              onToggle={(item) => {
                setSelectedFilters(prev => ({
                  ...prev,
                  years: prev.years.includes(item)
                    ? prev.years.filter(y => y !== item)
                    : [...prev.years, item]
                }));
              }}
            />

            <Separator className="bg-gradient-to-r from-transparent via-border to-transparent" />

            <FilterSection
              title={<><Folder className="w-4 h-4 inline mr-2" />Category</>}
              section="category"
              items={categories}
              selected={selectedFilters.categories}
              onToggle={(item) => {
                setSelectedFilters(prev => ({
                  ...prev,
                  categories: prev.categories.includes(item)
                    ? prev.categories.filter(c => c !== item)
                    : [...prev.categories, item]
                }));
              }}
            />

            <Separator className="bg-gradient-to-r from-transparent via-border to-transparent" />

            <FilterSection
              title={<><Tag className="w-4 h-4 inline mr-2" />Tags</>}
              section="tags"
              items={tags}
              selected={selectedFilters.tags}
              onToggle={(item) => {
                setSelectedFilters(prev => ({
                  ...prev,
                  tags: prev.tags.includes(item)
                    ? prev.tags.filter(t => t !== item)
                    : [...prev.tags, item]
                }));
              }}
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;