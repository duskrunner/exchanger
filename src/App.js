import React from 'react';
import '../scss/app.scss';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ExchangeWidget from './pages/ExchangeWidget';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <ExchangeWidget></ExchangeWidget>
      </div>
    </Provider>
  );
};

render(React.createElement(App), document.getElementById('root'));
