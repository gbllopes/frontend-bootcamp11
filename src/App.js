import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";

import "./App.css";

import api from "./services/api";

function App() {
  const [formAction, setActionForm] = useState({ action: "Add" });

  async function handleEditProject(project) {
    setContador(contador + 1);

    const updatedProject = {
      ...project,
      title: `${contador}`,
    };

    const response = await api.put(`/projects/${project.id}`, updatedProject);

    const updatedProjects = [...projects];
    console.log(updatedProjects);
    updatedProjects.splice(0, 1, response.data);

    console.log(updatedProjects);
    console.log(projects, "projects");
    console.log(updatedProjects, "updated");
    if (response.status == 200) {
      setProjects([...projects, ...updatedProjects]);
    }
  }

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
      setProjects([...projects.filter((project) => project.id !== projectId)]);
    }
  }

  return (
    <>
      <h1>CRUD utilizando React Hooks</h1>
      <Header title={`${formAction.action} user`} />
      <UserList />
      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
