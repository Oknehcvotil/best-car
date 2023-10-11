import styled from '@emotion/styled';

export const Cont= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Button = styled.button`
  width: 270px;
  height: 44px;

  border-radius: 12px;
  background-color: #3470ff;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  cursor: pointer;
  transition: background-color 400ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const Description = styled.p`
  margin-bottom: 45px;
  color: #501aa7;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
