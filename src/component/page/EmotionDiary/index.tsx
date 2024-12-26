import { Route, Routes } from 'react-router-dom';
import { DiaryEdit } from './DiaryEdit';
import { DiaryListView } from './DiaryListView';
import { DiaryView } from './DiaryView';
import { DiaryWrite } from './DiaryWrite';
import './index.css';
import { useCallback, useMemo, useReducer } from 'react';
import { Diary, EmotionCode } from '../../../model/Diary';
import { DiaryDispatchContext, DiaryStateContext } from './context/DiaryContext';

const placeholderDiary:Diary = {
  id: -1,
  emotion: EmotionCode.UP,
  title: "PLACEHOLDER",
  content: "sample",
  regDate: new Date("2024-02-11"),
}

type DiaryCommand = 'create' | 'update' | 'delete';
interface DiaryAction {
  command: DiaryCommand,
  id?: number,
  payload?: Diary,
}
const reducer = (state:Diary[], action:DiaryAction): Diary[] => {
  switch(action.command){
    case 'create':
      return [...state, placeholderDiary];
    case 'delete':
      return state.filter((e)=> e.id && e.id != action.id );
    case 'update':
      return state.map(e=>{
        if(action.payload && e.id == action.id){
          return action.payload;
        }
        return e;
      });
  }
}

export function EmotionDiary(){
  const [diary, dispatch] = useReducer(reducer, [placeholderDiary]);
  const handleCreate = useCallback((payload:Diary) => {
    dispatch({
      command: 'create',
      id: Date.now(),
      payload: payload,
    })
  }, []);
  const handleDelete = useCallback((id: number) => {
    dispatch({
      command: 'delete',
      id: id,
    })
  }, []);
  const handleUpdate = useCallback((payload:Diary) =>{
    dispatch({
      command: 'create',
      id: payload.id,
      payload: payload,
    })
  }, []);

  const crudCallbacks = useMemo(()=>({
    onCreate: handleCreate,
    onUpdate: handleUpdate,
    onDelete: handleDelete,
  }), [handleCreate, handleUpdate, handleDelete]);


  return (
    <div className='almendra-regular'>
      <DiaryStateContext.Provider value={diary}>
      <DiaryDispatchContext.Provider value={crudCallbacks}>
        <Routes>
          <Route path='edit/:id' element={<DiaryEdit />}/>
          <Route path='write' element={<DiaryWrite />}/>
          <Route path='' element={<DiaryListView />}/>
          <Route path=':id' element={<DiaryView />}/>
        </Routes>
      </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </div>
  );
}