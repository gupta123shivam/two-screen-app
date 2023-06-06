import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<App />);
