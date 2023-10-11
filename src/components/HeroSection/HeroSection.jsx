import { useNavigate } from 'react-router-dom';
import { Button, Description, Cont } from './HeroSection.styled';

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/catalog');
  };
  return (
    <Cont>
      <Description>Car rent in Ukraine</Description>
      <Button onClick={handleStart}>Rent now</Button>
    </Cont>
  );
};
