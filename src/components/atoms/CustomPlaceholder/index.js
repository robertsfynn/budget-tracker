import React from 'react';
import { RectShape } from 'react-placeholder/lib/placeholders';
import 'react-placeholder/lib/reactPlaceholder.css';

const CustomPlaceholder = ({ height }) => (
  <RectShape
    style={{
      marginBottom: 30,
      width: '100%',
      height: `${height}px`,
      background: 'rgb(205, 205, 205)',
      borderRadius: '25px',
    }}
  />
);

export default CustomPlaceholder;
