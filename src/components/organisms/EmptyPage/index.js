import React from 'react';
import styled from 'styled-components';
import { Title, AuthImage } from 'components';

const StyledSubTitle = styled.p`
  opacity: 0.6;
  font-family: GTWalsheimPro;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: center;
  color: #1c202e;
`;

const EmptyPage = ({ title, text }) => (
  <>
    <AuthImage height={150} />
    <Title center>{title}</Title>
    <StyledSubTitle>{text}</StyledSubTitle>
  </>
);

export default EmptyPage;
