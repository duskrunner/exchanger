import { readFileSync } from 'fs';
import path from 'path';
import { act } from '@testing-library/react';

const exchangeRates = JSON.parse(
  readFileSync(path.join(__dirname, 'res.json')).toString()
);

const mock = {
  exchangeRates: jest.fn(() => {
    return {
      then: (callback) =>
        act(() => {
          callback(exchangeRates);
        }),
    };
  }),
};

export const _exchangeRates = exchangeRates;

export default mock;
