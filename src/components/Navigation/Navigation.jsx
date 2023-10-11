import { NavLinks } from 'components/NavLinks/NavLinks';
import { NavList } from './Navigation.styled';

export const Navigation = () => {
  const linksData = [
    { to: '/catalog', name: 'Catalog' },
    { to: '/favorite', name: 'Favorite' },
  ];

  return (
    <nav>
      <NavList>
        {linksData.map(({ to, name }, index) => {
          return (
            <li key={index}>
              <NavLinks name={name} to={to} />
            </li>
          );
        })}
      </NavList>
    </nav>
  );
};
