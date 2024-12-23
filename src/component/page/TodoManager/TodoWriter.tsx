import styled from "styled-components";
import Todo from "../../../model/Todo";
import { FormInput } from "./component/InputComponent";
import { TodoContext } from "./TodoWrapper";
import { useContext } from "react";


const Label = styled.div`
  font-size:1.5rem;
  margin-top: 1rem;
`;

export function TodoWriter() {
  const context = useContext(TodoContext);
  if(!context) throw new Error("Project Structure error: Todo Writer should be in Todo Wrapper");
  return (
    <>
      <Label>Write new TODO</Label>
      <form onSubmit={(e) => {
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
      }}
      >
        <FormInput className="content-writer" name="content" type="text" placeholder="Write New TODO here..." required autoFocus={true} />
        <button>ADD</button>
      </form>
    </>
  );
}
