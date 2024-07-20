declare interface ProjectProps {
  title: string;
  projectImage: any;
  githubLink: string;
  description: string;
  livePreviewLink: string;
  technologiesUsed: string[];
}

interface AdminState {
  isAdmin: boolean;
}