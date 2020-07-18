import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as shoesActions from '../../redux/actions/shoesActions/shoesActions';
import Grid from '../layout/Grid/Grid';
import Spinner from '../Common/Spinner/Spinner';

class Shoes extends Component {
  componentDidMount() {
    const { shoes, actions } = this.props;
    if (!shoes.length) {
      actions.loadShoes().catch((err) => {
        // eslint-disable-next-line no-alert
        alert(`Loading courses failed ${err}`);
      });
    }
  }

  render() {
    const { loading, shoes } = this.props;
    return (
      <>
        {!shoes.length || loading ? <Spinner /> : <Grid shoes={shoes} />}
      </>
    );
  }
}

Shoes.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Shoes);
