import PropTypes from "prop-types";
import Features from "../Features/Features";
import styles from "./ProductDetails.module.css";

export default function ProductDetails({ product }) {
  const specsList = ["form", "length", "width", "height", "tank", "consumption"];

  const specs = specsList.map((specName) => {
    const specValue = product[specName];

    const formattedValue =
      typeof specValue === "string"
        ? specValue.charAt(0).toUpperCase() + specValue.slice(1)
        : "N/A";

    return (
      <li key={specName} className={styles.spec}>
        <span>{specName.charAt(0).toUpperCase() + specName.slice(1)}</span>{" "}
        <span>{formattedValue}</span>
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <Features item={product} />
      {specs.length > 0 && (
        <div>
          <h2 className={styles.heading}>Vehicle details</h2>
          <ul className={styles.specsList}>{specs}</ul>
        </div>
      )}
    </div>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    form: PropTypes.string,
    length: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    tank: PropTypes.string,
    consumption: PropTypes.string,
  }).isRequired, 
};
