import React from 'react';

const ToDo = ({id, importance, title, deleteToDo}) => {
    return (
        <div>
            <p className={importance}>{title}</p>           
            <button onClick={() => deleteToDo(id)}>Delete</button>
        </div>
    );
};

export default ToDo;