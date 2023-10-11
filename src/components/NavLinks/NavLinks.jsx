import { Link } from './NavLinks.styled';
import PropTypes from 'prop-types';

export const NavLinks = ({ name, to }) => {
  return <Link to={to}>{name}</Link>;
};

NavLinks.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
