import { useNavigate } from "react-router-dom";
import { Diary, Emotion, EmotionCode, emotionMetadata } from "../../../../model/Diary";
import { Button } from "../component/Button";
import { Header } from "./Header";
import styled from "styled-components";
import { useState } from "react";

const Content = styled.textarea`
  resize: none;
  font-family: inherit;
  color:inherit;
  background: none;
  border: 1px solid khaki;
  margin:1rem;
  padding: 5px;
  width:300px;
  height:100px;
  font-size: 1.2rem;
  
`;

const EmotionButtonWrapper = styled.div`
  box-sizing: border-box;
  padding: 0.3rem;
  cursor: pointer;
  border: 4px solid transparent;
  &.selected {
    border-color: khaki;
  }
  &:hover {
    background: rgba(96,96,96,0.3);
  }
  &.selected:hover{
    background: none;
    cursor:inherit;
  }
`;
const EmotionButtonLabel = styled.div`
  font-size: 1.2em;
`;

function EmotionButton (
  {emotion:{filename,name}}:
  {emotion: Emotion}){
  return (
    <>
      <img
        src={'/icons/'+filename}
        alt={name}
        width='80px'/>
      <EmotionButtonLabel>{name}</EmotionButtonLabel>
    </>
  );
}

const EmotionButtonBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
function EmotionSelector(
  {emotion: emotionCode, onSelect}:
  {emotion?: EmotionCode, onSelect: (emotion:EmotionCode) => void}
) {
  return (
    <EmotionButtonBar>
    {emotionMetadata.map((metadata)=>(
      <EmotionButtonWrapper
        key={metadata.code.toString()}
        onClick={()=>onSelect(metadata.code)}
        className={(emotionCode == metadata.code) ? 'selected' : ''}>
        <EmotionButton
          key={metadata.code.toString()}
          emotion={metadata}
          />
      </EmotionButtonWrapper>
    ))}
    </EmotionButtonBar>
  );
}

export function Editor (
  {headerTitle: title, data}:
  {headerTitle:string, data?: Diary}
) {
  const navigate = useNavigate();
  const date = data?.regDate ?? new Date();
  const content = data?.content ?? '';
  const [emotion, setEmotion] = useState<EmotionCode | undefined>(undefined);
  
  return (
    <>
    <Header title={title}
      leftChild={
        <Button
          className="danger"
          onClick={()=>navigate(-1)}>
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
    <EmotionSelector
      emotion={emotion}
      onSelect={setEmotion}
      />
    <Content
      name="content"
      id="content"
      placeholder="Description..."
      autoFocus={true}
      defaultValue={content}
    />
    </>
  );
}