import React, { useState } from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";

import "./App.css";

import Form from "./components/Form";

function App() {
  const [formAction, setActionForm] = useState({ action: "Add" });

  return (
      <div style={{ margin: "0 auto" }}>
        <h1>CRUD utilizando React Hooks</h1>
        <Header title={`${formAction.action} user`} />
        <div style={{ display: "flex" }}>
          {/* <Form action={formAction.action} /> */}
          <UserList />
        </div>
      </div>
  );
}

export default App;
