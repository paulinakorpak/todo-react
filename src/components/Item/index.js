import React from 'react';
import Form from 'react-bootstrap/Form';
import { BsArchiveFill } from 'react-icons/bs';
import Todo from './styles';

function Item() {
  return (
    <Todo
      className="todo"
    >
      <Form.Group controlId="formBasicCheckbox" className="d-flex align-items-center">
        <Form.Check
          type="checkbox"
          className="checkbox flex-grow-1 text-secondary flex-grow-1"
          label="jakiś tekst"
        />
        <BsArchiveFill className="icon text-primary" />
      </Form.Group>
    </Todo>
  );
}

export default Item;
