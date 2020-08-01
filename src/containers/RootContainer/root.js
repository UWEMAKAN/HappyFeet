/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as shoesActions from '../../redux/actions/shoesActions/shoesActions';
import Spinner from '../../components/Common/Spinner/Spinner';
import HomePage from '../home/HomePage';
import MyShoesPage from '../myshoes/MyShoesPage';
import PageNotFound from '../../components/PageNotFound/PageNotFound';
import PaymentsPage from '../payment/PaymentsPage';

export class RootContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      shoe: {},
      myShoes: []
    };
  }

  componentDidMount() {
    const { shoes, actions } = this.props;
    if (!shoes.length) {
      actions.loadShoes()
        .then(() => {
          this.setState((prevState) => ({
            // eslint-disable-next-line react/destructuring-assignment
            ...prevState, shoes: this.props.shoes
          }));
        })
        .catch((err) => {
          // eslint-disable-next-line no-alert
          alert(`Loading shoes failed ${err}`);
        });
    }
  }

  buyShoe = (id) => {
    const { shoes } = this.state;
    const shoe = shoes.filter((s) => s.id === id)[0];
    this.setState((prevState) => ({
      ...prevState, shoe
    }));
  }

  addToMyShoes = (shoe) => {
    this.setState((prevState) => ({
      ...prevState,
      myShoes: [...prevState.myShoes, shoe],
      shoe: {}
    }));
  }

  render() {
    const { shoes, shoe, myShoes } = this.state;
    const { loading } = this.props;
    return !shoes.length || loading ? (
      <Spinner />
    ) : (
      <Switch>
        <Route exact path="/" component={() => (<HomePage shoes={shoes} buyShoe={this.buyShoe} />)} />
        <Route exact path="/shoes">
          <Redirect to="/" />
        </Route>
        <Route path="/myshoes" component={() => (<MyShoesPage myShoes={myShoes} />)} />
        <Route path="/payments" component={() => (<PaymentsPage shoe={shoe} addToMyShoes={this.addToMyShoes} />)} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}

RootContainer.propTypes = {
  shoes: propTypes.instanceOf(Array).isRequired,
  actions: propTypes.instanceOf(Object).isRequired,
  loading: propTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  shoes: state.shoes,
  loading: state.apiCallsInprogress > 0
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    loadShoes: bindActionCreators(shoesActions.loadShoes, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
