import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function Filter() {
  return (
    <div>
      <ButtonGroup className="mt-3">
        <Button variant="link text-decoration-none">All</Button>
        <Button variant="link text-decoration-none">Active</Button>
        <Button variant="link text-decoration-none">Done</Button>
      </ButtonGroup>
    </div>
  );
}

export default Filter;
