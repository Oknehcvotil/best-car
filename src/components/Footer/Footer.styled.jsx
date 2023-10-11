import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  background-color: #3a3e3e;
  color: #c8c0c0;
  gap: 5px;
  font-size: 14px;
`;

export const Link = styled.a`
  color: #c8c0c0;
  border-bottom: 1px solid #c8c0c0;
  transition: color 400ms ease-in-out, border-color 400ms ease-in-out;
  font-size: 14px;

  &:hover,
  &:focus {
    color: #3b3bea;
    border-color: #3b3bea;
  }
`;
