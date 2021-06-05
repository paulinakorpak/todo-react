import React from 'react';
import PropTypes from 'prop-types';

function Form({ addItem }) {
  const handleChange = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      const newItem = {
        id: Date.now(),
        title: e.target.value,
        completed: false,
      };

      addItem(newItem);

      e.target.value = '';
    }
  };

  return (
    <div className="w-100">
      <input
        type="text"
        placeholder="add new todo"
        className="form-control form-control-color-secondary p-4"
        onKeyUp={handleChange}
      />
    </div>
  );
}

export default Form;

Form.propTypes = {
  addItem: PropTypes.func.isRequired,
};
