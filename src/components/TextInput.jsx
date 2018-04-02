import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ handleChange }) => (
  <div className="form-group">
    <input
      onChange={handleChange}
      className="form-control"
      rows="1"
    />
  </div>
);

TextInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default TextInput;
