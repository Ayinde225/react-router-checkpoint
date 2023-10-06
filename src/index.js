// Import necessary dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router from react-router-dom
import App from "./App"; // Import your main App component

// Wrap your App component with the Router component
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
