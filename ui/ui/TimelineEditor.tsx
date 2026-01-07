// ui/TimelineEditor.tsx
import React, { useState } from "react";
import { Timeline, Track } from "../engine/timeline/timeline_core";

export default function TimelineEditor() {
  const [time, setTime] = useState(0);

  const timeline = new Timeline(60, 8); // 60s timeline, 8 tracks max

  const track: Track = {
    id: "track-1",
    clips: [
      { id: "clip-1", start: 0, end: 5 },
      { id: "clip-2", start: 10, end: 20 }
    ]
  };

  timeline.addTrack(track);

  const activeClips = timeline.getActiveClips(time);

  return (
    <div style={{ padding: 16, background: "#111", color: "#fff" }}>
      <h2>🎬 Timeline Editor</h2>

      <input
        type="range"
        min={0}
        max={timeline.duration}
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
        style={{ width: "100%" }}
      />

      <p>Current Time: {time}s</p>

      <div>
        <h4>Active Clips</h4>
        {activeClips.map((clip) => (
          <div key={clip.id}>
            ▶ {clip.id} ({clip.start}s – {clip.end}s)
          </div>
        ))}
      </div>
    </div>
  );
}
