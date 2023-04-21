import React from 'react';

const AddToDo = ({importance, date, addToDo, setImportance, setDate, setNewToDo}) => {
    return (
        <div>
            <input 
            type="text"         
            onChange={(event)=> setNewToDo(event.target.value)} placeholder='Введите задание'/>
            <select
                value={importance}
                onChange={(event)=> setImportance(event.target.value)}>
                <option value="">Importance: </option>
                <option value="importantce">Importantce</option>
                <option value="noimportant">No important</option>
            </select>
            <select 
                value={date} 
                onChange={(event)=> setDate(event.target.value)}>                
                <option value="">Select day: </option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option> 
                <option value="Sunday">Sunday</option>            
            </select>
            <button onClick={addToDo}>Add</button>
        </div>
    );
};

export default AddToDo;