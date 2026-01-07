// Timeline Core Engine
// Offline-first, deterministic timeline system

export type Time = number;

export interface Keyframe<T> {
  time: Time;
  value: T;
}

export interface Clip {
  id: string;
  start: Time;
  end: Time;
}

export interface Track {
  id: string;
  clips: Clip[];
}

export class Timeline {
  duration: Time;
  tracks: Track[] = [];

  constructor(duration: Time) {
    this.duration = duration;
  }

  addTrack(track: Track) {
    this.tracks.push(track);
  }

  getActiveClips(time: Time): Clip[] {
    return this.tracks
      .flatMap(t => t.clips)
      .filter(c => time >= c.start && time <= c.end);
  }
}
