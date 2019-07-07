import styled from 'styled-components';

const Column = styled.div`
  flex: 1;
  flex-basis: ${({ size }) => size || ''};
  max-width: ${({ size }) => size || ''};
  margin-left: ${({ offset }) => offset};
`;

export default Column;
