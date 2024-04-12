import { api } from "src/lib/api";
import Project from "src/models/Project";

export const getProject = async (id: string) => {
  const request = await api.post<{ query: string }>({
    query: `{
        project(filter: {id: {eq: ${id}}}) {
            deployLink,
            githubLink,
            id,
            thumbnail {url, alt},
            title,
            description
          }
    }`,
  });
  const res = await request.json();
  return res.data.project as Project;
};
