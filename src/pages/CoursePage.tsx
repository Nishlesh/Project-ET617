import { useParams, Link } from 'react-router-dom';
import { courses } from '@/data/courses';
import { LectureCard } from '@/components/LectureCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, BookOpen, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CoursePage = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Link to="/">
            <Button>Return to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-education-success text-white';
      case 'intermediate':
        return 'bg-education-accent text-white';
      case 'advanced':
        return 'bg-education-secondary text-white';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-white">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className={`${getLevelColor(course.level)} font-medium`}>
                {course.level}
              </Badge>
              <Badge variant="outline" className="text-white border-white/30 bg-white/10">
                {course.category}
              </Badge>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-white/90 mb-6 max-w-3xl">{course.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-white/80" />
                <span className="text-white/90">{course.duration}</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-white/80" />
                <span className="text-white/90">{course.lectures.length} Lectures</span>
              </div>
              <div className="flex items-center gap-3">
                <BarChart3 className="h-5 w-5 text-white/80" />
                <span className="text-white/90">{course.level} Level</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Course Lectures</h2>
            <p className="text-muted-foreground text-lg">
              Complete all {course.lectures.length} lectures to master {course.title.toLowerCase()}.
            </p>
          </div>

          <div className="grid gap-6">
            {course.lectures.map((lecture, index) => (
              <LectureCard
                key={lecture.id}
                lecture={lecture}
                courseId={course.id}
                lectureNumber={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;