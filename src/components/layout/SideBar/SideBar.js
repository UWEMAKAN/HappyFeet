import React from 'react';
import propTypes from 'prop-types';
import Filters from '../../Filters/Filters';
import './SideBar.css';

const SideBar = ({ selectHandler, searchHandler, checkedHandler }) => (
  <div className="SideBar">
    <Filters
      selectHandler={selectHandler}
      searchHandler={searchHandler}
      checkedHandler={checkedHandler}
    />
  </div>
);

SideBar.propTypes = {
  selectHandler: propTypes.func.isRequired,
  searchHandler: propTypes.func.isRequired,
  checkedHandler: propTypes.func.isRequired
};

export default SideBar;
