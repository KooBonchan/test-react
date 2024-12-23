import { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoWriter } from "./TodoWriter";
import Todo from "../../../model/Todo";

export function TodoWrapper() {
  const [items, setItems] = useState<Todo[]>([
  {
    content: "TODO1",
    regDate: new Date(),
  },
  {
    content: "TODO2",
    regDate: new Date(),
  },
  {
    content: "TODO3",
    regDate: new Date(),
  },
  ]);
  
  return (
    <>
      <TodoWriter onCommit={(t)=>setItems([t, ...items])}/>
      <TodoList items={items}
        onDelete={(idx)=>{
          setItems(items.slice(0,idx).concat(items.slice(idx+1)))
        }}
        onDoneToggle={(idx)=>{
          const newItems = [...items];
          newItems[idx].done = !(newItems[idx].done ?? false);
          setItems(newItems);
        }}/>
    </>
  );
}
