import { combineReducers } from 'redux';
import exchangeRates from './exchangeRates';
import wallets from './wallets';
import exchangerWallets from './exchangerWallets';

export default combineReducers({
  exchangeRates,
  wallets,
  exchangerWallets,
});
