import React from 'react';
import styled from 'styled-components';

const StyledCloseIcon = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const CloseIcon = () => {
  return (
    <StyledCloseIcon
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fill-rule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          fill="#1D1D1D"
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        />
      </g>
    </StyledCloseIcon>
  );
};

export default CloseIcon;
