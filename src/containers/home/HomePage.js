import React from 'react';
import Shoes from '../../components/Shoes/Shoes';
import SideBar from '../../components/layout/SideBar/SideBar';
import './HomePage.css';

const HomePage = () => (
  <div className="HomePage">
    <SideBar />
    <Shoes />
  </div>
);

export default HomePage;
