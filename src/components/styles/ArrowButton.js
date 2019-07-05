import arrow from '../../assets/arrow.svg';
import styled from 'styled-components';

const ArrowButton = styled.button`
  background: url(${arrow}) no-repeat center;
  height: 16px;
  width: 10px;
  border: none;
  padding: 1.5rem;
  border-radius: 15px;
  background-color: #cfd4e6;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    background-color: #ff3378;
    transition: all 0.3s ease;
  }
`;

export default ArrowButton;
