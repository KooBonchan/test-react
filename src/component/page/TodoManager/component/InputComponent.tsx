import styled from "styled-components";

export const FormInput = styled.input`
  padding:0.5rem;
  margin-right:1rem;
  border: none;
  background-color: inherit;
  color:inherit;
  &::placeholder{
    color: khaki;
    opacity: 0.3;
    font-family: 'Kode mono', Consolas, monospace;
  }

  font-size: 1.2rem;
`;