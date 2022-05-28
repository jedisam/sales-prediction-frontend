import React, { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment style={{ display: 'flex' }}>
      <div style={{ width: '55%', margin: 'auto' }}>
        <h1 style={{ marginTop: '2rem' }}>
          Rossmann Pharmaceutical Sales Prediction
        </h1>
        {/* import sales image from assets folder */}
        <img
          src={require('../assets/salesforecast.jpg')}
          width="90%"
          alt="sales"
        />
      </div>
    </Fragment>
  );
};

export default Home;
