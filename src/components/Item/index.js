import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { BsArchiveFill } from 'react-icons/bs';
import Todo from './styles';

function Item({ item }) {
  return (
    <Todo className="todo">
      <Form.Group controlId="formBasicCheckbox" className="d-flex align-items-center">
        <Form.Check
          type="checkbox"
          label={item.title}
          className="checkbox flex-grow-1 text-secondary flex-grow-1"
        />
        <BsArchiveFill className="icon text-primary" />
      </Form.Group>
    </Todo>
  );
}

export default Item;

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
