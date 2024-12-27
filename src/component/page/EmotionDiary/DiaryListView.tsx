import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./component/Button";
import { DiaryStateContext } from "./context/DiaryContext";
import { DiaryListItem } from "./DiaryListItem";
import { Header } from "./layout/Header";
import { Diary } from "../../../model/Diary";

enum SortBy {
  Oldest,
  Newest,
  Title
}
function SortMethodMapper
    (sort: SortBy)
  : (e1:Readonly<Diary>, e2:Readonly<Diary>) => number
{
  return (e1, e2) => {
    switch(sort){
      case SortBy.Oldest:
        return Number(e1.regDate) - Number(e2.regDate);
      case SortBy.Newest:
        return Number(e2.regDate) - Number(e1.regDate);
      case SortBy.Title:
        return e1.title.toLowerCase() > e2.title.toLowerCase() ? 1 : -1;
    }
  };
}

export function DiaryListView() {
  const navigate = useNavigate();
  const [sortBy, setSort] = useState<SortBy>(SortBy.Newest);
  const diary = useContext(DiaryStateContext);
  const sorted = [...diary].sort(SortMethodMapper(sortBy));

  const handleChange = (e:ChangeEvent) => {
    const object = e.target as HTMLSelectElement;
    setSort(object.value as unknown as SortBy);
  }
  
  return (
    <>
      <Header
        leftChild={<Button>&lt;</Button>}
        title={'Emotion Diary'}
        rightChild={<Button>&gt;</Button>}
      />
      <select onChange={handleChange} defaultValue={sortBy}>
        <option value={SortBy.Newest}>Newest</option>
        <option value={SortBy.Oldest}>Oldest</option>
        <option value={SortBy.Title}>Title</option>
      </select>

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
        sorted.map(d=>(
          <DiaryListItem
            key={d.id ?? -999}
            diary={d} />
        ))
      }
    </>
  );
}
