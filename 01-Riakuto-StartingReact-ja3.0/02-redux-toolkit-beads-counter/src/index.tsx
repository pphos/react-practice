import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { counterSlice } from './features/counter';
import './index.css';
import App from './App';

const store = configureStore({ reducer: counterSlice.reducer })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);