import { useNavigate, useParams } from "react-router-dom";
import { Button } from "./component/Button";
import { Header } from "./layout/Header";

export function DiaryView() {
  const {id:rawId} = useParams();
  if(!rawId) throw new Error("Should not be routed to Diary View");
  const id = Number(rawId);
  const navigate = useNavigate();

  if(isNaN(id)) return <div>INVALID ACCESS</div>
  return (
    <>
      <Header
        title={`ID:${id}`}
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
      <h3>ITEM VIEW</h3>
      <p>lorem ipsum</p>
    </>
  );
}
