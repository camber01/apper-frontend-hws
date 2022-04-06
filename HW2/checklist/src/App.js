import "./styles.css";
import { useState } from "react";

const Checklist = () => {
  const [ checklist , setChecklist ] = useState([])
  const [ list , setList ] = useState('')

  const handleInput = (event) => {
    setList(event.target.value)
  }

  const addList = () => {
    const newItem = checklist.concat(list)
    setChecklist(newItem)
    setList('')
  }

  const clearList = () => {
    const clear = []
    setChecklist(clear)
  }

  const removeItem = (index) => {
    const newList = checklist.filter(
      (item, position) => position !== index
    )
    setChecklist(newList)
  }

  return(
    <div className='app'>
      <h1>My CheckList</h1>
      <input placeholder='Enter item' value={list} onChange={handleInput} />
      <button  onClick={addList}> Add List </button>
      <button onClick={clearList} > Clear List </button>
      <ul>
        {checklist.map(
          (item, index) => (<li key={index} onClick={() => removeItem(index)}> {item} </li>)
        )}
      </ul>
    </div>
  );
}

function App(){
  return(
    <Checklist />
  );
}
export default App;

