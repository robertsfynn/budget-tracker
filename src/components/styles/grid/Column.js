import styled from 'styled-components';

const Column = styled.div`
  flex: 1;
  flex-basis: ${({ size }) => size || '100%'};
  max-width: ${({ size }) => size || '100%'};
  margin-left: ${({ offset }) => offset};
`;

export default Column;
