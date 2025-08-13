import { courses } from '@/data/courses';
import { CourseCard } from '@/components/CourseCard';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, BookOpen, Users, Star } from 'lucide-react';

const Index = () => {
  console.log('Index component rendering, courses:', courses);
  console.log('Number of courses:', courses.length);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <GraduationCap className="h-16 w-16 mx-auto mb-4 text-white/90" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Master Technology Skills
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Learn from comprehensive courses in Machine Learning, Computer Science, Data Science, 
              and Software Engineering with expert-curated content and hands-on projects.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-education-secondary" />
                  <div className="text-2xl font-bold">{courses.length}</div>
                  <div className="text-white/80">Courses Available</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-education-secondary" />
                  <div className="text-2xl font-bold">{courses.reduce((acc, course) => acc + course.lectures.length, 0)}</div>
                  <div className="text-white/80">Total Lectures</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 mx-auto mb-2 text-education-secondary" />
                  <div className="text-2xl font-bold">Expert</div>
                  <div className="text-white/80">Quality Content</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully designed courses that combine theoretical knowledge 
              with practical applications to accelerate your career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted/30 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 TechLearn Academy. Start your learning journey today.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
