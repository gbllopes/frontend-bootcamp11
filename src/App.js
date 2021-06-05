import React, { useState, useEffect } from "react";
import Header from "./components/Header";

import "./App.css";

import api from "./services/api";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // setProjects([...projects, `Novo projeto ${Date.now()}`]);
    const response = await api.post("/projects", {
      title: `React Post ${Date.now()}`,
      owner: "Gabriel Lopes",
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  async function handleDeleteProject(projectId) {
    const response = await api.delete(`/projects/${projectId}`);

    if (response.status === 204) {
      setProjects([
        ...projects.filter((project) => project.id !== projectId),
      ]);
    }
  }

  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.title}
            <button onClick={() => handleDeleteProject(project.id)}>
              Deletar
            </button>
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
