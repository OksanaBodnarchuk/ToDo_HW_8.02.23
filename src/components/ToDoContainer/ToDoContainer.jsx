import React from "react";
import ToDo from "../ToDo/ToDo";

const ToDoContainer = ({ toDo, deleteToDo }) => {
  const changeDay = (day) => {
    return toDo.filter((toDo) => toDo.date === day);
  };

  return (
    <div>
      <div>
        {changeDay("Monday")
          .sort((a, b) => (a.importance < b.importance ? 1 : -1))
          .map((elem) => (
            <ToDo key={elem.id} {...elem} deleteToDo={deleteToDo} />
          ))}
      </div>
      <div>
        {changeDay("Tuesday")
          .sort((a, b) => (a.importance < b.importance ? 1 : -1))
          .map((elem) => (
            <ToDo key={elem.id} {...elem} deleteToDo={deleteToDo} />
          ))}
      </div>
      <div>
        {changeDay("Wednesday")
          .sort((a, b) => (a.importance < b.importance ? 1 : -1))
          .map((elem) => (
            <ToDo key={elem.id} {...elem} deleteToDo={deleteToDo} />
          ))}
      </div>
      <div>
        {changeDay("Thursday")
          .sort((a, b) => (a.importance < b.importance ? 1 : -1))
          .map((elem) => (
            <ToDo key={elem.id} {...elem} deleteToDo={deleteToDo} />
          ))}
      </div>
      <div>
        {changeDay("Friday")
          .sort((a, b) => (a.importance < b.importance ? 1 : -1))
          .map((elem) => (
            <ToDo key={elem.id} {...elem} deleteToDo={deleteToDo} />
          ))}
      </div>
      <div>
        {changeDay("Saturday")
          .sort((a, b) => (a.importance < b.importance ? 1 : -1))
          .map((elem) => (
            <ToDo key={elem.id} {...elem} deleteToDo={deleteToDo} />
          ))}
      </div>
      <div>
        {changeDay("Sunday")
          .sort((a, b) => (a.importance < b.importance ? 1 : -1))
          .map((elem) => (
            <ToDo key={elem.id} {...elem} deleteToDo={deleteToDo} />
          ))}
      </div>
    </div>
  );
};

export default ToDoContainer;
