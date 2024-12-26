import { useNavigate } from "react-router-dom";
import { Diary, EmotionCode } from "../../../model/Diary";
import { Button } from "./component/Button";
import { DiaryListItem } from "./DiaryListItem";
import { Header } from "./layout/Header";


const placeholderDiary:Diary = {
  id: -1,
  emotion: EmotionCode.UP,
  title: "PLACEHOLDER",
  content: "sample",
  regDate: new Date("2024-02-11"),
}
export function DiaryListView() {
  const navigate = useNavigate();
  return (
    <>
      <Header
        leftChild={<Button>&lt;</Button>}
        title={'Emotion Diary'}
        rightChild={<Button>&gt;</Button>}
      />
      <Button
        className= 'primary'
        onClick={()=>navigate('write')}
        style= {{
          width: '95%',
          height: '60px',
          margin: '0.2rem auto',
        }}
        >
          Write Today's Emotion Diary
      </Button>
      <DiaryListItem
        key={'p1'}
        diary={placeholderDiary}
      />
      <DiaryListItem 
        key={'p2'}
        diary={{
          ...placeholderDiary, 
          emotion: EmotionCode.MID}} />
      <DiaryListItem 
        key={'p3'}
        diary={{
          ...placeholderDiary, 
          emotion: EmotionCode.DOWN}} />
    </>
  );
}
