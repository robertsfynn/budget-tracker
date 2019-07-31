import React from 'react';
import { RectShape } from 'react-placeholder/lib/placeholders';
import { Row, Column } from 'components';
import 'react-placeholder/lib/reactPlaceholder.css';

const CustomPlaceholder = ({ type, height }) => {
  let placeholder;

  switch (type) {
    case 'box':
      placeholder = (
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
      break;
    case 'boxes':
      placeholder = (
        <Row>
          <Column style={{ marginRight: '1rem' }}>
            <RectShape
              style={{
                marginBottom: 30,
                width: '100%',
                height: `${height}px`,
                background: 'rgb(205, 205, 205)',
                borderRadius: '25px',
              }}
            />
          </Column>
          <Column>
            <RectShape
              style={{
                marginBottom: 30,
                width: '100%',
                height: `${height}px`,
                background: 'rgb(205, 205, 205)',
                borderRadius: '25px',
              }}
            />
          </Column>
        </Row>
      );
      break;
    default:
      placeholder = <></>;
  }
  return placeholder;
};

export default CustomPlaceholder;
