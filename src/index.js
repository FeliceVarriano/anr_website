import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
<<<<<<< HEAD

ReactDOM.render(
  <>
    <App />
  </>,
=======
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.hydrate(
  <Router>
    <App />
  </Router>,
>>>>>>> webpack
  document.getElementById("root")
);
