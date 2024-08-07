declare interface ProjectProps {
  _id: string;
  title: string;
  projectImage: any;
  githubLink: string;
  description: string;
  livePreviewLink: string;
  technologiesUsed: string[];
  setProjectsData: React.Dispatch<React.SetStateAction<ProjectProps[]>>;
}
