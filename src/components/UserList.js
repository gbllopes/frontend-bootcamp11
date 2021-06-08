import React, { useState, useEffect } from "react";

import api from "../services/api";

const UserList = () => {
  const [projectsList, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <table style={{border: "3px solid rgb(0, 0, 0)"}}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Owner</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody >
          {projectsList.map((project) => (
            <tr key={project.id} >
              <td>{project.title}</td>
              <td>{project.owner}</td>
              <td>
                <button>Edit</button>
                <button>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
