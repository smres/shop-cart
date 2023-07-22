import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { CartContext } from "../../context/CartContextProvider";

// Icons
import shopIcon from "../../assets/icons/shop.svg";

// Style
import styles from "./Navbar.module.css";

const Navbar = ({ wheelData }) => {
  if (wheelData > 0) {
    document.getElementById(
      "scrollContainerNav"
    ).className = `${styles.displayNone}`;
  } else if (wheelData < 0) {
    document.getElementById(
      "scrollContainerNav"
    ).className = `${styles.mainContainer}`;
  }
  const { state } = useContext(CartContext);

  return (
    <div id="scrollContainerNav" className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/products">
          Products
        </Link>
        <div className={styles.iconContainer}>
          <Link to="/cart">
            <img src={shopIcon} />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
