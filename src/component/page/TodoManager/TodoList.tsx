import styled from "styled-components";
import Todo from "../../../model/Todo";
import { FormInput } from "./component/InputComponent";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

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
function TodoItem(
  {item, onDelete, onDoneToggle}:
  {item: Todo, onDelete: ()=>void, onDoneToggle: ()=>void}
) {
  
  const {content, regDate, done=false} = item;
  
  return (
    <Item>
      <input type="checkbox" onChange={onDoneToggle} checked={done}/>
      <TitleString>{content}</TitleString>
      <DateString>{regDate.toLocaleDateString()}</DateString>
      <button type="button" className="delete"
        onClick={onDelete}>
        delete
      </button>
    </Item>
  );
}


export function TodoList(
  {items, onDelete, onDoneToggle}:
  {items:Todo[], onDelete:(idx:number)=>void, onDoneToggle:(idx:number)=>void}
) {
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
      {!items.length && <div>NO Contents Yet</div>}
      {items
      .filter((todo) => todo.content.toLowerCase().includes(query))
      .map((item) =>(
        <TodoItem key={item.id} item={item}
          onDelete={()=>onDelete(item.id)}
          onDoneToggle={()=>onDoneToggle(item.id)}/>
      ))}
    </div>
  );
}
