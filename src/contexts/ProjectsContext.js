import React, { useState, useEffect, createContext, useContext } from "react";
import api from "../services/api";

export const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const [project, setProject] = useState({
    title: "",
    owner: "",
  });

  const manageProject = (project) => {
    setProject(project);
  };

  const handleAddProject = async (project) => {
    const response = await api.post("/projects", project);

    const newProject = response.data;

    setProjects([...projects, newProject]);
  };

  async function handleEditProject(projectEdited) {
    const response = await api.put(`/projects/${project.id}`, projectEdited);

    const projectsUpdated = projects.map((project) => {
      if (project.id === response.data.id) {
        return projectEdited;
      } else {
        return project;
      }
    });

    if (response.status == 200) {
      setProjects(projectsUpdated);
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
        project,
        projects,
        handleAddProject,
        handleEditProject,
        handleDeleteProject,
        manageProject,
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
  const { handleAddProject, handleEditProject } = useContext(ProjectsContext);

  return { handleAddProject, handleEditProject };
}

export function useManageProject() {
  const { project, manageProject } = useContext(ProjectsContext);
  return { project, manageProject };
}
