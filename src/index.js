import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import '../src/styles/reset.css';
import '../src/styles/root.css';
import Banner from './components/Banner';
import "./styles/Banner.css";
import Product from './components/Product';
import "./styles/Product.css";
import Price from './components/Price';
import "./styles/Price.css";
import Add from './components/Add';
import "./styles/Add.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner />
    <Product />
    <Price />
    <Add />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
