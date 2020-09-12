import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
