import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";

import "./App.css";

import api from "./services/api";
import Form from "./components/Form";


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

  return (
    <>
    <div style={{margin: '0 auto'}}>
    <h1>CRUD utilizando React Hooks</h1>
      <Header title={`${formAction.action} user`} />
      <div style={{ display: "flex" }}>
        <Form action={formAction.action}/>
        <UserList />
      </div>
    </div>
    </>
  );
}

export default App;
