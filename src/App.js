import "./App.css";
import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  const [wheelDataState, setWheelDataState] = useState(0);
  const handleOnWheel = (e) => {
    setWheelDataState(e.deltaY);
    console.log("onWheel: scrolling the list...", e.deltaY);
    if (e.deltaY > 0) {
      console.log("scrolling down");
    } else if (e.deltaY < 0) {
      console.log("scrolling up");
    }
  };
  return (
    <div onWheel={handleOnWheel}>
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar wheelData={wheelDataState} />
          <Switch>
            <Route
              path="/products/:id"
              render={(props) => (
                <ProductDetails wheelData={wheelDataState} {...props} />
              )}
            />
            <Route
              path="/products"
              render={(props) => (
                <Store wheelData={wheelDataState} {...props} />
              )}
            />
            <Route path="/cart" component={ShopCart} />
            <Redirect to="/products" />
          </Switch>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
