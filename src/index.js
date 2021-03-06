import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import "swiper/css/swiper.min.css"
import "swiper/js/swiper.min.js"


import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.min.js"




import { createStore, applyMiddleware , compose } from "redux";
import thunk from "redux-thunk"; 
import { Provider } from "react-redux";
import rootReducers from "./redux/reducer";
import "react-items-carousel/dist/react-items-carousel.js"



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")


);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();