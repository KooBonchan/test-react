import { useCallback, useState } from "react";
import Todo from "../../../model/Todo";
import { TodoList } from "./TodoList";
import { TodoWriter } from "./TodoWriter";

export function TodoWrapper() {
  const [items, setItems] = useState<Todo[]>([
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
  ]);

  const handleCommit = useCallback((todo:Todo)=>{
    setItems( prevItems => {
      const nextTodo = {...todo, id:Date.now()};
      return [nextTodo, ...prevItems]
    })
  }, []);
  const handleDelete = useCallback((id:number)=>{
    setItems(prevItems => prevItems.filter((todo)=>(todo.id!==id)))
  }, []);
  const handleDoneToggle = useCallback((id:number) => {
    console.log("callback is called", id);
    setItems(prevItems => prevItems.map((todo) => {
      if(todo.id == id) {
        return {...todo, done: !(todo.done ?? false)}
      };
      return todo;
    }))
  }, [])
  
  return (
    <>
      <TodoWriter onCommit={handleCommit}/>
      <TodoList
        items={items}
        onDelete={handleDelete}
        onDoneToggle={handleDoneToggle} />
    </>
  );
}
