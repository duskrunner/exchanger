import setExchangerWallets from '../../actionCreators/setExchangerWallets';

test('setExchangeWallets', () => {
  const action = setExchangerWallets([0, 1]);
  expect(action).toEqual({ type: 'SET_EXCHANGER_WALLETS', payload: [0, 1] });
});
