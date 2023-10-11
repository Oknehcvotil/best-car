import { Container } from 'components/Container/Container';
import { HeadWrapper, HeaderCont, Logo } from './Header.styled';
import { Navigation } from 'components/Navigation/Navigation';

export const Header = () => {
  return (
    <HeadWrapper>
      <Container>
        <HeaderCont>
          <Logo to="/">
            Best<span>Car</span>
          </Logo>
          <Navigation />
        </HeaderCont>
      </Container>
    </HeadWrapper>
  );
};
