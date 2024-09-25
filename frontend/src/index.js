import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";
import "./index.css";

const node = document.getElementById("root");
const root = ReactDOM.createRoot(node);
root.render(<App></App>);
