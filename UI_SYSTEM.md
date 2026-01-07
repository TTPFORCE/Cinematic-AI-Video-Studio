# UI System

## Purpose
The UI System defines how users interact with the Cinematic AI Video Studio.
It is designed to feel powerful, cinematic, and intuitive, while remaining
fully offline and performance-efficient.

The UI follows a **game-style progression model**, where advanced tools
unlock as the user upgrades.

---

## Core Design Principles
- Mobile-first, scalable to tablet & desktop
- Timeline-centric workflow
- Minimal UI, maximum control
- Instant visual feedback
- No cloud dependency

---

## Main UI Areas

### 1. Timeline
- Multi-track timeline (video, audio, effects, text)
- Pinch-to-zoom and swipe navigation
- Frame-accurate snapping
- Keyframe indicators
- Locked / hidden tracks

---

### 2. Preview Canvas
- Real-time playback
- Aspect ratio switching (16:9, 9:16, 1:1)
- Safe zones & guides
- Resolution-aware preview scaling

---

### 3. Tool Panels

#### Media Panel
- Import local video, audio, images
- Offline asset browser
- Drag-and-drop to timeline

#### Effects Panel
- Color grading
- Transitions
- Motion effects
- Cinematic presets

#### Text & Titles
- Animated titles
- Keyframe-based motion
- Font & style controls

---

### 4. Inspector Panel
- Context-aware controls
- Shows properties for selected clip
- Sliders, toggles, numeric inputs
- Reset & undo per-property

---

## Upgrade-Based UI Unlocks

### Bronze (Free)
- Basic timeline
- Single video track
- Simple cuts & trims

### Silver
- Multiple tracks
- Basic transitions
- Text overlays

### Gold (Most Popular)
- Advanced effects
- Color grading
- Motion keyframes

### Platinum
- Pro presets
- Advanced export controls
- Performance optimizations

### Obsidian (Invite / Scarcity)
- Full cinematic toolkit
- Experimental tools
- Priority engine features

---

## Cinematic Unlock Animations
- Full-screen unlock overlay
- Key-based visual (Bronze → Obsidian)
- Subtle sound + glow animation
- One-line cinematic text per unlock

Example:
“Power doesn’t unlock itself. You claimed it.”

---

## Offline Behavior
- UI never blocks due to internet
- All panels load locally
- Graceful degradation on low-end devices

---

## Future UI Expansion
- Plugin-based panels
- Custom workspace layouts
- Gesture customization
- Accessibility modes
