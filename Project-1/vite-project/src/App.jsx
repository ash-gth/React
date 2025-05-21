import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setCounter] = useState(0)


const addvalue = () =>
{
  console.log("clicked", counter);
  setCounter(counter + 1)
}

let [lesser, setLesser] = useState(5)

const removeValue = () =>
{
  console.log("clicked", lesser);
  setLesser(lesser - 1)
}

// let counter 
  return(
    <>
     <h1>chai or react</h1>
     <h1>Counter Value : {counter}</h1>
     <button onClick={addvalue}>Add a value {counter}</button>
     <button onClick={removeValue}>Remove a value {lesser}</button>
    </>
  )
}
export default App;