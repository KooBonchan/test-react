import styled from "styled-components";

export const Button = styled.button`
  font-family: 'Kode mono', 'Consolas', 'Courier New', Courier, monospace;
  padding: 0.2em;
  margin: 0.1em;
  font-size: 1rem;
  color: darkkhaki;
  background-color: #242424;
  border: 1px solid darkkhaki;
  border-radius: 0.3rem;

  white-space: nowrap;
  overflow: visible;

  &.primary {
    color: #242424;
    background-color: darkkhaki;
  }

  &.danger {
    color: #ff6600;
    border-color: #cc3333;
  }

  
`;