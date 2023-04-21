import { useState } from 'react';
import AddToDo from '../AddToDo/AddToDo';
import ToDoContainer from '../ToDoContainer/ToDoContainer';


function App() {

const [toDo, setToDo] = useState([]);
const [newToDo, setNewToDo] = useState('');
const [date,setDate] = useState('');
const [importance, setImportance] = useState('');

function addToDo(){
  const newElem = {
    id: toDo.length+1,
    title: newToDo,
    importance,
    date
    }
  setToDo([...toDo, newElem])
  setNewToDo('')
  setDate('')
  setImportance('') 
} 

function deleteToDo(id) { 
  let newArr = toDo.filter((el)=> el.id !== id)
  setToDo(newArr)
  
}

  return (
    <div>
      <AddToDo     
      setNewToDo={setNewToDo}
      importance={importance}
      setImportance={setImportance}
      date={date}
      setDate={setDate}
      addToDo={addToDo}/>    
      <ToDoContainer deleteToDo={deleteToDo}
      toDo={toDo} />
    </div>
  );
}

export default App;
