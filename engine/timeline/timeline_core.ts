// Timeline Core Engine
// Offline-first, deterministic timeline system

export type Time = number;

/**
 * A value change at a specific time
 */
export interface Keyframe<T> {
  time: Time;
  value: T;
}

/**
 * A media segment with a start and end time
 */
export interface Clip {
  id: string;
  start: Time;
  end: Time;
}

/**
 * An ordered lane of clips
 */
export interface Track {
  id: string;
  clips: Clip[];
}

/**
 * Core Timeline class
 * Upgrade hooks are enforced here (maxTracks, nested timelines later)
 */
export class Timeline {
  duration: Time;
  tracks: Track[] = [];

  /**
   * Upgrade-gated properties
   * - Bronze: undefined (defaults apply)
   * - Silver/Gold: higher limits
   * - Obsidian: no limits
   */
  maxTracks?: number;

  constructor(duration: Time, maxTracks?: number) {
    this.duration = duration;
    this.maxTracks = maxTracks;
  }

  /**
   * Add a track to the timeline
   * Enforces upgrade limits if present
   */
  addTrack(track: Track): void {
    if (
      this.maxTracks !== undefined &&
      this.tracks.length >= this.maxTracks
    ) {
      throw new Error("Track limit reached for current upgrade level.");
    }

    this.tracks.push(track);
  }

  /**
   * Get all clips active at a specific time
   * Deterministic and frame-accurate
   */
  getActiveClips(time: Time): Clip[] {
    return this.tracks
      .flatMap(track => track.clips)
      .filter(clip => time >= clip.start && time <= clip.end);
  }

  /**
   * Clear all tracks (used for resets / project reload)
   */
  clear(): void {
    this.tracks = [];
  }
}
