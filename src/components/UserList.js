import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Table } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { useProjects } from "../contexts/ProjectsContext";

const UserList = () => {
  const useStyles = makeStyles({
    table: {
      maxWidth: 600,
    },

    div: {
      maxWidth: "100%",
      boxShadow: "none",
    },
  });

  const classes = useStyles();

  const {projects} = useProjects();

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
                  <Button variant="contained" color="primary">
                    Edit
                  </Button>
                  <Button variant="contained" color="secondary">
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
