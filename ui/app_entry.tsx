// app_entry.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import TimelineEditor from "./ui/TimelineEditor";

const root = document.createElement("div");
document.body.style.margin = "0";
document.body.style.background = "#000";
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <TimelineEditor />
  </React.StrictMode>
);
