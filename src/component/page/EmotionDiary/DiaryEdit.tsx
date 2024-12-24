import { useParams } from "react-router-dom";

export function DiaryEdit() {
  const {id:id} = useParams();
  return (
    <>
      <div>id: {id && parseInt(id!)}</div>
      <h3>ITEM EDIT</h3>
      <p>consolas</p>
    </>
  );
}
