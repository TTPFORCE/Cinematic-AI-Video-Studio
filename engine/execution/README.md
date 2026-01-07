# Execution System

Deterministic evaluation engine for timeline playback and rendering.

## Responsibilities
- Resolve active clips per frame
- Execute effect stacks
- Coordinate CPU/GPU workloads
- Ensure deterministic output

## Execution Flow
1. Timeline evaluation
2. Clip graph resolution
3. Effect stack execution
4. Frame composition
5. Output (preview or render)

## Constraints
- Offline-first
- Frame deterministic
- No background network calls

## Upgrade Hooks
- Parallel execution (Pro)
- GPU scheduling control (Studio)
- Distributed render (Obsidian)

## Status
Phase 5 – Execution model definition
