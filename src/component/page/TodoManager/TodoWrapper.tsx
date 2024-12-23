import { createContext, useCallback, useState } from "react";
import Todo from "../../../model/Todo";
import { TodoContextType } from "../../../model/TodoContextType";
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

export function TodoWrapper() {
  const [todos, setTodos] = useState<Todo[]>(placeholderTodos);

  const handleCommit = useCallback((todo:Todo)=>{
    setTodos( prevItems => {
      const nextTodo = {...todo, id:Date.now()};
      return [nextTodo, ...prevItems]
    })
  }, []);
  const handleDelete = useCallback((id:number)=>{
    setTodos(prevItems => prevItems.filter((todo)=>(todo.id!==id)))
  }, []);
  const handleDoneToggle = useCallback((id:number) => {
    setTodos(prevItems => prevItems.map((todo) => {
      if(todo.id == id) {
        return {...todo, done: !(todo.done ?? false)}
      };
      return todo;
    }))
  }, [])
  
  return (
    <>
      <TodoContext.Provider value={{items: todos, handleCommit, handleDelete, handleDoneToggle}}>
        <TodoWriter />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}
