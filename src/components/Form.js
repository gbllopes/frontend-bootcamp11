import React, { useState } from "react";
import { useProjectsForm } from "../contexts/ProjectsContext";

const Form = ({ action, onChange }) => {
  const initialState = {
    title: "",
    owner: "",
  };
  const [project, setProject] = useState(initialState);

  const { handleAddProject, handleEditProject } = useProjectsForm();

  const displayGrid = {
    display: "grid",
    marginRight: "10px",
    maxHeight: "130px",
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

  const handleActionForm = () => {
    onChange("Add");
  };

  function cancelButton() {
    if (action === "Edit") {
      return (
        <button type="button" style={marginButton} onClick={handleActionForm}>
          Cancel
        </button>
      );
    }
  }

  function actionButton() {
    return (
      <button
        type="submit"
        onClick={() =>
          `${
            action === "Add"
              ? handleAddProject(project).then(setProject(initialState))
              : handleEditProject(project).then(setProject(initialState))
          }`
        }
        style={marginButton}
      >
        {`${action} user`}
      </button>
    );
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
          {actionButton()}
          {cancelButton()}
        </div>
      </div>
    </>
  );
};

export default Form;
