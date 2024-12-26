export enum Emotion {
  UP = "up",
  MID = "mid",
  DOWN = "down",
}

export interface Diary{
  id?: number;
  emotion: Emotion;
  title: string;
  content: string;
  regDate: Date;
}