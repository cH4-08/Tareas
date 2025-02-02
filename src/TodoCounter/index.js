import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
      completedTodos,
      totalTodos,
  } = React.useContext(TodoContext);

  return (
    <h1 className="TodoCounter">
      Se han completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Tickets
    </h1>
  );
} 
    export { TodoCounter };
