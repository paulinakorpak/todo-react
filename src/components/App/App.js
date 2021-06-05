import React, { useState } from 'react';
import Figure from 'react-bootstrap/Figure';
import Form from '../Form';
import List from '../List';
import Filter from '../Filter';
import InnerWrapper from './styles';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodoItem = (item) => {
    setTodoItems([...todoItems, item]);
  };

  const deleteTodoItem = (item) => {
    const newTodoItems = todoItems.filter((todoItem) => todoItem.id !== item.id);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="container-sm d-flex justify-content-center h-100 w-100">
      <InnerWrapper className="d-flex flex-column align-items-center">
        <Figure className="text-center mt-5">
          <blockquote className="blockquote">
            <h1 className="h1 title text-primary text-uppercase">To Do List</h1>
          </blockquote>
          <Figure.Caption className="blockquote-footer text-secondary">
            you wont forget anything today!
          </Figure.Caption>
        </Figure>
        <Form addItem={addTodoItem} />
        <List items={todoItems} deleteItem={deleteTodoItem} />
        <Filter />
      </InnerWrapper>
    </div>
  );
}

export default App;
