import { Container, StyledLink } from './NoFavorite.styled';

export const NoFavorite = () => {
  return (
    <Container>
      <p>You haven`t added cars yet.</p>
      <p>
        You can find more cars{' '}
        <StyledLink to="/catalog"> in our catalog</StyledLink>
      </p>
    </Container>
  );
};
