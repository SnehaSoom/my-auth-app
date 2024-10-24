import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
 <div className="home-container">
      <Header />
      <div className="animation-container">
        {/* Add animation here */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;