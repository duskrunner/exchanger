import createReducer from './helpers/createReducer';

export default createReducer('SET_WALLETS', [
  { currency: 'USD', value: 50 },
  { currency: 'GBP', value: 50 },
  { currency: 'EUR', value: 50 },
]);
