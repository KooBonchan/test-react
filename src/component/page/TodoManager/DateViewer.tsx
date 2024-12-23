import { useRef } from "react";
import styled from "styled-components";

const Label = styled.div`
  margin: 0.5rem 1rem;
  text-align: left;
  font-weight: bold;
  font-size: 1.2rem;
`;

const DateString = styled.div`
  font-size: 2rem;
  border-bottom: 1px solid darkkhaki;
  padding-bottom: 1rem;
`;

export function DateViewer() {
  const date = useRef(new Date());
  return (
    <>
      <Label>Today is ⏰</Label>
      <DateString>{date.current.toDateString()}</DateString>
    </>
  );
}
