import { useParams, Link } from 'react-router-dom';
import { courses } from '@/data/courses';
import { YouTubeEmbed } from '@/components/YouTubeEmbed';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Clock, Book, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const LecturePage = () => {
  const { courseId, lectureId } = useParams();
  const course = courses.find(c => c.id === courseId);
  const lecture = course?.lectures.find(l => l.id === lectureId);

  if (!course || !lecture) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lecture not found</h1>
          <Link to="/">
            <Button>Return to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const lectureNumber = course.lectures.findIndex(l => l.id === lectureId) + 1;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-white">
        <div className="container mx-auto px-4 py-6">
          <Link 
            to={`/courses/${courseId}`} 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {course.title}
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                {lectureNumber}
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="h-4 w-4" />
                <span>{lecture.duration}</span>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-3">{lecture.title}</h1>
            <p className="text-lg text-white/90">{lecture.summary}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Summary */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Lecture Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{lecture.summary}</p>
              </CardContent>
            </Card>

            {/* YouTube Videos */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Video Content</h2>
              <div className="space-y-6">
                {lecture.youtubeVideos.map((video) => (
                  <Card key={video.id} className="bg-gradient-card shadow-card border-0">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {video.title}
                      </CardTitle>
                      <CardDescription>{video.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <YouTubeEmbed videoId={video.videoId} title={video.title} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Textbook References */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Book className="h-5 w-5 text-education-primary" />
                  Textbook References
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {lecture.textbookReferences.map((ref) => (
                  <div key={ref.id} className="border-l-4 border-education-primary pl-4 py-2">
                    <h4 className="font-semibold text-foreground">{ref.title}</h4>
                    <p className="text-sm text-muted-foreground">by {ref.author}</p>
                    <p className="text-sm text-education-primary font-medium">
                      {ref.chapter}, Pages {ref.pages}
                    </p>
                    {ref.isbn && (
                      <p className="text-xs text-muted-foreground">ISBN: {ref.isbn}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Navigation */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-foreground">Navigation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {lectureNumber > 1 && (
                  <Link 
                    to={`/courses/${courseId}/lectures/${course.lectures[lectureNumber - 2].id}`}
                    className="block"
                  >
                    <Button variant="outline" className="w-full justify-start">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous Lecture
                    </Button>
                  </Link>
                )}
                
                {lectureNumber < course.lectures.length && (
                  <Link 
                    to={`/courses/${courseId}/lectures/${course.lectures[lectureNumber].id}`}
                    className="block"
                  >
                    <Button className="w-full bg-gradient-primary hover:opacity-90">
                      Next Lecture
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                )}
                
                <Separator />
                
                <Link to={`/courses/${courseId}`} className="block">
                  <Button variant="ghost" className="w-full">
                    View All Lectures
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturePage;