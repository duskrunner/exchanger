import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import setExchangeWallets from '../actionCreators/setExchangerWallets';

const WalletsSelector = ({
  wallets,
  currentWallet,
  setNewExchangeWallets,
  exchangerWallets,
  setExchangeOperation,
  setAmountToExchange,
}) => {
  const currentWalletIndex = exchangerWallets[currentWallet];
  const otherSelectedWalletIndex = exchangerWallets[1 - currentWallet];

  const onClickWalletSelector = useCallback(
    (index) => {
      return (event) => {
        event.stopPropagation();
        const newExchangerWallets = [...exchangerWallets];
        newExchangerWallets[currentWallet] = index;
        setNewExchangeWallets(newExchangerWallets);
        setExchangeOperation({
          from: index,
          to: otherSelectedWalletIndex,
        });
        setAmountToExchange(0);
      };
    },
    [
      currentWallet,
      exchangerWallets,
      setNewExchangeWallets,
      setExchangeOperation,
      otherSelectedWalletIndex,
      setAmountToExchange,
    ]
  );

  return (
    <div className="wallets-selector">
      {wallets.map((wallet, index) => {
        return (
          <button
            className={`wallets-selector__button ${
              currentWalletIndex === index
                ? 'wallets-selector__button_selected'
                : ''
            } ${
              otherSelectedWalletIndex === index
                ? 'wallets-selector__button_other'
                : ''
            }`}
            disabled={
              currentWalletIndex === index || otherSelectedWalletIndex === index
            }
            key={wallet.currency}
            onClick={onClickWalletSelector(index)}
          >
            {wallet.currency}
          </button>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ exchangerWallets, wallets }) => ({
  exchangerWallets,
  wallets,
});

const mapDispatchToProps = (dispatch) => ({
  setNewExchangeWallets: (data) => {
    dispatch(setExchangeWallets(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletsSelector);
