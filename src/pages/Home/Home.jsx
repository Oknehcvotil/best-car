import { Title } from 'components/Title/Title';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { HeroSection } from 'components/HeroSection/HeroSection';

export const Home = () => {
  return (
    <Section>
      <Container>
        <Title>Best Car</Title>
        <HeroSection />
      </Container>
    </Section>
  );
};
