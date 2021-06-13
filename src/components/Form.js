import React, { useState } from "react";
import api from "../services/api";

const Form = ({ action }) => {
  const [project, setProject] = useState({ title: "", owner: "" });

  const displayGrid = {
    display: "grid",
    marginRight: "10px",
  };

  const marginButton = {
    margin: "5px 10px 0px 0px",
  };

  const handleProject = (e) => {
    const { id, value } = e.target;
    setProject((project) => ({
      ...project,
      [id]: value,
    }));
  };

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
            onChange={handleProject}
            value={project.title}
          />
        </div>

        <div>
          <label htmlFor="owner">
            <h2>Owner</h2>
          </label>
          <input
            type="text"
            id="owner"
            onChange={handleProject}
            value={project.owner}
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={handleAddProject}
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
