import { ThreeDots } from 'react-loader-spinner';
import { Cont } from './Loader.styled';

export const Loader = () => {
  return (
    <Cont>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </Cont>
  );
};

export default Loader;
