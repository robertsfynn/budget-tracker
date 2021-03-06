import styled from 'styled-components';

const Column = styled.div`
  flex: 1;
  flex-basis: ${({ size }) => size || ''};
  max-width: ${({ size }) => size || ''};
  margin-left: ${({ offset }) => offset};

  @media (min-width: 330px) {
    margin-right: ${({ marginRight }) => marginRight || 0}rem;
  }

  @media (min-width: 768px) {
    flex-basis: ${({ md }) => md || ''};
    max-width: ${({ md }) => md || ''};
  }
`;

export default Column;
