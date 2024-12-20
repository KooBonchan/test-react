import { useEffect, useRef, useState } from "react";
import './Counter.css';

function Even(){
  useEffect(() => {
    return () => {console.log("Unmount: Even");}
  }, [])
  return <div style={{fontSize:'0.7rem'}}>Quite Even</div>
}

export function Counter() {
  const [count, setCount] = useState(0);
  const didMount = useRef(false);
  useEffect(() => {
    console.log("Counter update: ", count);
  }, [count]);

  useEffect(() => {
    if(!didMount.current) {
      didMount.current = true;
      console.log("Counter did mount");
    }
  }, [])

  const minusModifiers = [-1, -10, -100, -500,];
  const plusModifiers = [1, 10, 100, 500,];
  return (
    <>
    <div style={{
      padding:'2rem',
      maxWidth: '100%',
    }}>
      <h2>Count is {count}</h2>
      <div className="button-bar">
        {minusModifiers.map((modifier) => (
          <button 
            key={'modi'+modifier}
            type="button"
            onClick={()=>setCount(count+modifier)}
            >
              {modifier}
          </button>
        ))}
      </div>
      <div className="button-bar">
        {plusModifiers.map((modifier) => (
          <button 
            key={'modi'+modifier}
            type="button"
            onClick={()=>setCount(count+modifier)}
            >
             +{modifier}
          </button>
        ))}
      </div>
      {count%2 === 0 && <Even />}
    </div>
    </>
  );
}
