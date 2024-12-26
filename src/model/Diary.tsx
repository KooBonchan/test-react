export enum EmotionCode {
  UP = "up",
  MID = "mid",
  DOWN = "down",
}
export interface Emotion {
  code: EmotionCode;
  filename: string;
  name: string;
}
export const emotionMetadata : readonly Readonly<Emotion>[] = [
    {
      code: EmotionCode.UP,
      filename: "up.png",
      name: "High",
    },{
      code: EmotionCode.MID,
      filename: "mid.png",
      name: "Not Good",
    },{
      code: EmotionCode.DOWN,
      filename: "down.png",
      name: "Bad",
    },
] as const;
export interface Diary{
  id?: number;
  emotion: EmotionCode;
  title: string;
  content: string;
  regDate: Date;
}