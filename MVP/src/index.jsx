import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "@aws-amplify/ui-react/styles.css";
import "@cloudscape-design/global-styles/index.css";
import { Amplify } from "aws-amplify";
import awsmobile from "./aws-exports";

Amplify.configure(awsmobile);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);