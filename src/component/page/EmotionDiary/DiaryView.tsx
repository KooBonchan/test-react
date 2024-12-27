import { useNavigate, useParams } from "react-router-dom";
import { Button } from "./component/Button";
import { Header } from "./layout/Header";
import { useContext } from "react";
import { DiaryStateContext } from "./context/DiaryContext";
import { emotionMetadata } from "../../../model/Diary";

export function DiaryView() {
  const {id:rawId} = useParams();
  const diary = useContext(DiaryStateContext);
  if(!rawId) throw new Error("Should not be routed to Diary View");
  const id = Number(rawId);
  const navigate = useNavigate();

  if(isNaN(id)) return <div>INVALID ACCESS</div>
  const data = diary.find(e=>e.id === id)
  const date = data?.regDate.toLocaleDateString();
  const path = emotionMetadata.find(e=>e.code === data?.emotion)?.filename
              ?? 'placeholder.jpg';
  return (
    <>
      <Header
        title={`Log ${date}`}
        leftChild={
          <Button
            onClick={()=>navigate('/diary')}>
              List
          </Button>
        }
        rightChild={
          <Button
            onClick={()=>navigate('/diary/edit/' + id)}>
              EDIT
          </Button>
        }
      />
      <h2>{data?.title ?? 'Wrong Title'}</h2>
      <img
        src={'/icons/' +path}
        alt="Emotion"
        width="200px"/>
      <p>{date ?? 'on someday'}</p>
      <p>{data?.content ?? 'No Content'}</p>
    </>
  );
}
