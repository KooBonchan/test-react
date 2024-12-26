import { Emotion } from "../../../../model/Diary";
function emotionIconNameMapper
  (emotion: Emotion): string
{
  return emotion.toString() + '.png';
}
export function EmotionIcon(
  { emotion, width=40 }:
  { emotion: Emotion; width?:number }
) {
  emotion.toString();
  const emotionString = emotionIconNameMapper(emotion);
    return (
      <>
      <img
        src={"/icons/" + emotionString}
        alt={emotion}
        width={Math.floor(width) + 'px'} />
      </>
    );
}
