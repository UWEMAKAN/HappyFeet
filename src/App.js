import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './containers/home/HomePage';
import MyShoesPage from './containers/myshoes/MyShoesPage';
import PageNotFound from './components/PageNotFound';
import PaymentsPage from './containers/payment/PaymentsPage';
import './App.css';

const App = () => (
  <div className="container">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shoes">
        <Redirect to="/" />
      </Route>
      <Route path="/myshoes" component={MyShoesPage} />
      <Route path="/payments" component={PaymentsPage} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default App;
