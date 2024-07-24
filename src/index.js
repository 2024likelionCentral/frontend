import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/scss/style.scss';
import Header from './components/goal/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <App />
  </>
);
