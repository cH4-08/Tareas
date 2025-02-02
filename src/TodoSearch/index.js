import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
} = React.useContext(TodoContext);

  return (
    <input
      placeholder="Busqueda de ticket"
      className="TodoSearch"
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value);
         // console.log('Escribiste en el TODO SEARCH');
         // console.log(event);
         // console.log(event.target);
         // console.log(event.target.value);
      }}   
       />
  );
}

export { TodoSearch };
