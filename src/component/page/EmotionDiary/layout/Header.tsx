import styled from "styled-components";

const HeaderTemplate = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height:3em;
  padding: 0.5rem 0.5rem;
`;

const Title = styled.span`
  white-space: nowrap;
  text-transform: uppercase;
  font-family: 'Kode mono';
  font-size: 1.5rem;
  font-weight:bold;
`;


export function Header(
  {leftChild, title='Emotion Diary', rightChild}:
  {leftChild: JSX.Element, title?:string, rightChild: JSX.Element}
) {
  return (
    <HeaderTemplate>
      {leftChild}
      <Title>{title}</Title>
      {rightChild}
    </HeaderTemplate>
  );
}