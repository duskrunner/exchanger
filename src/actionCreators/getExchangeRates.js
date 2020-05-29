import axios from 'axios';
import setExchangeRates from './setExchangeRates';

export default function getExchangeRates(currency) {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.exchangeratesapi.io/latest?base=${currency}`
    );
    dispatch(setExchangeRates(response.data.rates));
  };
}
