import setWallets from '../../actionCreators/setWallets';

test('setExchangeWallets', () => {
  const action = setWallets([
    {
      currency: 'USD',
      value: 50,
    },
    {
      currency: 'GBP',
      value: 50,
    },
    {
      currency: 'EUR',
      value: 50,
    },
  ]);
  expect(action).toEqual({
    type: 'SET_WALLETS',
    payload: [
      {
        currency: 'USD',
        value: 50,
      },
      {
        currency: 'GBP',
        value: 50,
      },
      {
        currency: 'EUR',
        value: 50,
      },
    ],
  });
});
