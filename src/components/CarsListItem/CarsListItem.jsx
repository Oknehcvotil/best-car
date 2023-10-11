import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { addFavorite, deleteFavorite } from 'redux/favoriteSlice';
import { Modal } from '../Modal/Modal';
import { ReactComponent as FavoriteIcon } from '../../img/icons/favorite.svg';
import { ReactComponent as FavoriteActiveIcon } from '../../img/icons/favorite-active.svg';
import {
  Button,
  Image,
  Title,
  Item,
  Span,
  TitleWrap,
  DetailsItem,
  DetailsList,
  InfoWrap,
  iconStyles,
} from './CarsListItem.styled';

import noImg from '../../img/no-image.jpg';

export const CarsListItem = ({
  id,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  accessories,
  mileage,
  img,
}) => {
  const favorites = useSelector(selectFavorites);
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => setIsShowModal(prev => !prev);

  const handleAddFavorites = favId => {
    dispatch(addFavorite(favId));
  };

  const handleRemoveFavorites = favId => {
    dispatch(deleteFavorite(favId));
  };

  return (
    <>
      <Item>
        <InfoWrap>
          {favorites.includes(id) ? (
            <FavoriteActiveIcon
              width="18"
              height="18"
              style={iconStyles}
              onClick={() => handleRemoveFavorites(id)}
            />
          ) : (
            <FavoriteIcon
              width="18"
              height="18"
              style={iconStyles}
              onClick={() => handleAddFavorites(id)}
            />
          )}
          <Image
            src={img ? img : noImg}
            alt={make}
            loading="lazy"
            width="274"
          />
          <TitleWrap>
            <Title>
              {make} <Span>{model}, </Span>
              {year}
            </Title>
            <p>{rentalPrice}</p>
          </TitleWrap>
          <DetailsList>
            <DetailsItem>{address.split(',')[1]}</DetailsItem>
            <DetailsItem>{address.split(',')[2]}</DetailsItem>
            <DetailsItem>{rentalCompany}</DetailsItem>
          </DetailsList>
          <DetailsList>
            <DetailsItem>{type}</DetailsItem>
            <DetailsItem>{model}</DetailsItem>
            <DetailsItem>{mileage}</DetailsItem>
            <DetailsItem>{accessories[0]}</DetailsItem>
          </DetailsList>
        </InfoWrap>
        <Button type="button" onClick={toggleModal}>
          Learn more
        </Button>
      </Item>
      {isShowModal && (
        <Modal onClose={toggleModal} carId={id}>
          <img alt={make} src={img} />
        </Modal>
      )}
    </>
  );
};
