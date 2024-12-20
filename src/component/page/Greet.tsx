import { useState } from "react";

export function Greet() {
  const [text, setText] = useState('');
  
  function handleClick() {
    alert(text);
    
  }

  return (
    <>
      <input
        value={text}
        onChange={(e) => {setText(e.target.value);}}
        autoFocus />
      <button type="button" onClick={handleClick} >Click!</button>
    </>
  );
}
