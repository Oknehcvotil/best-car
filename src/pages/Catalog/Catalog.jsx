import { CarsList } from 'components/CarsList/CarsList';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetFilter } from 'redux/filtersSlice';
import { getCarsByPage } from 'redux/operations';
import {
  selectIsLoading,
  selectError,
  selectCars,
  selectFiltredCars,
  selectIsFiltred,
} from 'redux/selectors';

const PAGE = 1;

export const Catalog = () => {
  const [page, setPage] = useState(PAGE);
  const [isLoadingMoreCars, setIsLoadingMoreCars] = useState(true);
  const cars = useSelector(selectCars);
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  const isFiltred = useSelector(selectIsFiltred);
  const filtredCars = useSelector(selectFiltredCars);
  const dispatch = useDispatch();

  const carsToRender = isFiltred ? filtredCars : cars;

  useEffect(() => {
    dispatch(getCarsByPage(page));
    dispatch(resetFilter());
    setIsLoadingMoreCars(true);
  }, [dispatch, page]);

  useEffect(() => {
    if (carsToRender.length === 25) {
      setIsLoadingMoreCars(false);
    }
  }, [carsToRender.length]);

  useEffect(() => {
    const height = 426;
    if (cars.length > 8) {
      window.scrollBy({
        top: height * 1.5,
        behavior: 'smooth',
      });
    }
  }, [cars]);

  const OnPageChange = () => {
    setPage(page => page + 1);
  };

  return (
    <Section>
      <Container>
        <CarsList cars={isFiltred ? filtredCars : cars} />
        {isLoadingMoreCars && !loading && !isFiltred && (
          <LoadMoreBtn text="Load more" onClick={OnPageChange} />
        )}
        {loading && !error && <Loader />}
      </Container>
    </Section>
  );
};
