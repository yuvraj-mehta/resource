import { Eye, Download, ExternalLink, Calendar, User, GraduationCap, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ResourceCardProps {
  resource: {
    id: string;
    title: string;
    description: string;
    branch: string;
    year: string;
    category: string;
    tags: string[];
    uploader: string;
    uploadedAt: string;
    type: 'file' | 'link';
    views: number;
    downloads: number;
  };
  onPreview: (id: string) => void;
  onDownload: (id: string) => void;
  viewMode?: 'grid' | 'list';
}

const ResourceCard = ({ resource, onPreview, onDownload, viewMode = 'grid' }: ResourceCardProps) => {
  if (viewMode === 'list') {
    return (
      <Card className="hover:shadow-medium transition-all duration-300 border-border/50 group hover:border-primary/20">
        <CardContent className="p-6">
          <div className="flex gap-6">
            {/* Left Content */}
            <div className="flex-1 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge 
                      variant={resource.type === 'file' ? 'default' : 'secondary'} 
                      className="text-xs"
                    >
                      {resource.type === 'file' ? (
                        <>
                          <FileText className="w-3 h-3 mr-1" />
                          File
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Link
                        </>
                      )}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {resource.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold leading-tight mb-2 group-hover:text-primary transition-colors cursor-pointer">
                    {resource.title}
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-2 mb-4">
                    {resource.description}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <GraduationCap className="w-4 h-4" />
                      <span>{resource.branch}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{resource.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>By {resource.uploader}</span>
                    </div>
                  </div>
                </div>
                
                {/* Right Actions */}
                <div className="flex flex-col gap-2 min-w-[120px]">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPreview(resource.id)}
                    className="w-full"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Preview
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => onDownload(resource.id)}
                    className="w-full"
                  >
                    {resource.type === 'file' ? (
                      <>
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Open
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {resource.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                  {resource.tags.length > 4 && (
                    <Badge variant="secondary" className="text-xs px-2 py-0.5">
                      +{resource.tags.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{resource.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span>{resource.downloads}</span>
                  </div>
                  <span>{new Date(resource.uploadedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full hover:shadow-elegant transition-all duration-300 border-border/50 group hover:border-primary/20 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-3">
          <Badge 
            variant={resource.type === 'file' ? 'default' : 'secondary'} 
            className="text-xs shadow-sm"
          >
            {resource.type === 'file' ? (
              <>
                <FileText className="w-3 h-3 mr-1" />
                File
              </>
            ) : (
              <>
                <ExternalLink className="w-3 h-3 mr-1" />
                Link
              </>
            )}
          </Badge>
          <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/20">
            {resource.category}
          </Badge>
        </div>
        
        <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-primary cursor-pointer transition-colors duration-200">
          {resource.title}
        </CardTitle>
        
        <CardDescription className="line-clamp-2 text-sm leading-relaxed">
          {resource.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 flex-1 flex flex-col">
        {/* Metadata */}
        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="font-medium">{resource.branch}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent" />
            <span>{resource.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-muted-foreground" />
            <span>By {resource.uploader}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {resource.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs px-2 py-1 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
              {tag}
            </Badge>
          ))}
          {resource.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs px-2 py-1 bg-muted/50">
              +{resource.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              <span className="font-medium">{resource.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="w-3.5 h-3.5" />
              <span className="font-medium">{resource.downloads}</span>
            </div>
          </div>
          <span className="text-xs">{new Date(resource.uploadedAt).toLocaleDateString()}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t border-border/50 mt-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPreview(resource.id)}
            className="flex-1 hover:bg-muted/50 transition-colors"
          >
            <Eye className="w-4 h-4 mr-1" />
            Preview
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => onDownload(resource.id)}
            className="flex-1 shadow-sm hover:shadow-medium transition-shadow"
          >
            {resource.type === 'file' ? (
              <>
                <Download className="w-4 h-4 mr-1" />
                Download
              </>
            ) : (
              <>
                <ExternalLink className="w-4 h-4 mr-1" />
                Open
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;