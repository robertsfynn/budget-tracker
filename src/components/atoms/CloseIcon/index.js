import React from 'react';
import styled from 'styled-components';

const StyledCloseIcon = styled.svg`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  cursor: pointer;

  @media(min-width: 768px) {
      width: 16px;
      height: 16px;
  }
`;

const CloseIcon = () => {
  return (
    <StyledCloseIcon
      xmlns="http://www.w3.org/2000/svg"
      width="612px"
      height="612px"
      viewBox="0 0 612 612"
    >
      <polygon
        points="612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 
				306,341.411 576.521,611.397 612,575.997 341.459,306.011"
      />
    </StyledCloseIcon>
  );
};

export default CloseIcon;
