import { Course } from '@/types/course';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, BookOpen, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
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
    <Card className="group h-full bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-0">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-foreground group-hover:text-education-primary transition-colors">
              {course.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground mt-2 line-clamp-2">
              {course.description}
            </CardDescription>
          </div>
          <Badge className={`${getLevelColor(course.level)} font-medium shrink-0`}>
            {course.level}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          <Badge variant="outline" className="text-education-primary border-education-primary/30 bg-education-primary/5">
            {course.category}
          </Badge>
          
          <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-education-accent" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-education-accent" />
              <span>{course.lectures.length} lectures</span>
            </div>
          </div>
          
          <Link to={`/courses/${course.id}`} className="block w-full">
            <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
              Start Learning
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};