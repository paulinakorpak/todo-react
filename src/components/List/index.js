import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Item from '../Item';

function List({ items }) {
  return (
    <div className="w-100">
      <ListGroup>
        {items.map((item) => <Item key={item.id} item={item} />)}
      </ListGroup>
    </div>
  );
}

export default List;

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
