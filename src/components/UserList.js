import React, { useState, useEffect } from "react";

import api from "../services/api";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Table } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableBody } from "@material-ui/core";

const UserList = () => {
  const [projectsList, setProjects] = useState([]);

  const useStyles = makeStyles({
    table: {
      maxWidth: 600,
    },

    div: {
      maxWidth: "100%",
      boxShadow: "none",
    },
  });

  useEffect(() => {
    api.get("/projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  const classes = useStyles();

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
            {projectsList.map((project) => (
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

    /* <table style={{ border: "3px solid rgb(0, 0, 0)" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Owner</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projectsList.map((project) => (
            <tr key={project.id}>
              <td>{project.title}</td>
              <td>{project.owner}</td>
              <td>
                <Button variant="contained" color="primary">Edit</Button>
                <Button variant="contained" color="secondary">Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */
  );
};

export default UserList;
