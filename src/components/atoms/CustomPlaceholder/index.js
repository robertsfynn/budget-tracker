import React from 'react';
import { RectShape } from 'react-placeholder/lib/placeholders';
import 'react-placeholder/lib/reactPlaceholder.css';

const CustomPlaceholder = (
  <RectShape
    style={{
      marginBottom: 30,
      width: '100%',
      height: '30px',
      background: 'rgb(205, 205, 205)',
      borderRadius: '25px',
    }}
  />
);

export default CustomPlaceholder;
