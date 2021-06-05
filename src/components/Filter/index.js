import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function Filter({ setFilter }) {
  const handleClick = (e) => {
    setFilter(e.target.textContent);
  };

  return (
    <div>
      <ButtonGroup className="mt-3">
        <Button onClick={handleClick} variant="link text-decoration-none">All</Button>
        <Button onClick={handleClick} variant="link text-decoration-none">Active</Button>
        <Button onClick={handleClick} variant="link text-decoration-none">Done</Button>
      </ButtonGroup>
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
