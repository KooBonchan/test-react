import styled from "styled-components";
import Todo from "../../../model/Todo";
import { FormInput } from "./component/InputComponent";
import { useCallback, useContext } from "react";
import { TodoContext } from "./TodoContext";


const Label = styled.div`
  font-size:1.5rem;
  margin-top: 1rem;
`;



export function TodoWriter() {
  const context = useContext(TodoContext);
  if(!context) throw new Error("Project Structure error: Todo Writer should be in Todo Wrapper");

  const handleSubmit = useCallback((e:React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const content = form['content'];
    if(content.length == 0){
      content.focus();
      return;
    }
    const data:Todo = {
      id: -1,
      content: content.value,
      regDate: new Date(),
    };
    context.handleCommit(data);
    form.reset();
  }, [context]);

  return (
    <>
      <Label id="todo-input-label">Write new TODO</Label>
      <form onSubmit={handleSubmit}
      >
        <FormInput 
          className="content-writer"
          name="content"
          type="text"
          placeholder="Write New TODO here..."
          autoFocus={true}
          aria-label="Write your to-do item"
          aria-labelledby="todo-input-label"
          required />
        <button>ADD</button>
      </form>
    </>
  );
}
