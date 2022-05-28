import React, { Fragment } from 'react';

const Overview = () => {
  return (
    <Fragment style={{ display: 'flex' }}>
      <div style={{ width: '55%', margin: 'auto' }}>
        <h1 style={{ margin: '2rem' }}> Overview of Sales Data</h1>
        <div style={{ margin: '3rem' }}>
          <h3>Sales Overview throughout years</h3>
          <img
            src={require('../assets/salesoverview.png')}
            width="90%"
            alt="sales"
          />
        </div>
        <div style={{ margin: '3rem' }}>
          <h3>Sales for each store</h3>
          <img src={require('../assets/tsales.png')} width="90%" alt="sales" />
          <p>Most of the sales are below 2300</p>
        </div>
        <div style={{ margin: '3rem' }}>
          <h3>Sales on Holidays</h3>
          <img
            src={require('../assets/holidaySales.png')}
            width="90%"
            alt="sales"
          />
          <p>There is almost no sale on holidays</p>
        </div>
        <div style={{ margin: '3rem' }}>
          <h3>Sales on Holidays</h3>
          <img
            src={require('../assets/ScHoliday.png')}
            width="90%"
            alt="sales"
          />
        </div>
        <div style={{ margin: '3rem' }}>
          <h3>Sales Vs. Customers</h3>
          <img
            src={require('../assets/salesCustomer.png')}
            width="90%"
            alt="sales"
          />
          <p>
            The number of sales is positvely related to the number of Customers
          </p>
        </div>
        <div style={{ margin: '3rem' }}>
          <h3>Sales Vs. Customers</h3>
          <img
            src={require('../assets/compdist.png')}
            width="90%"
            alt="sales"
          />
          <p>
            The competition distance is negatively correlated to the number of
            sales
          </p>
        </div>
        <div style={{ margin: '3rem' }}>
          <h3>Sales Vs. Customers</h3>
          <img
            src={require('../assets/monthSales.png')}
            width="90%"
            alt="sales"
          />
          <p>
            June has the highest amount of Sales, January has the lowest amount
            of Sales
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Overview;
