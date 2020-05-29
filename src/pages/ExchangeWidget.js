import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import ExhchageRateComponent from '../components/ExchangeRate';
import Wallet from '../components/Wallet';
import getExchangeRates from '../actionCreators/getExchangeRates';
import setWallets from '../actionCreators/setWallets';

const ExchangeWidget = ({
  exchangerWallets,
  wallets,
  getData,
  exchangeRates,
  updateWallets,
}) => {
  const [amountToExchange, setAmountToExchange] = useState(0);
  const [willExchangeTo, setWillExchangeTo] = useState(0);
  const [exchangeOperation, setExchangeOperation] = useState({
    from: exchangerWallets[0],
    to: exchangerWallets[1],
  });
  const fromCurrency = wallets[exchangeOperation.from].currency;
  const toCurrency = wallets[exchangeOperation.to].currency;

  useEffect(() => {
    getData(fromCurrency);
    const intervalId = setInterval(() => {
      getData(fromCurrency);
    }, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, [getData, fromCurrency]);

  const calculateExchange = useCallback(
    (value) => {
      setAmountToExchange(value);
      setWillExchangeTo(
        parseFloat(value * exchangeRates[toCurrency]).toFixed(2)
      );
    },
    [exchangeRates, toCurrency]
  );

  const swapExchangeOperation = () => {
    const newExchangeOperation = {
      from: exchangeOperation.to,
      to: exchangeOperation.from,
    };
    setAmountToExchange(0);
    setWillExchangeTo(0);
    setExchangeOperation(newExchangeOperation);
  };

  const onClickExchange = useCallback(() => {
    const newWallets = [...wallets];
    newWallets[exchangeOperation.from].value = +parseFloat(
      wallets[exchangeOperation.from].value - +amountToExchange
    ).toFixed(2);
    newWallets[exchangeOperation.to].value = +parseFloat(
      wallets[exchangeOperation.to].value + +willExchangeTo
    ).toFixed(2);
    setAmountToExchange(0);
    setWillExchangeTo(0);

    updateWallets(newWallets);
  }, [
    amountToExchange,
    wallets,
    exchangeOperation,
    willExchangeTo,
    updateWallets,
  ]);

  return (
    <>
      <div className="exchange-widget__top-row">
        <button
          className="button"
          onClick={() => {
            calculateExchange(0);
          }}
        >
          Cancel
        </button>
        <ExhchageRateComponent
          exchangeRates={exchangeRates}
          exchangeFrom={fromCurrency}
          exchangeTo={toCurrency}
        ></ExhchageRateComponent>
        <button onClick={onClickExchange} className="button">
          Exchange
        </button>
      </div>
      {exchangerWallets.map((wallet, index) => {
        const isActive = exchangeOperation.from === wallet;
        return (
          <Wallet
            currentWallet={index}
            wallet={wallet}
            isActive={isActive}
            key={wallet}
            currency={wallets[wallet].currency}
            availableAmount={wallets[wallet].value}
            amountToExchange={isActive ? amountToExchange : willExchangeTo}
            setAmountToExchange={calculateExchange}
            swapExchangeOperation={swapExchangeOperation}
            setExchangeOperation={setExchangeOperation}
          ></Wallet>
        );
      })}
    </>
  );
};

const mapStateToProps = ({ exchangeRates, wallets, exchangerWallets }) => {
  return { exchangeRates, exchangerWallets, wallets };
};

const mapDispatchToProps = (dispatch) => ({
  getData: (currency) => dispatch(getExchangeRates(currency)),
  updateWallets: (data) => dispatch(setWallets(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeWidget);
