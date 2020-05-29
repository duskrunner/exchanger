import React, { useCallback } from 'react';
import WalletsSelector from './WalletsSelector';

const validateInput = (value, availableAmount) => {
  const regExp = /^\d*.\d{0,2}/;
  value =
    parseFloat(value) > parseFloat(availableAmount)
      ? `${availableAmount}`
      : value;
  let checkResult = regExp.exec(value);
  if (checkResult !== null) {
    return Math.abs(checkResult[0]);
  } else {
    return '';
  }
};

const Wallet = ({
  currentWallet,
  currency,
  amountToExchange,
  availableAmount,
  setAmountToExchange,
  isActive,
  swapExchangeOperation,
  setExchangeOperation,
}) => {
  const formater = useCallback(
    (value) => {
      return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency,
      }).format(value);
    },
    [currency]
  );
  const onChangeInput = useCallback(
    (event) => {
      const validInput = validateInput(event.target.value, availableAmount);
      setAmountToExchange(validInput);
    },
    [setAmountToExchange, availableAmount]
  );

  const onClickWallet = () => {
    if (isActive) return;
    swapExchangeOperation();
  };

  return (
    //eslint-disable-next-line
    <div
      className={`wallet ${isActive ? '' : 'wallet_inactive'}`}
      onClick={onClickWallet}
    >
      <div className="wallet__balance-section">
        <div className="wallet__balance">
          <div className="wallet__balance__currency">{currency}</div>
          <div className="wallet__balance__balance">
            You have {formater(availableAmount)}
          </div>
        </div>
        <div className="wallet__input-area">
          <span>{isActive ? '-' : '+'}</span>
          <input
            className="wallet__input-area__input"
            min={0}
            type="number"
            value={amountToExchange}
            onChange={onChangeInput}
            readOnly={!isActive}
          ></input>
        </div>
      </div>
      <div>
        <WalletsSelector
          currentWallet={currentWallet}
          setExchangeOperation={setExchangeOperation}
          setAmountToExchange={setAmountToExchange}
        ></WalletsSelector>
      </div>
    </div>
  );
};

export default Wallet;
