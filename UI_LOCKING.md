# UI Locking & Unlock System

Defines how the UI reacts to missing capabilities.
The UI must never reference tiers — only capabilities.

---

## Core Rules

- Locked features remain visible
- Locked features are clickable
- Clicking a locked feature triggers an upgrade event
- No dead buttons, ever

---

## Lock States

### Soft Lock
Used for:
- Timeline tracks beyond limit
- Advanced keyframes
- Higher export settings

Behavior:
- Feature visible but dimmed
- Tooltip explains missing capability
- Click opens upgrade panel

---

### Hard Lock
Used for:
- Distributed execution
- GPU scheduling
- Obsidian-only features

Behavior:
- Feature visible
- Click triggers cinematic unlock screen
- No price shown for Obsidian

---

## Upgrade Prompt Flow

1. User clicks locked feature
2. UI queries required capability
3. Capability missing → trigger upgrade modal
4. Modal highlights *next logical tier*
5. Obsidian never appears as a purchasable option

---

## Cinematic Unlock (One-Line Copy)

- Bronze → “Your journey begins.”
- Silver → “Momentum unlocked.”
- Gold → “Precision meets power.”
- Platinum → “You now command the system.”
- Obsidian → “You were never meant to ask.”

---

## UI Components

- 🔒 Lock icon (capability-based)
- ✨ Unlock animation overlay
- 📊 One-screen comparison table
- 🎮 Progression bar (non-linear)

---

## Rules

- No UI element checks tier directly
- Capability resolution is synchronous
- UI must feel permissive, not restrictive

---

## Status

Phase 7 — UI locking defined
