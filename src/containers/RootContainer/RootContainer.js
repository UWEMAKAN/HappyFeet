/* eslint-disable import/no-named-as-default */
import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Spinner from '../../components/Common/Spinner/Spinner';
import HomePage from '../home/HomePage';
import MyShoesPage from '../myshoes/MyShoesPage';
import PageNotFound from '../../components/PageNotFound/PageNotFound';
import PaymentsPage from '../payment/PaymentsPage';
import { getShoes } from '../../api/shoesApi';

export const buyShoeHandler = (shoes, setShoe) => (id) => {
  const shoetoBuy = shoes.filter((s) => s.id === id)[0];
  setShoe(shoetoBuy);
};

export const myShoesHandler = (myShoes, setMyShoes, setShoe) => (myShoe) => {
  setMyShoes([...myShoes, myShoe]);
  setShoe({});
};

const RootContainer = () => {
  const [shoes, setShoes] = useState([]);
  const [shoe, setShoe] = useState({});
  const [myShoes, setMyShoes] = useState([]);

  useEffect(() => {
    if (!shoes.length) {
      getShoes()
        .then((fetchedShoes) => {
          setImmediate(() => setShoes(fetchedShoes));
          // setShoes(fetchedShoes);
        })
        .catch((err) => {
          // eslint-disable-next-line no-alert
          alert(`Loading shoes failed ${err}`);
        });
    }
  }, []);

  const buyShoe = buyShoeHandler(shoes, setShoe);
  const addToMyShoes = myShoesHandler(myShoes, setMyShoes, setShoe);

  return !shoes.length ? (
    <Spinner />
  ) : (
    <Switch>
      <Route exact path="/" component={() => (<HomePage shoes={shoes} buyShoe={buyShoe} />)} />
      <Route exact path="/shoes">
        <Redirect to="/" />
      </Route>
      <Route path="/myshoes" component={() => (<MyShoesPage myShoes={myShoes} />)} />
      <Route path="/payments" component={() => (<PaymentsPage shoe={shoe} addToMyShoes={addToMyShoes} />)} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default RootContainer;
