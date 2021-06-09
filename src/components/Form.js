import React, { useState } from "react";

const Form = ({ action }) => {
  const [ project, setProject ] = useState({ title: "", owner: "" });

  const displayGrid = {
    display: "grid",
    marginRight: "10px",
  };

  const marginButton = {
    margin: "5px 10px 0px 0px",
  };

  async function handleAddProject() {
    const response = await api.post("/projects", {
      title: `React Post ${Date.now()}`,
      owner: "Gabriel Lopes",
    });

    const project = response.data;

    setProject([...projects, project]);
  }

  function handleProject(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <div style={displayGrid}>
        <div>
          <label htmlFor="title">
            <h2>Title</h2>
          </label>
          <input
            type="text"
            id="title"
            height="10px"
            onChange={(e) => handleProject}
            value={project.title}
            
          />
        </div>

        <div>
          <label htmlFor="owner">
            <h2>Owner</h2>
          </label>
          <input type="text" id="owner" />
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              handleAddProject;
            }}
            style={marginButton}
          >{`${action} user`}</button>
          <button type="button" style={marginButton}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
