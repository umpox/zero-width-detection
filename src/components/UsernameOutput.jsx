import React from 'react';
import PropTypes from 'prop-types';

const UsernameOutput = ({ username }) => (
  <div className="input-group input-group-lg">
    <input
      value={username}
      readOnly
      type="text"
      className="form-control"
      aria-label="Extracted Username"
    />
  </div>
);

UsernameOutput.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UsernameOutput;
