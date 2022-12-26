import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BestSellerCardComponent from './components/BestSellerCardComponent/BestSellerCardComponent';
import RibbonComponent from './components/RibbonComponent';
import MattresCardComponent from './components/MattresCardComponent';
import WishListCardComponent from './components/WishLishCardComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <WishListCardComponent /> */}
    {/* <BestSellerCardComponent/> */}
    {/* <RibbonComponent /> */}
    {/* <MattresCardComponent /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
