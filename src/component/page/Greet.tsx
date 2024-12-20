import { useEffect, useRef, useState } from "react";

export function Greet() {
  const [text, setText] = useState<string>('');
  const textRef = useRef<HTMLInputElement | null>(null);
  
  useEffect(()=>{
    if(text.length > 0){
      console.log(text);
    }
  }, [text])

  function handleClick() {
    textRef.current?.focus();
    textRef.current?.setAttribute('value', '');
    setText(textRef.current?.value || '');
  }

  return (
    <>
      <input
        ref={textRef}
        autoFocus />
      <button type="button" onClick={handleClick} >Click!</button>
    </>
  );
}
