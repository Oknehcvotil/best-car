import styled from '@emotion/styled';

export const MainContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;
  max-width: 375px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 30px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
