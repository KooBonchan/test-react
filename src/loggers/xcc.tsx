import { useEffect } from "react";

export function withLifecycleLogger(
  WrappedComponent: (props)=>JSX.Element){
  return (props) => {
    useEffect(() => {
      console.log("mount");
      return () => console.log("unmount");
    }, []);
    useEffect(() => {
      console.log("update");
    });
    return <WrappedComponent {...props} />
  }
}