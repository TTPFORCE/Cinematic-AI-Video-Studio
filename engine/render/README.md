# Render Pipeline

Final frame generation and export system.

## Responsibilities
- Convert composed frames into output formats
- Handle resolution, framerate, and color space
- Manage preview vs final render modes
- Ensure bit-exact output

## Pipeline Stages
1. Frame request from execution engine
2. Color grading & post-processing
3. Encoding (video / image sequence)
4. Audio muxing
5. File output

## Output Formats
- MP4 / MOV
- Image sequences (PNG / EXR)
- Audio stems

## Constraints
- Fully offline
- Deterministic renders
- Hardware-accelerated when available

## Upgrade Hooks
- Higher bit depth (Pro+)
- Advanced codecs (Studio
