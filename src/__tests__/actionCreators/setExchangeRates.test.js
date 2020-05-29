import setExchangeRates from '../../actionCreators/setExchangeRates';
import { _exchangeRates } from '../../../__mocks__/axios/exchangeRates';

test('setExchangeRates', () => {
  const action = setExchangeRates(_exchangeRates.rates);
  expect(action).toEqual({
    type: 'SET_EXCHANGE_RATES',
    payload: _exchangeRates.rates,
  });
});
