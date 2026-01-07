# Capability System

The Capability System defines what features are available at each upgrade tier.
All engine, UI, and render logic must query capabilities — never tiers directly.

---

## Core Principles

- Capability-driven, not tier-driven
- Deterministic and offline-first
- Central source of truth for feature access
- Forward-compatible with new tiers and features

---

## Capability Categories

### Timeline
- timeline.tracks.max
- timeline.nesting.enabled
- timeline.keyframes.basic
- timeline.keyframes.advanced
- timeline.keyframes.procedural

### Execution
- execution.parallel
- execution.gpu_control
- execution.distributed

### Render
- render.resolution.max
- render.bit_depth
- render.codecs.standard
- render.codecs.advanced
- render.image_sequences

### AI / Automation
- ai.assist.basic
- ai.assist.cinematic
- ai.assist.full_pipeline

### UX / Workflow
- ux.presets.basic
- ux.presets.pro
- ux.custom_workflows

---

## Tier Mapping

### Bronze
- timeline.tracks.max = 3
- timeline.keyframes.basic
- render.resolution.max = 1080p
- render.codecs.standard
- ai.assist.basic

### Silver
- timeline.tracks.max = 6
- timeline.keyframes.basic
- timeline.nesting.enabled
- render.resolution.max = 4K
- ai.assist.basic

### Gold
- timeline.tracks.max = 12
- timeline.keyframes.advanced
- render.bit_depth = 10bit
- render.codecs.standard
- ai.assist.cinematic
- ux.presets.pro

### Platinum
- timeline.tracks.max = 24
- timeline.keyframes.procedural
- execution.parallel
- render.codecs.advanced
- render.image_sequences
- ai.assist.full_pipeline

### Obsidian
- All capabilities enabled
- execution.gpu_control
- execution.distributed
- timeline.nesting.enabled (unlimited depth)
- No artificial limits

---

## Rules

- UI elements must auto-lock based on missing capabilities
- Engine must hard-fail if a required capability is missing
- No feature may bypass the capability system
- Obsidian has no pricing logic — access is explicit

---

## Status

Phase 6 — Capability definition complete
