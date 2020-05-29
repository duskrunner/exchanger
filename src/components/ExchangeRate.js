import React from 'react';

const ExchangeRate = ({ exchangeRates, exchangeFrom, exchangeTo }) => {
  return (
    <div className="exchange-rate">
      {exchangeRates[exchangeTo] ? (
        <p>
          {new Intl.NumberFormat('eu-GB', {
            style: 'currency',
            currency: exchangeFrom,
          }).format(1)}{' '}
          ={' '}
          {new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: exchangeTo,
            minimumFractionDigits: 4,
          }).format(exchangeRates[exchangeTo])}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ExchangeRate;
