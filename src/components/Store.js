import React, { useContext } from "react";

// Components
import Product from "./shared/Product";

// Context
import { ProductsContext } from "../context/ProductContextProvider";

// Style
import styles from "./Store.module.css";

const Store = ({ wheelData }) => {
  const products = useContext(ProductsContext);

  console.log("vvv", wheelData);
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (wheelData === undefined || wheelData === null) {
      if (wheelData > 0) {
        document.getElementById(
          "scrollContainerStor"
        ).className = `${styles.scrollContainerStoreDown}`;
      } else if (wheelData < 0) {
        document.getElementById(
          "scrollContainerStor"
        ).className = `${styles.container}`;
      }
    }

    // if (document.documentElement.scrollTop > 50) {
    //   document.getElementById(
    //     "scrollContainer"
    //   ).className = `${styles.displayNone}`;
    // } else {
    //   document.getElementById(
    //     "scrollContainer"
    //   ).className = `${styles.mainContainer}`;
    // }
  }

  return (
    <div id="scrollContainerStor" className={styles.container}>
      {products.map((product) => (
        <Product wheelData={wheelData} key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
