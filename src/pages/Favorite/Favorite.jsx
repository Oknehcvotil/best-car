import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from 'redux/operations';
import { resetFilter } from 'redux/filtersSlice';
import { selectFavoriteCars } from 'redux/selectors';
import { CarsList } from 'components/CarsList/CarsList';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { NoFavorite } from 'components/NoFavorite/NoFavorite';
import { selectIsLoading, selectError } from 'redux/selectors';
import Loader from 'components/Loader/Loader';

export const Favorite = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoriteCars);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllCars());
    dispatch(resetFilter());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        {favorites.length === 0 ? (
          <NoFavorite />
        ) : (
          <CarsList cars={favorites} />
        )}
        {loading && !error && <Loader />}
      </Container>
    </Section>
  );
};
