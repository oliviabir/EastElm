import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticate } from './store/session';
import { viewProducts } from './store/products';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import OrderHistory from './components/OrderHistory'
import Reviews from './components/Reviews';
import Chairs from './components/Chairs';
import Sofas from './components/Sofas';
import Tables from './components/Tables';
import Home from './components/Home';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewProducts());
  }, [dispatch]);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <Home />
        </ProtectedRoute>
        <Route path='/products' exact={true} >
          <Products />
        </Route>
        <Route path='/products/:id' exact={true} >
          <SingleProduct />
        </Route>
        <Route path='/cart' exact={true} >
          <Cart />
        </Route>
        <Route path='/orders' exact={true} >
          <OrderHistory />
        </Route>
        <Route path='/reviews' exact={true} >
          <Reviews />
        </Route>
        <Route path='/chairs' exact={true} >
          <Chairs />
        </Route>
        <Route path='/sofas' exact={true} >
          <Sofas />
        </Route>
        <Route path='/tables' exact={true} >
          <Tables />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
