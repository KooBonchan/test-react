import { Route, Routes } from 'react-router-dom';
import './index.css'
import { DiaryWrite } from './DiaryWrite';
import { DiaryEdit } from './DiaryEdit';
import { DiaryListView } from './DiaryListView';
import { DiaryView } from './DiaryView';
import { Button } from './component/Button';


export function EmotionDiary(){
  return (
    <div className='almendra-regular'>
      <h2>Emotion Diary</h2>
      <div>
        <Button >test</Button>
        <Button className='primary'>test</Button>
        <Button className='danger'>test</Button>
      </div>
      <Routes>
        <Route path='edit/:id' element={<DiaryEdit />}/>
        <Route path='write' element={<DiaryWrite />}/>
        <Route path='' element={<DiaryListView />}/>
        <Route path=':id' element={<DiaryView />}/>
      </Routes>
    </div>
  );
}