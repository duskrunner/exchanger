import React from 'react';
import { render, cleanup } from '@testing-library/react';
import WalletsSelector from '../components/WalletsSelector';
import { Provider } from 'react-redux';
import store from '../store';

afterEach(cleanup);

test('WalletsSelector', () => {
  const { container } = render(
    <Provider store={store}>
      <WalletsSelector
        currentWallet={0}
        exchangerWallets={[0, 1]}
        wallets={[
          { currency: 'USD', value: 50 },
          { currency: 'GBP', value: 50 },
          { currency: 'EUR', value: 50 },
        ]}
      />
    </Provider>
  );

  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="wallets-selector"
    >
      <button
        class="wallets-selector__button wallets-selector__button_selected "
        disabled=""
      >
        USD
      </button>
      <button
        class="wallets-selector__button  wallets-selector__button_other"
        disabled=""
      >
        GBP
      </button>
      <button
        class="wallets-selector__button  "
      >
        EUR
      </button>
    </div>
  `);
});
