import { useCallback, useMemo, useReducer } from "react";
import Todo from "../../../model/Todo";
import { TodoContextType } from '../../../model/TodoContextType';
import { TodoContext } from "./TodoContext";
import { TodoList } from "./TodoList";
import { TodoWriter } from "./TodoWriter";


const placeholderTodos = [
  {
    id: 0,
    content: "TODO1",
    regDate: new Date(),
  },
  {
    id: 1,
    content: "TODO2",
    regDate: new Date(),
  },
  {
    id: 2,
    content: "TODO3",
    regDate: new Date(),
  },
];


enum TodoActionCommand {
  CREATE, DONE_TOGGLE, DELETE
}
interface TodoAction {
  command: TodoActionCommand;
  payload: Todo;
}
const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch(action.command){
    case TodoActionCommand.CREATE:
      return [action.payload, ...state];
    case TodoActionCommand.DONE_TOGGLE:
      return state.map((todo) => {
        if(todo.id === action.payload.id){
          return {...todo, done: !(todo.done ?? false)}
        }
        return todo;
      });
    case TodoActionCommand.DELETE:
      return state.filter((todo) =>
        (todo.id !== action.payload.id));
  }
}

export function TodoWrapper() {
  const [todos, dispatch] = useReducer(todoReducer, placeholderTodos);
  const handleCommit = useCallback((todo: Todo) => dispatch({
    command: TodoActionCommand.CREATE,
    payload: {...todo, id:Date.now()},
  }), [dispatch]);
  const handleDelete = useCallback((todo:Todo) => dispatch({
    command: TodoActionCommand.DELETE,
    payload: todo,
  }), [dispatch]);
  const handleDoneToggle = useCallback((todo:Todo) => dispatch({
    command: TodoActionCommand.DONE_TOGGLE,
    payload: todo,
  }), [dispatch]);

  const context:TodoContextType = useMemo(()=>({
    items: todos,
    handleCommit: handleCommit,
    handleDelete: handleDelete,
    handleDoneToggle: handleDoneToggle,
  }), [todos, handleCommit, handleDelete, handleDoneToggle]);
  
  return (
    <>
      <TodoContext.Provider value={context}>
        <TodoWriter />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}
