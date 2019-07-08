import React from 'react';
import { Label, Input } from 'components';

const Field = ({ label, ...props }) => (
  <Label>
    {label}
    <Input {...props} />
  </Label>
);

export default Field;
