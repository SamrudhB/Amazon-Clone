import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import "./App.css";

import Navbaar from "./Components/header/Navbaar";
import Newnav from "./Components/newnav/Newnav";
import Footer from "./Components/footer/Footer";

import Maincomp from "./Components/home/Maincomp";

import Signup from "./Components/signup_signin/SignUp";
import SignIn from "./Components/signup_signin/SignIn";

import ProductDetails from "./Components/product/ProductDetails";

import CategoryProducts from "./Components/category/CategoryProducts";
import AllProducts from "./Components/category/AllProducts";

import Buynow from "./Components/buynow/Buynow";
import Checkout from "./Components/buynow/Checkout";
import Orders from "./Components/buynow/Orders";
import OrderDetails from "./Components/buynow/OrderDetails";

import AddProduct from "./Components/header/AddProduct";
import AdminPayments from "./Components/buynow/AdminPayments";

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!data) {
    return (
      <div className="circle1">
        <CircularProgress />
        <h2>Loading....</h2>
      </div>
    );
  }

  return (
    <>
      <Navbaar />

      <Newnav />

      <Switch>

        {/* HOME */}
        <Route exact path="/">
          <Maincomp />
        </Route>

        {/* AUTH */}
        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/login">
          <SignIn />
        </Route>

        {/* PRODUCTS */}
        <Route exact path="/products/:id">
          <ProductDetails />
        </Route>

        <Route exact path="/category/:id">
          <CategoryProducts />
        </Route>

        <Route exact path="/all">
          <AllProducts />
        </Route>

        {/* CART */}
        <Route exact path="/buynow">
          <Buynow />
        </Route>

        {/* CHECKOUT */}
        <Route exact path="/checkout">
          <Checkout />
        </Route>

        {/* ORDER LIST PAGE */}
        <Route exact path="/orders">
          <Orders />
        </Route>

        {/* SINGLE ORDER DETAILS PAGE */}
        <Route exact path="/orders/:id">
          <OrderDetails />
        </Route>

        {/* ADMIN */}
        <Route exact path="/admin">
          <AddProduct />
        </Route>

        {/* ADMIN PAYMENTS */}
        <Route exact path="/admin/payments">
          <AdminPayments />
        </Route>

      </Switch>

      <Footer />
    </>
  );
}

export default App;