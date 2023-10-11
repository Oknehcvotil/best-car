import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;

  transition: color 400ms ease-in-out;

  &.active,
  &:hover,
  &:focus {
    color: #3b3bea;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
