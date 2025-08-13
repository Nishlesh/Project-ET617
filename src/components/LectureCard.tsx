import { Lecture } from '@/types/course';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LectureCardProps {
  lecture: Lecture;
  courseId: string;
  lectureNumber: number;
}

export const LectureCard = ({ lecture, courseId, lectureNumber }: LectureCardProps) => {
  return (
    <Card className="group bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-0">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
            {lectureNumber}
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-foreground group-hover:text-education-primary transition-colors">
              {lecture.title}
            </CardTitle>
            <div className="flex items-center gap-2 mt-1">
              <Clock className="h-4 w-4 text-education-accent" />
              <span className="text-sm text-muted-foreground">{lecture.duration}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <CardDescription className="text-muted-foreground mb-4 line-clamp-2">
          {lecture.summary}
        </CardDescription>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {lecture.youtubeVideos.length} videos • {lecture.textbookReferences.length} references
          </div>
          
          <Link to={`/courses/${courseId}/lectures/${lecture.id}`}>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Play className="h-4 w-4 mr-1" />
              Watch
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};