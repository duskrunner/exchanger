import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { _exchangeRates } from '../../__mocks__/axios/exchangeRates';
import ExchangeRate from '../components/ExchangeRate';

afterEach(cleanup);

test('ExchangeRate', () => {
  const { container } = render(
    <ExchangeRate
      exchangeRates={_exchangeRates.rates}
      exchangeFrom="USD"
      exchangeTo="GBP"
    />
  );

  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="exchange-rate"
    >
      <p>
        1,00 US$
         
        =
         
        £0.8973
      </p>
    </div>
  `);
});
