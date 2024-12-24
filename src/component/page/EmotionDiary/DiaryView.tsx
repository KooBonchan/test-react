import { Link, useParams } from "react-router-dom";

export function DiaryView() {
  const {id:rawId} = useParams();
  if(!rawId) throw new Error("Should not be routed to Diary View");
  const id = Number(rawId);
  if(isNaN(id)) return <div>INVALID ACCESS</div>
  return (
    <>
      <p>ID: {id}</p>
      <Link to={'/diary/edit/' + id}>EDIT</Link>
      <h3>ITEM VIEW</h3>
      <p>lorem ipsum</p>
    </>
  );
}
