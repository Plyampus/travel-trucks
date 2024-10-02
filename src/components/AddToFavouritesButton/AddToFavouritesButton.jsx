import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './AddToFavouritesButton.module.css';
import {
  addToFavourites,
  removeFromFavourites,
  selectIsInFavourites,
} from '../../redux/favouritesSlice';

export default function AddToFavouritesButton({ itemId }) {
  const dispatch = useDispatch();

  const isInFavourites = useSelector(state =>
    selectIsInFavourites(state, itemId)
  );

  const handleClick = () => {
    if (isInFavourites) {
      dispatch(removeFromFavourites(itemId));
    } else {
      dispatch(addToFavourites(itemId));
    }
  };

  return (
    <button onClick={handleClick} className={styles.addToFavourites}>
      <svg width={24} height={23}>
        {isInFavourites ? (
          <use xlinkHref="/sprite.svg#heart-pressed"></use>
        ) : (
          <use xlinkHref="/sprite.svg#heart"></use>
        )}
      </svg>
    </button>
  );
}

AddToFavouritesButton.propTypes = {
  itemId: PropTypes.string.isRequired,
};
