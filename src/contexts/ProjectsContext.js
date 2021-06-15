import React, { useState, useEffect, createContext, useContext } from "react";
import api from "../services/api";

export const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const handleAddProject = async (project) => {
    const response = await api.post("/projects", project);

    const newProject = response.data;

    setProjects([...projects, newProject]);
  };

  async function handleEditProject(project) {
    setContador(contador + 1);

    const updatedProject = {
      ...project,
      title: `${contador}`,
    };

    const response = await api.put(`/projects/${project.id}`, updatedProject);

    const updatedProjects = [...projects];
    updatedProjects.splice(0, 1, response.data);
    if (response.status == 200) {
      setProjects([...projects, ...updatedProjects]);
    }
  }

  async function handleDeleteProject(projectId) {
    const response = await api.delete(`/projects/${projectId}`);

    if (response.status === 204) {
      setProjects([...projects.filter((project) => project.id !== projectId)]);
    }
  }

  useEffect(() => {
    api.get("/projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        handleAddProject,
        handleEditProject,
        handleDeleteProject,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;

export function useProjects() {
  const { projects, handleDeleteProject } = useContext(ProjectsContext);

  return { projects, handleDeleteProject };
}

export function useProjectsForm() {
    const { handleAddProject, handleEditProject} = useContext(ProjectsContext);
  
    return { handleAddProject, handleEditProject};
  }
