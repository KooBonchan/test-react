import { useParams } from "react-router-dom";
import { Editor } from "./layout/Editor";
import { useContext } from "react";
import { DiaryStateContext } from "./context/DiaryContext";

export function DiaryEdit(

) {
  const diary = useContext(DiaryStateContext);
  const {id:rawId} = useParams();
  if(!rawId) throw new Error("Should not be routed to Diary View");
  const id = Number(rawId);
  if(isNaN(id)) return <div>INVALID ACCESS</div>
  const data = diary.find(e=>e.id === id)
  const date = data?.regDate.toLocaleDateString() ?? 'on someday';
  
  return (
    <>
      <Editor
        headerTitle={`Log ${date}`}
        data={data}>
      </Editor>
    </>
  );
}
