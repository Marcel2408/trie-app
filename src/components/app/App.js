/* eslint-disable react/prop-types */
import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

import './App.scss';

const App = ({ children }) => {
  return (
    <div className="app container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default App;
