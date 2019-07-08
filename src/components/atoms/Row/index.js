import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  align-items: ${({ center }) => (center ? 'center' : 'initial')};
  flex-wrap: ${({ scrollable }) => (scrollable ? 'nowrap' : '')}
  overflow: ${({ scrollable }) => (scrollable ? 'auto' : '')}
`;

export default Row;
