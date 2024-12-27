import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./component/Button";
import { DiaryStateContext } from "./context/DiaryContext";
import { DiaryListItem } from "./DiaryListItem";
import { Header } from "./layout/Header";


export function DiaryListView() {
  const navigate = useNavigate();
  const diary = useContext(DiaryStateContext);
  
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
      {
        diary.map(d=>(
          <DiaryListItem
            key={d.id ?? -999}
            diary={d} />
        ))
      }
    </>
  );
}
