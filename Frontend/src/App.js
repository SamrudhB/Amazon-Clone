import Navbaar from './Components/header/Navbaar';
import Newnav from './Components/newnav/Newnav';
import Maincomp from './Components/home/Maincomp';
import Footer from './Components/footer/Footer';
import Signup from './Components/signup_signin/SignUp';
import SignIn from './Components/signup_signin/SignIn';
import ProductDetails from "./Components/product/ProductDetails";
import Buynow from './Components/buynow/Buynow';
import './App.css';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Switch, Route } from "react-router-dom";
import CategoryProducts from './Components/category/CategoryProducts';
import Orders from './Components/buynow/Orders';
import AddProduct from './Components/header/AddProduct';


function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, [])


  return (
    <>
      {
        data ? (
          <>
            <Navbaar />
            <Newnav />
            <Switch>
              <Route exact path="/">
                <Maincomp />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/login">
                <SignIn />
              </Route>
              <Route exact path="/admin">
                <AddProduct />
              </Route>
              <Route exact path="/buynow">
                <Buynow />
              </Route>
              <Route path="/orders">
                <Orders />
              </Route>
              <Route exact path="/products/:id">
                <ProductDetails />
              </Route>
              <Route exact path="/category/:id">
                <CategoryProducts />
              </Route>
              <Route exact path="/all">
                <CategoryProducts />
              </Route>
            </Switch>
            <Footer />
          </>
        ) : (
          <div className="circle">
            <CircularProgress />
            <h2> Loading....</h2>
          </div>
        )
      }

    </>
  );
}

export default App;
