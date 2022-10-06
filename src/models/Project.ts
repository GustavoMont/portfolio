export enum ProjectType {
  FE = "FE",
  BE = "BE",
  FS = "FS",
  MOB = "MOB",
}

export default interface Project {
  id: string;
  title: string;
  projectType: ProjectType;
  deployLink?: string;
  githubLink?: string;
  description: string;
  thumbnail: {
    alt: string;
    url: string;
  };
}
