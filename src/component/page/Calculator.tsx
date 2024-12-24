import { useReducer } from "react";
import styled from "styled-components";

const Keypad = styled.div`
  display:inline-flex;
  gap:1rem;
`
const NumberPad = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto 1rem;
  width: 30%;
  min-width:240px;
  gap: 0.5rem;
`;
const OperatorPad = styled.div`
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto 1rem;
  width: 15%;
  min-width:120px;
  gap: 0.5rem;
  button {
    background-color: #3a3a3a;
  }
`

function KeyButton(
  {value, onClick, style} :
  {value:string, onClick:()=>void, style?:React.CSSProperties}) {
    return <button onClick={onClick} style={style}>{value}</button>
}

export function Calculator() {
  const numbers = '7,8,9,4,5,6,1,2,3,.,0,00'.split(',');
  
  type State = {
    peek: 'number' | 'double' | 'operator' | 'zero';
    value:string;
  };
  type Action = {
    type: 'number' | 'operator' | 'clear' | 'eval';
    value: string;
  }
  const baseState:State = {peek:'zero', value:'0'};
  const reducer = (state:State, action:Action): State => {
    switch(action.type){
      case 'number':
        if(state.peek === 'operator') {
          return {peek:'number', value: state.value + action.value};
        }
        else if(state.peek === 'zero'){
          if(action.value === '0' || action.value === '00'){
            return state;
          }
          else if(action.value === '.'){
            return {peek:'double', value: '0.'};
          }
          else{
            return {peek:'number', value: action.value};
          }
        }
        else if(action.value === '.'){
          if(state.peek === 'double') return state;
          return {peek:'double', value: state.value + '.'};
        }
        return {peek: state.peek, value: state.value + action.value};
      case 'operator': 
        if(state.peek === 'operator')
          return state;
        return {peek:'operator', value: state.value + ' ' + action.value + ' '};
      case 'clear':
        return baseState;
      default:
        return state;
    }
  }
  const [keypad, keyDispatch] = useReducer(reducer,baseState);
  
  return (
    <div style={{padding: '0 2rem'}}>
    <h3>KEYPAD {keypad.value}</h3>
    <Keypad>
      <NumberPad key='numpad'>
        {numbers.map((n) => 
          <KeyButton 
            key={'numpad'+n}
            value={n}
            onClick={()=>
              keyDispatch({type:'number', value:n})
            } />
        )}
      </NumberPad>
      <OperatorPad key='operatorPad'>
        <KeyButton
          key={'clear'}
          value={'Clear'}
          onClick={()=>
              keyDispatch({type:'clear', value:''})
          }
          style={{gridColumn: 'span 2'}}
        />
        {['+','-','*','/'].map((op) => 
          <KeyButton
            key={'op'+op}
            value={op}
            onClick={()=>
                keyDispatch({type:'operator', value:op})
            } />
        )}
        <KeyButton
          key={'eval'}
          value={'='}
          onClick={()=>
              keyDispatch({type:'eval', value:''})
          }
          style={{
            gridColumn: 'span 2',
            background: 'rgba(255, 255, 255, 0.87)',
            color: '#1a1a1a',
            fontWeight: 'bold',
          }}
        />
      </OperatorPad> 
    </Keypad>
    </div>
  );
}
