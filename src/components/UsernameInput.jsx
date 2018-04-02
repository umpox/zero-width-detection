import React from 'react';
import PropTypes from 'prop-types';

const UsernameInput = ({ handleChange }) => (
  <div className="input-group input-group-lg">
    <input
      onChange={handleChange}
      type="text"
      className="form-control"
      placeholder="Username"
      aria-label="Username"
    />
  </div>
);

UsernameInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default UsernameInput;
