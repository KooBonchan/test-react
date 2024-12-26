import { Route, Routes } from 'react-router-dom';
import { DiaryEdit } from './DiaryEdit';
import { DiaryListView } from './DiaryListView';
import { DiaryView } from './DiaryView';
import { DiaryWrite } from './DiaryWrite';
import './index.css';


export function EmotionDiary(){
  return (
    <div className='almendra-regular'>
      <Routes>
        <Route path='edit/:id' element={<DiaryEdit />}/>
        <Route path='write' element={<DiaryWrite />}/>
        <Route path='' element={<DiaryListView />}/>
        <Route path=':id' element={<DiaryView />}/>
      </Routes>
    </div>
  );
}