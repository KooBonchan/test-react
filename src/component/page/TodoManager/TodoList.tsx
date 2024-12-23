import { memo, useContext, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import styled from "styled-components";
import Todo from "../../../model/Todo";
import { FormInput } from "./component/InputComponent";
import { TodoContext } from "./TodoWrapper";

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr 1fr;
  align-items: center;
  margin: 0.1rem 1rem;
`;
const TitleString = styled.span`
  text-align: left;
  font-size: 1.2rem;
`;
const DateString = styled.span`
  font-size: 0.8em;
  opacity: 0.6;
`;
const TodoItem = memo(function(
  {item}:{item: Todo}
) {
  const context = useContext(TodoContext);
  const {content, regDate, done=false} = item;
  
  return (
    <Item>
      <input type="checkbox" onChange={()=>context?.handleDoneToggle(item.id)} checked={done}/>
      <TitleString>{content}</TitleString>
      <DateString>{regDate.toLocaleDateString()}</DateString>
      <button type="button" className="delete"
        onClick={()=>context?.handleDelete(item.id)}>
        delete
      </button>
    </Item>
  );
});


function TodoStatistics(){
  const todo = useContext(TodoContext)?.items ?? [];
  const totalCount = todo.length;
  const doneCount = todo.filter(todo=>todo.done).length;
  
  return (
    <div style={{display:'flex', gap:'1.5em', justifyContent:'center'}}>
      <span>Total: {totalCount}
      </span>
      <span>Done: {doneCount}</span>
      <span>Left: {totalCount - doneCount}</span>
    </div>
  );
}


export function TodoList() {
  const context = useContext(TodoContext);
  const [query, setQuery] = useState<string>('');
  return (
    <div style={{margin:'1rem auto'}}>
      <form 
          onSubmit={(e)=>{
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            setQuery(form['search-query'].value.toLowerCase());
          }}
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr 1fr",
            gap:"0.1em",
            margin: "0 1em",
          }}>
        <FormInput
          name="search-query"
          placeholder="Search..."
          defaultValue={query}
        ></FormInput>
        <button><FaMagnifyingGlass /></button>
        <button type="reset" onClick={()=>{setQuery('');}}>
          reset
        </button>
      </form>
      <TodoStatistics />
      {!context?.items.length && <div>NO Contents Yet</div>}
      {context?.items
      .filter((todo) => todo.content.toLowerCase().includes(query))
      .map((item) =>(
        <TodoItem key={item.id} item={item}/>
      ))}
    </div>
  );
}
