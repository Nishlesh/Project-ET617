export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  level: string;
  lectures: Lecture[];
}

export interface Lecture {
  id: string;
  title: string;
  duration: string;
  summary: string;
  textbookReferences: TextbookReference[];
  youtubeVideos: YoutubeVideo[];
}

export interface TextbookReference {
  id: string;
  title: string;
  author: string;
  chapter: string;
  pages: string;
  isbn?: string;
}

export interface YoutubeVideo {
  id: string;
  title: string;
  videoId: string;
  description: string;
}