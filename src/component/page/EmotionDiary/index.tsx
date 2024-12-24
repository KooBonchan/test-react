import { Route, Routes } from 'react-router-dom';
import './index.css'
import { DiaryWrite } from './DiaryWrite';
import { DiaryEdit } from './DiaryEdit';
import { DiaryListView } from './DiaryListView';


export function EmotionDiary(){
  return (
    <div className='almendra-regular'>
      <h2>Emotion Diary</h2>
      <Routes>
        <Route path='edit/:id' element={<DiaryEdit />}/>
        <Route path='write' element={<DiaryWrite />}/>
        <Route path='' element={<DiaryListView />}/>
      </Routes>
    </div>
  );
}