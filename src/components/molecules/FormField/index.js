import React from 'react';
import { Label, Input } from 'components';
import PropTypes from 'prop-types';

const Field = ({ label, ...props }) => (
  <Label>
    {label}
    <Input {...props} />
  </Label>
);

Field.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};

export default Field;
