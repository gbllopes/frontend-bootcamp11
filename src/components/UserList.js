import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { 
    Button,
    Table, 
    TableContainer, 
    Paper, 
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody, 
} from "@material-ui/core";
import { useManageProject, useProjects } from "../contexts/ProjectsContext";

const UserList = ({ onChange }) => {
  const useStyles = makeStyles({
    table: {
      maxWidth: 600,
    },

    div: {
      maxWidth: "100%",
      boxShadow: "none",
    },
  });

  const handleActionForm = () => {
    onChange("Edit");
  };
  const classes = useStyles();

  const { projects, handleDeleteProject } = useProjects();
  const { manageProject } = useManageProject();

  const handleSendProjectToEdit = (project) => {
    handleActionForm();
    manageProject(project);
  };

  return (
    <>
      <TableContainer component={Paper} className={classes.div}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="left">Owner</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell component="th" scope="row">
                  {project.title}
                </TableCell>
                <TableCell align="left">{project.owner}</TableCell>
                <TableCell align="left">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleSendProjectToEdit(project)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteProject(project.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserList;
