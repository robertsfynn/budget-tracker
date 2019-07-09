import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  font-family: GTWalsheimPro;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #1c202e;
  background-color: transparent;
  border: none;
  width: 100%;
  border-bottom: solid 0.4px rgba(28, 32, 46, 0.64);
  padding: 0.5rem 0;

  :focus {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    opacity: 0.12;
  }
  :-ms-input-placeholder {
    opacity: 0.12;
  }
`;

const Input = ({ children, ...props }) => (
  <StyledInput {...props}>{children}</StyledInput>
);

export default Input;
