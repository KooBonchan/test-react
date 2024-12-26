import { useNavigate } from "react-router-dom";
import { Diary, Emotion } from "../../../../model/Diary";
import { Button } from "../component/Button";
import { Header } from "./Header";
import styled from "styled-components";
import { useState } from "react";

const Content = styled.textarea`
  resize: none;
  font-family: inherit;
  background: none;
  border: 1px solid khaki;
  margin:1rem;
  width:200px;
  height:30vh;
`;

export function Editor (
  {title, data}:
  {title:string, data?: Diary}
) {
  const navigate = useNavigate();
  const date = data?.regDate ?? new Date();
  const [emotion, setEmotion] = useState<Emotion | undefined>(undefined);

  return (
    <>
    <Header title={title}
      leftChild={
        <Button
          onClick={()=>navigate('/diary')}>
            Back
        </Button>
      }
      rightChild={
        <Button
          className="primary"
          onClick={()=>navigate('/diary')}>
            DONE
        </Button>
      }
    />

    <div>
      date: {date.toLocaleDateString()}
    </div>
    
    <Content
      name="content"
      id="content"
      placeholder="Write your text..."/>
    
    </>
  );
}