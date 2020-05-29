import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Wallet from '../components/Wallet';
import { Provider } from 'react-redux';
import store from '../store';

afterEach(cleanup);

test('Wallet', () => {
  const { container } = render(
    <Provider store={store}>
      <Wallet
        currentWallet={0}
        wallet={0}
        isActive={true}
        currency={'USD'}
        availableAmount={50}
        amountToExchange={0}
      />
    </Provider>
  );

  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="wallet "
    >
      <div
        class="wallet__balance-section"
      >
        <div
          class="wallet__balance"
        >
          <div
            class="wallet__balance__currency"
          >
            USD
          </div>
          <div
            class="wallet__balance__balance"
          >
            You have 
            US$50.00
          </div>
        </div>
        <div
          class="wallet__input-area"
        >
          <span>
            -
          </span>
          <input
            class="wallet__input-area__input"
            min="0"
            type="number"
            value="0"
          />
        </div>
      </div>
      <div>
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
      </div>
    </div>
  `);
});
