import styled from '@emotion/styled';

export const Tagline = styled.h1`
  line-height: 1.3;
  color: #3b3bea;
  letter-spacing: 0.5em;
  text-align: center;
  opacity: 0;
  font-size: 44px;
  margin-bottom: 40px;
  animation: fadeIn 800ms ease forwards;

  @media (min-width: 768px) {
    margin-bottom: 80px;
  }
`;