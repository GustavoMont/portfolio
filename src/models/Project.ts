export enum ProjectType {
  FE = "FE",
  BE = "BE",
  FS = "FS",
  MOB = "MOB",
}

export type Thumbnail = {
  alt: string;
  url: string;
};

export type GalleryItem = Thumbnail & { id: string };

export default interface Project {
  id: string;
  title: string;
  projectType: ProjectType;
  deployLink?: string;
  githubLink?: string;
  description: string;
  thumbnail: Thumbnail;
  gallery: GalleryItem[];
}
