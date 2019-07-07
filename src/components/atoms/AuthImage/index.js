import styled from 'styled-components';
import img from 'assets/illustriations/auth.svg';

const AuthImage = styled.div`
  background: url(${img}) no-repeat center;
  width: 100%;
  height: ${(props) => props.height || '164'}px;
  background-size: ${(props) => props.height - 40 || ''}px;
  margin-bottom: 2rem;
`;

export default AuthImage;
