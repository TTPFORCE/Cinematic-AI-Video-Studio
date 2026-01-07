# App Entry Point — Cinematic AI Video Studio

## Purpose
This document defines the single source of truth for how the Cinematic AI Video Studio boots,
runs offline, initializes systems, and enforces capability-based access.

This app is **offline-first**, **local-engine driven**, and **upgrade-gated**.

---

## Boot Sequence (Order Matters)

### 1. Offline Environment Initialization
- App starts with **no internet dependency**
- Local filesystem, cache, and project storage are mounted
- Network access is optional and never required for core editing

Status: REQUIRED

---

### 2. Core Capability System
Location: `/core`

Initializes:
- User capability tiers
- Feature locks (free / pro / legend)
- License verification (offline-valid)

Rules:
- Capabilities are checked locally
- No cloud validation required to open projects
- Locked tools are visible but inactive

---

### 3. Video Engine Startup
Location: `/engine`

Initializes:
- Timeline engine
- Renderer
- AI-assisted tools (offline-compatible where available)
- Asset pipeline (video, audio, images)

Rules:
- Engine must boot before UI becomes interactive
- Engine failures halt UI activation

---

### 4. UI System Load
Location: `/ui`

Initializes:
- Editor layout
- Timeline UI
- Tool panels
- Project browser

Rules:
- UI adapts based on unlocked capabilities
- Locked features show upgrade prompts
- UI never blocks offline usage

---

### 5. Project Restore
- Last opened project is restored if available
- Unsaved recovery state is loaded automatically
- User may bypass restore if desired

---

### 6. Upgrade & Expansion Flow
Defined in:
- `UPGRADE_FLOW.md`
- `UI_LOCKING.md`

Rules:
- Upgrades unlock tools, not files
- Existing projects always remain accessible
- No feature removal after downgrade

---

## Failure Handling
If any stage fails:
- App remains offline-safe
- User receives a readable error
- No hard crash unless engine initialization fails

---

## Non-NegOTIABLE PRINCIPLES
- Offline-first always
- User owns their files
- Editing never requires login
- Internet enhances, never blocks

---

## Entry Status
This file defines the **canonical boot contract**.
All systems must conform to this flow.
