import React, { useState } from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";

import "./App.css";

import Form from "./components/Form";

function App() {
  const [formAction, setActionForm] = useState({ action: "Add" });

  function handleActionForm(action) {
    setActionForm({
      ...formAction,
      action,
    });
  }

  return (
    <div style={{ margin: "0 auto" }}>
      <h1>CRUD utilizando React Hooks e Context API</h1>
      <Header title={`${formAction.action} user`} />
      <div style={{ display: "flex" }}>
        <Form action={formAction.action} onChange={handleActionForm} />
        <UserList onChange={handleActionForm} />
      </div>
    </div>
  );
}

export default App;
