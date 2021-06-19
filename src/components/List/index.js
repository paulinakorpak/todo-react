import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Item from '../Item';

function List({ items, deleteItem, markItemAsCompleted }) {
  return (
    <div className="w-100">
      <ListGroup data-test="items-list">
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            markItemAsCompleted={markItemAsCompleted}
          />
        ))}
      </ListGroup>
    </div>
  );
}

export default List;

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteItem: PropTypes.func.isRequired,
  markItemAsCompleted: PropTypes.func.isRequired,
};
