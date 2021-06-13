import React from "react";
import { render } from "react-dom";

import App from "./App";
import ProjectsProvider from "./contexts/ProjectsContext";

render(
  <ProjectsProvider>
    <App />
  </ProjectsProvider>,
  document.getElementById("root")
);
