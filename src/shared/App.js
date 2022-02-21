import './App.css';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import {Route} from "react-router-dom"
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

import Login from '../pages/Login';
import Main from '../pages/Main';
import ProductDetail from '../pages/ProductDetail';
import Header from "../components/Header";
import Footer from '../components/Footer';
import CartList from '../pages/CartList';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user'

function App() {
  const dispatch = useDispatch();

  const is_session = localStorage.getItem('token');

  useEffect(() =>{
    if(is_session) {
      dispatch(userActions.loginCheckDB());
    }
  }, [])

  return (
    <>
      <Header />
      <ConnectedRouter  history={history}>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path='/product/:id' exact component={ProductDetail} />
        <Route path='/cart/:username' exact component={CartList} />
      </ConnectedRouter>
      <Footer/>
    </>
  );
}

export default App;
