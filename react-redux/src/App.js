import React from 'react';
import logo from './logo.svg';

import Header from './components/Header'
import Home from './components/Home';
import Breweries from './components/Breweries';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Breweries />
      <Footer />
    </div>
  );
}

export default App;
