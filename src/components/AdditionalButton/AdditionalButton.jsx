import { ButtonStyled } from './AdditionalButton.styled.';

export const AdditionalButton = ({ text, onClick, disabled, type }) => {
  return (
    <ButtonStyled type={type} disabled={disabled} onClick={onClick}>
      {text}
    </ButtonStyled>
  );
};
