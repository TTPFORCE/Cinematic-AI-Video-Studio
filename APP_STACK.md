# Application Stack

Defines how Cinematic AI Video Studio runs as a real, offline application.

---

## Runtime

- Desktop-first
- Offline-only
- No mandatory cloud dependencies

Chosen Runtime:
**Tauri**

Reason:
- Lightweight
- Secure
- Native performance
- Ideal for creative tools

---

## UI Layer

- Framework: React
- Rendering: Canvas + WebGL
- Styling: Custom cinematic theme
- Input: Mouse, keyboard, tablet-ready

UI Responsibilities:
- Timeline interaction
- Canvas preview
- Inspector panels
- Upgrade gating (read-only from core)

---

## Engine Layer

- Language: Rust / C++ (pluggable)
- Owns:
  - Timeline evaluation
  - Execution system
  - Render pipeline

Engine has:
- No UI knowledge
- No upgrade logic
- Deterministic output only

---

## Core Logic

- Upgrade Engine
- Capabilities system
- Progression rules

Core decides:
- What is allowed
- What is visible
- What is locked

---

## Communication Model

UI → Core → Engine

- UI requests actions
- Core validates permissions
- Engine executes if allowed

---

## Offline Guarantees

- No background network calls
- No telemetry by default
- Fully functional offline

---

## Status

Phase 9 — Application stack locked
