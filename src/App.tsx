import { useReducer } from 'react'
import './App.css'

function App() {
  const [count, dispatch] = useReducer(e=>e+1, 0);

  return (
    <>
      <h1>Hello</h1>
      <div className="card">
        <button onClick={dispatch}>
          count is {count}
        </button>        
      </div>
    </>
  )
}

export default App;
