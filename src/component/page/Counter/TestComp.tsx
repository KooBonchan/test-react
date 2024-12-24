import { useReducer } from "react";
import styled from "styled-components";

const TestCompContainer = styled.div`
  border: 6px solid #333;
  width: fit-content;
  margin: 0 auto;
  padding: 1rem;
`;

enum CountAction {
  INCREASE = 'increase',
  DECREASE = 'decrease',
}
function countReducer (
  state: number,
  action: CountAction
): number {
  switch(action){
    case CountAction.INCREASE:
      if(state < 10) return state + 1;
      return state;
    case CountAction.DECREASE:
      if(state > -10) return state - 1;
      return state;
  }
}

const GraphBlock = styled.div`
  width: 100%;
  height: 100%;
  background-color: #333;
  &.active{
    background-color: #666;
  }
`;
function Graph({count} : {count: number}) {
  const mid = 10;
  return (
    <>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(21,1fr)',
      width: '30vw',
      height: '2rem',
      marginBottom: '0.5rem',
    }}>
    {Array(21).fill(0)
      .map((_e, i)=>((i === mid + count) ? true : false))
      .map(e=><GraphBlock className={e?'active':''}/>)}
    </div>
    </>
  )
}

export default function TestComp() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <TestCompContainer>
      <Graph count={count} />
      <div>
        <button onClick={()=>dispatch(CountAction.DECREASE)}>&lt;</button>
        <button onClick={()=>dispatch(CountAction.INCREASE)}>&gt;</button>
      </div>
    </TestCompContainer>
  )

}