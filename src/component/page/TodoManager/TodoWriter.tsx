import styled from "styled-components";
import Todo from "../../../model/Todo";
import { FormInput } from "./component/InputComponent";


const Label = styled.div`
  font-size:1.5rem;
  margin-top: 1rem;
`;

export function TodoWriter({onCommit}:{onCommit: (t:Todo) => void}) {
  return (
    <>
      <Label>Write new TODO</Label>
      <form onSubmit={(e) => {
        e.preventDefault();
          const form = e.target as HTMLFormElement;
          const content = form['content'].value;
          if(content.length == 0) return;
          const data:Todo = {
            content: content,
            regDate: new Date(),
          };
          onCommit(data);
          form.reset();
        }}
      >
        <FormInput className="content-writer" name="content" type="text" placeholder="Write New TODO here..." required autoFocus={true} />
        <button>ADD</button>
      </form>
    </>
  );
}
