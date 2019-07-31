import styled from 'styled-components';

const Column = styled.div`
  flex: 1;
  flex-basis: ${({ size }) => size || ''};
  max-width: ${({ size }) => size || ''};
  margin-left: ${({ offset }) => offset};
  margin-right: ${({ marginRight }) => marginRight}rem;

  @media (min-width: 768px) {
    flex-basis: ${({ md }) => md || ''};
    max-width: ${({ md }) => md || ''};
  }
`;

export default Column;
