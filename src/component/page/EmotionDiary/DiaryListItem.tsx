import { Link } from "react-router-dom";
import { EmotionIcon } from "./component/EmotionIcon";
import { Diary } from "../../../model/Diary";
import styled from "styled-components";

const ListItem = styled.div`
  display:grid;
  grid-template-columns: 1fr 4fr 1fr;
  padding: 0.2em 1em;
  margin: 0.2em 0;
  align-items: center;
  color: khaki;
  background: rgba(0,0,0,0.1);
`;
const Title = styled.div`
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export function DiaryListItem(
  {diary: {id, emotion, title, regDate}}: {diary: Diary}
) {
  return (
    <>
    <Link to={id?id.toString():''}>
    <ListItem>
      <EmotionIcon emotion={emotion} />
      <Title>{title}</Title>
      <div className="date">
        {regDate.toLocaleDateString()}
      </div>  
    </ListItem>
    </Link>
    </>
  );
}