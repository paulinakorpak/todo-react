import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { BsArchiveFill } from 'react-icons/bs';
import Todo from './styles';

function Item({ item, deleteItem, markItemAsCompleted }) {
  const handleDelete = () => {
    deleteItem(item);
  };

  const handleStatusChange = () => {
    markItemAsCompleted(item);
  };

  const lineThroughClassName = item.completed ? 'checked text-decoration-line-through' : '';

  return (
    <Todo className="todo">
      <Form.Group controlId="formBasicCheckbox" className="d-flex align-items-center">
        <Form.Check
          type="checkbox"
          label={item.title}
          className={`checkbox flex-grow-1 text-secondary flex-grow-1 ${lineThroughClassName}`}
          onClick={handleStatusChange}
        />
        <BsArchiveFill
          className="icon text-primary"
          onClick={handleDelete}
        />
      </Form.Group>
    </Todo>
  );
}

export default Item;

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  deleteItem: PropTypes.func.isRequired,
  markItemAsCompleted: PropTypes.func.isRequired,
};
