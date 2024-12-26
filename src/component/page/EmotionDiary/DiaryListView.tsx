import { Diary, Emotion } from "../../../model/Diary";
import { DiaryListItem } from "./DiaryListItem";
import { Header } from "./layout/Header";


const placeholderDiary:Diary = {
  id: -1,
  emotion: Emotion.UP,
  title: "PLACEHOLDER",
  content: "sample",
  regDate: new Date("2024-02-11"),
}
export function DiaryListView() {
  return (
    <>
      <Header
        leftChild={<>1</>}
        title={'Emotion Diary'}
        rightChild={<>2</>}
      />
      <DiaryListItem
        key={'p1'}
        diary={placeholderDiary}
      />
      <DiaryListItem 
        key={'p2'}
        diary={{
          ...placeholderDiary, 
          emotion: Emotion.MID}} />
      <DiaryListItem 
        key={'p3'}
        diary={{
          ...placeholderDiary, 
          emotion: Emotion.DOWN}} />
    </>
  );
}
