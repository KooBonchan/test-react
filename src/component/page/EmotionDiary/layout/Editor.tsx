import { memo, useCallback, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Diary, Emotion, EmotionCode, emotionMetadata } from "../../../../model/Diary";
import { Button } from "../component/Button";
import { DiaryDispatchContext } from '../context/DiaryContext';
import { Header } from "./Header";

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
const EmotionButton = memo((
  {emotion:{filename,name}}:
  {emotion: Emotion}) => (
    <>
      <img
        src={'/icons/'+filename}
        alt={name}
        width='80px'/>
      <EmotionButtonLabel>{name}</EmotionButtonLabel>
    </>
  ));


const EmotionButtonBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
function EmotionSelector(
  {emotion: emotionCode = EmotionCode.UP, onSelect}:
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



const Title = styled.input`
  width:300px;
  margin:1rem;
  padding: 2px;
  border: 1px solid khaki;
  background: none;
  font-family: inherit;
  color:inherit;
  font-size: 1.5rem;
`;
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
export function Editor (
  {headerTitle: title, data}:
  {headerTitle:string, data?: Diary}
) {
  const navigate = useNavigate();
  const date = data?.regDate ?? new Date();
  const [emotion, setEmotion] = useState<EmotionCode | undefined>(data?.emotion);
  const {onCreate, onUpdate} = useContext(DiaryDispatchContext)!;

  const handleSelect = useCallback((emotion:EmotionCode)=>setEmotion(()=>emotion), []);
  const diaryTitle = useRef<HTMLInputElement>(null);
  const diaryContent = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = ()=>{
    if(!diaryTitle.current ||
        diaryTitle.current.value.trim().length == 0 ||
       !emotion){
      return;
    }
    const submission:Diary = {
      id: data?.id,
      emotion: emotion,
      title: diaryTitle.current.value,
      content: diaryContent?.current?.value,
      regDate: date,
    }
    if(!data){
      onCreate(submission);
      navigate('/diary');
    }
    else{
      onUpdate(submission);
      navigate('/diary/'+data?.id);
    }
  }

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
          onClick={handleSubmit}>
            DONE
        </Button>
      }
    />

    {!data && <div>
      date: {date.toLocaleDateString()}
    </div>}
    <Title type="title" name="title" id="title"
      placeholder="Title" defaultValue={data?.title}
      autoFocus={true}
      required
      ref={diaryTitle}
      />
    <EmotionSelector
      emotion={emotion}
      onSelect={handleSelect}
      />
    <Content
      name="content"
      id="content"
      placeholder="Description..."
      defaultValue={data?.content}
      ref={diaryContent}
    />
    </>
  );
}