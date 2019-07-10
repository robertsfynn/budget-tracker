import React from 'react';
import styled from 'styled-components';

const StyledArrowIcon = styled.svg`
  position: absolute;
  right: 2rem;
  cursor: pointer;
  transform: ${({ type }) =>
    (type === 'top' && 'rotateZ(90deg)') ||
    (type === 'right' && 'rotateZ(180deg)') ||
    (type === 'bottom' && 'rotateZ(270deg)') ||
    'rotateZ(0)'};
`;

const ArrowIcon = ({ ...props }) => {
  return (
    <StyledArrowIcon
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fill-rule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          fill="#1D1D1D"
          d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"
        />
      </g>
    </StyledArrowIcon>
  );
};

export default ArrowIcon;
