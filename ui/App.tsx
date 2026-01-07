import React from "react";
import TimelineEditor from "./TimelineEditor";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0e0e0e",
        color: "#ffffff",
        fontFamily: "sans-serif",
        padding: 16,
      }}
    >
      <h1>🎬 Cinematic AI Video Studio</h1>
      <p>Timeline system online.</p>

      <TimelineEditor />
    </div>
  );
}
