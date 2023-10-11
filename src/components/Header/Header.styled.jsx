import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeadWrapper = styled.header`
  padding: 20px 0;
  background-color: #3a3e3e;
`;

export const HeaderCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  color: #fff;
  font-size: 18px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  span {
    color: #3b3bea;
  }
`;
