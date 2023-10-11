import { AdditionalButton } from 'components/AdditionalButton/AdditionalButton';
import { ButtonWrapper } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ text, disabled, onClick }) => {
  return (
    <ButtonWrapper>
      <AdditionalButton
        type="button"
        text={text}
        disabled={disabled}
        onClick={onClick}
      ></AdditionalButton>
    </ButtonWrapper>
  );
};
