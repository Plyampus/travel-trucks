import PropTypes from "prop-types";
import styles from "./Image.module.css";

export default function Image({ image }) {
  return (
    <div className={styles.image}>
      <img src={image.thumb} alt={image.alt || "Image"} /> {}
    </div>
  );
}

Image.propTypes = {
  image: PropTypes.shape({
    thumb: PropTypes.string.isRequired, 
    alt: PropTypes.string, 
  }).isRequired, 
};
