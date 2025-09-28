import { useState } from "react";
import { ArrowLeft, BookOpen, GraduationCap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SubjectResourceView from "@/components/SubjectResourceView";

const Browse = () => {
  const [currentStep, setCurrentStep] = useState<'branch' | 'semester' | 'subjects'>('branch');
  const [selectedBranch, setSelectedBranch] = useState<string>('');
  const [selectedSemester, setSelectedSemester] = useState<string>('');

  const branches = [
    { id: 'cse', name: 'Computer Science & Engineering', description: 'Programming, Software Development, Data Structures, Algorithms' },
    { id: 'ece', name: 'Electronics & Communication', description: 'Circuit Analysis, Digital Electronics, Communication Systems' },
    { id: 'ee', name: 'Electrical Engineering', description: 'Circuit Theory, Electrical Machines, Power Systems, Control Systems' },
    { id: 'me', name: 'Mechanical Engineering', description: 'Thermodynamics, Mechanics, Manufacturing, Heat Transfer' },
    { id: 'ce', name: 'Civil Engineering', description: 'Structural Analysis, Fluid Mechanics, Construction Management' },
    { id: 'arch', name: 'Architecture', description: 'Design, Planning, Construction Technology, Building Materials' }
  ];

  const semestersByBranch = {
    cse: [
      { id: 'sem1', name: 'Semester 1', description: 'Mathematics-I, Physics, Chemistry, Programming Fundamentals' },
      { id: 'sem2', name: 'Semester 2', description: 'Mathematics-II, Data Structures, Digital Logic, Object Oriented Programming' },
      { id: 'sem3', name: 'Semester 3', description: 'Algorithms, Database Systems, Computer Networks, Software Engineering' },
      { id: 'sem4', name: 'Semester 4', description: 'Operating Systems, Compiler Design, Web Technologies, System Design' },
      { id: 'sem5', name: 'Semester 5', description: 'Machine Learning, Computer Graphics, Mobile Computing, Project Management' },
      { id: 'sem6', name: 'Semester 6', description: 'Advanced Topics, Capstone Project, Industry Training, Electives' }
    ],
    ece: [
      { id: 'sem1', name: 'Semester 1', description: 'Mathematics-I, Physics, Chemistry, Basic Electronics' },
      { id: 'sem2', name: 'Semester 2', description: 'Mathematics-II, Circuit Analysis, Digital Electronics, Signals & Systems' },
      { id: 'sem3', name: 'Semester 3', description: 'Analog Electronics, Microprocessors, Communication Theory, Control Systems' },
      { id: 'sem4', name: 'Semester 4', description: 'VLSI Design, Embedded Systems, Wireless Communication, Signal Processing' },
      { id: 'sem5', name: 'Semester 5', description: 'Advanced Communication, IoT, RF Engineering, Project Work' },
      { id: 'sem6', name: 'Semester 6', description: 'Capstone Project, Industry Training, Advanced Electives' }
    ],
    ee: [
      { id: 'sem1', name: 'Semester 1', description: 'Mathematics-I, Physics, Chemistry, Basic Electrical Engineering' },
      { id: 'sem2', name: 'Semester 2', description: 'Mathematics-II, Circuit Theory, Electrical Machines, Power Systems' },
      { id: 'sem3', name: 'Semester 3', description: 'Power Electronics, Control Systems, Electrical Drives, Measurements' },
      { id: 'sem4', name: 'Semester 4', description: 'Power Systems Protection, Renewable Energy, Smart Grid, High Voltage' },
      { id: 'sem5', name: 'Semester 5', description: 'Advanced Power Systems, Energy Management, Project Work' },
      { id: 'sem6', name: 'Semester 6', description: 'Capstone Project, Industry Training, Specialization Electives' }
    ],
    me: [
      { id: 'sem1', name: 'Semester 1', description: 'Mathematics-I, Physics, Chemistry, Engineering Drawing' },
      { id: 'sem2', name: 'Semester 2', description: 'Mathematics-II, Thermodynamics, Mechanics, Material Science' },
      { id: 'sem3', name: 'Semester 3', description: 'Heat Transfer, Machine Design, Manufacturing Processes, Fluid Mechanics' },
      { id: 'sem4', name: 'Semester 4', description: 'Automotive Engineering, Robotics, CAD/CAM, Quality Control' },
      { id: 'sem5', name: 'Semester 5', description: 'Advanced Manufacturing, Project Management, Industrial Engineering' },
      { id: 'sem6', name: 'Semester 6', description: 'Capstone Project, Industry Training, Specialization Electives' }
    ],
    ce: [
      { id: 'sem1', name: 'Semester 1', description: 'Mathematics-I, Physics, Chemistry, Engineering Drawing' },
      { id: 'sem2', name: 'Semester 2', description: 'Mathematics-II, Structural Analysis, Fluid Mechanics, Surveying' },
      { id: 'sem3', name: 'Semester 3', description: 'Concrete Technology, Geotechnical Engineering, Transportation, Environmental' },
      { id: 'sem4', name: 'Semester 4', description: 'Construction Management, Advanced Structures, Water Resources' },
      { id: 'sem5', name: 'Semester 5', description: 'Infrastructure Planning, Project Management, Advanced Electives' },
      { id: 'sem6', name: 'Semester 6', description: 'Capstone Project, Industry Training, Specialization' }
    ],
    arch: [
      { id: 'sem1', name: 'Semester 1', description: 'Architectural Drawing, History of Architecture, Basic Design' },
      { id: 'sem2', name: 'Semester 2', description: 'Building Construction, Materials, Structural Systems, Design Studio' },
      { id: 'sem3', name: 'Semester 3', description: 'Urban Planning, Environmental Design, Construction Technology' },
      { id: 'sem4', name: 'Semester 4', description: 'Advanced Design Studio, Project Management, Sustainable Architecture' },
      { id: 'sem5', name: 'Semester 5', description: 'Professional Practice, Advanced Construction, Thesis Preparation' },
      { id: 'sem6', name: 'Semester 6', description: 'Thesis Project, Industry Training, Portfolio Development' }
    ]
  };

  const handleBranchSelect = (branch: string) => {
    setSelectedBranch(branch);
    setSelectedSemester('');
    setCurrentStep('semester');
  };

  const handleSemesterSelect = (semester: string) => {
    setSelectedSemester(semester);
    setCurrentStep('subjects');
  };

  const handleBack = () => {
    if (currentStep === 'subjects') {
      setCurrentStep('semester');
    } else if (currentStep === 'semester') {
      setCurrentStep('branch');
    }
  };

  const resetSelection = () => {
    setCurrentStep('branch');
    setSelectedBranch('');
    setSelectedSemester('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary-foreground mb-2">Browse Resources</h1>
              <p className="text-primary-foreground/80">Find study materials organized by branch, semester, and subjects</p>
            </div>
            
            {/* Breadcrumb */}
            <div className="hidden md:flex items-center gap-2 text-primary-foreground/80">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={resetSelection}
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                Browse
              </Button>
              {selectedBranch && (
                <>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-sm">{branches?.find(b => b.id === selectedBranch)?.name.split(' ')[0]}</span>
                </>
              )}
              {selectedSemester && (
                <>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-sm">{semestersByBranch[selectedBranch as keyof typeof semestersByBranch]?.find(s => s.id === selectedSemester)?.name}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        {currentStep !== 'branch' && (
          <Button 
            variant="ghost" 
            onClick={handleBack}
            className="mb-8 hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        )}

        {/* Branch Selection */}
        {currentStep === 'branch' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Select Your Branch</h2>
              </div>
              <p className="text-muted-foreground">Choose your engineering branch to explore semester-wise resources</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {branches.map((branch) => (
                <Card 
                  key={branch.id}
                  className="cursor-pointer hover:shadow-medium transition-all duration-200 hover:scale-[1.02] border-2 hover:border-primary/50"
                  onClick={() => handleBranchSelect(branch.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{branch.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{branch.description}</p>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        6 Semesters
                      </Badge>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Semester Selection */}
        {currentStep === 'semester' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Select Semester</h2>
              </div>
              <p className="text-muted-foreground">
                Choose semester for {branches?.find(b => b.id === selectedBranch)?.name}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {semestersByBranch[selectedBranch as keyof typeof semestersByBranch]?.map((semester) => (
                <Card 
                  key={semester.id}
                  className="cursor-pointer hover:shadow-medium transition-all duration-200 hover:scale-105 border-2 hover:border-primary/50"
                  onClick={() => handleSemesterSelect(semester.id)}
                >
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl text-primary">{semester.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{semester.description}</p>
                    <div className="mt-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Select Semester
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Subject Resources View */}
        {currentStep === 'subjects' && (
          <SubjectResourceView 
            branch={selectedBranch}
            semester={selectedSemester}
            branchName={branches?.find(b => b.id === selectedBranch)?.name || ''}
            semesterName={semestersByBranch[selectedBranch as keyof typeof semestersByBranch]?.find(s => s.id === selectedSemester)?.name || ''}
          />
        )}
      </div>
    </div>
  );
};

export default Browse;