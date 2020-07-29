import React from 'react';
import propTypes from 'prop-types';
import MyShoeCard from '../../components/MyShoeCard/MyShoeCard';
import './MyShoesPage.css';
import NoResultsFound from '../../components/Common/NoResultsFound/NoResultsFound';

const MyShoesPage = ({ myShoes }) => {
  const shoes = myShoes.map((s) => (
    <MyShoeCard
      key={s.id}
      image={s.image}
      title={s.title}
      color={s.color}
      seller={s.seller}
      price={s.price}
    />
  ));
  return (
    <>
      {myShoes.length
        ? (
          <div className="MyShoesPage">
            <h2>My Shoes</h2>
            <div>
              {shoes}
            </div>
          </div>
        )
        : <NoResultsFound message="Nothing To Show" />}
    </>
  );
};

MyShoesPage.propTypes = {
  myShoes: propTypes.instanceOf(Array).isRequired
};

export default MyShoesPage;
