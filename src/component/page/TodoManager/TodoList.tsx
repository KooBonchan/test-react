import { memo, useCallback, useContext, useMemo, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import styled from "styled-components";
import Todo from "../../../model/Todo";
import { FormInput } from "./component/InputComponent";
import { TodoContext } from "./TodoContext";

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
  
  if(! context) return <div>Error: No Context</div>
  return (
    <Item>
      <input
        type="checkbox"
        onChange={()=>context?.handleDoneToggle(item)}
        checked={done}
        aria-label={`Mark or cancel ${content} as done`}/>
      <TitleString>{content}</TitleString>
      <DateString>{regDate.toLocaleDateString()}</DateString>
      <button type="button" className="delete"
        onClick={()=>context?.handleDelete(item)}
        aria-label={`Delete ${content}`}>
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


const TodoListWrapper = styled.div`
  margin: 1rem auto;
`;
const SearchForm = styled.form`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  gap: 0.1em;
  margin: 0 1em;
`;
const NoContentMessage = styled.div`
  text-align: center;
  margin-top:1rem;
`;
export function TodoList() {
  const context = useContext(TodoContext);
  const [query, setQuery] = useState<string>('');
  const search = useCallback((e: React.FormEvent)=> {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    setQuery(form['search-query'].value.toLowerCase());
  }, []);
  const filteredTodos = useMemo(()=>(
    context?.items
      .filter(
        (todo) => todo.content.toLowerCase().includes(query.toLowerCase())
      )
      || []
  ), [context?.items, query]);
  
  if(! context) return <div>Error: No Context</div>
  return (
    <TodoListWrapper>
      <SearchForm onSubmit={search}>
        <FormInput
          name="search-query"
          placeholder="Search..."
          defaultValue={query}
        />
        <button><FaMagnifyingGlass /></button>
        <button type="reset" onClick={()=>setQuery('')}>reset</button>
      </SearchForm>
      <TodoStatistics />
      {!context?.items.length &&
        <NoContentMessage>NO Contents Yet</NoContentMessage>
      }
      {filteredTodos.length > 0 ?
      filteredTodos
      .map((item) =>(
        <TodoItem key={item.id} item={item}/>
      )) :
      <NoContentMessage>NO Search result</NoContentMessage>}
    </TodoListWrapper>
  );
}
