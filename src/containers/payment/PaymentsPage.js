import React from 'react';
import propTypes from 'prop-types';
import Button from '../../components/Common/Button/Button';
import MyShoeCard from '../../components/MyShoeCard/MyShoeCard';
import NoResultsFound from '../../components/Common/NoResultsFound/NoResultsFound';
import './PaymentsPage.css';
import CreditCard from '../../components/CreditCard/CreditCard';

const PaymentsPage = ({ shoe, addToMyShoes }) => {
  const styles = {
    padding: '1rem 3rem'
  };

  return (
    <>
      {shoe.id
        ? (
          <div className="PaymentsPage">
            <h2>Make Payments</h2>
            <div>
              <MyShoeCard
                key={shoe.id}
                image={shoe.image}
                title={shoe.title}
                color={shoe.color}
                seller={shoe.seller}
                price={shoe.price}
              />
              <CreditCard />
              <Button name={`${shoe.id}`} link="/myshoes" clickHandler={() => addToMyShoes(shoe)} styles={styles} text="Pay" />
            </div>
          </div>
        )
        : <NoResultsFound message="Nothing To Buy" />}
    </>
  );
};

PaymentsPage.propTypes = {
  shoe: propTypes.instanceOf(Object).isRequired,
  addToMyShoes: propTypes.func.isRequired
};

export default PaymentsPage;
