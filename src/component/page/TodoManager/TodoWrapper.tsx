import { createContext, useReducer } from "react";
import Todo from "../../../model/Todo";
import { TodoContextType } from '../../../model/TodoContextType';
import { TodoList } from "./TodoList";
import { TodoWriter } from "./TodoWriter";

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

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
  
  return (
    <>
      <TodoContext.Provider value={{
          items: todos,
          handleCommit: (todo) => dispatch({
              command: TodoActionCommand.CREATE,
              payload: {...todo, id:Date.now()},
            }),
          handleDelete: (todo) => dispatch({
            command: TodoActionCommand.DELETE,
            payload: todo,
          }),
          handleDoneToggle: (todo) => dispatch({
            command: TodoActionCommand.DONE_TOGGLE,
            payload: todo,
          }),
        }}>
        <TodoWriter />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}
