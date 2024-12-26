import { useParams } from "react-router-dom";
import { Editor } from "./layout/Editor";

export function DiaryEdit() {
  const {id:rawId} = useParams();
  if(!rawId) throw new Error("Should not be routed to Diary View");
  const id = Number(rawId);
  
  if(isNaN(id)) return <div>INVALID ACCESS</div>
  return (
    <>
      <Editor
        headerTitle="title">

      </Editor>
    </>
  );
}
