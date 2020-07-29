import React, { Component } from 'react';
import './CreditCard.css';

class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      name: '',
      month: '',
      year: '',
      cvv: ''
    };
  }

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState, [name]: value
    }));
  }

  render() {
    const {
      number, name, cvv, month, year
    } = this.state;
    const expiry = month.length === 2 ? `${month}/${year}` : month;
    return (
      <div className="CreditCard">
        <div className="credit-card">
          <div className="credit-card__logo">
            <img className="logo" alt="logo" src="http://localhost:3001/assets/images/visa.png" width="60" />
          </div>

          <div className="credit-card__number">{number}</div>

          <div className="credit-card__info">
            <div className="credit-card__info_name">
              <div className="credit-card__info_label">{'CARDHOLDER\'S NAME'}</div>
              <div>{name}</div>
            </div>

            <div className="credit-card__info_cvv">
              <div className="credit-card__info_label">CVV</div>
              <div>{cvv}</div>
            </div>

            <div className="credit-card__info_expiry">
              <div className="credit-card__info_label">EXPIRY</div>
              <div>{expiry}</div>
            </div>
          </div>
        </div>
        <div className="Form">
          <div className="CardInfo">
            <span>{'CARDHOLDER\'S NAME'}</span>
            <input maxLength="20" onChange={this.onChangeHandler} type="text" name="name" />
            <span>CARD NUMBER</span>
            <input maxLength="16" onChange={this.onChangeHandler} type="text" name="number" />
            <div className="CVV_Expiry">
              <div className="CVV">
                <span>CVV</span>
                <input maxLength="3" onChange={this.onChangeHandler} type="text" name="cvv" />
              </div>
              <div className="Expiry">
                <span className="Span">EXPIRY</span>
                <div>
                  <input maxLength="2" onChange={this.onChangeHandler} type="text" name="month" />
                  /
                  <input maxLength="2" onChange={this.onChangeHandler} type="text" name="year" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreditCard;
