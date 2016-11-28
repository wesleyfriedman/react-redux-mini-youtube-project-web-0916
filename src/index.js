import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
// import search from './search';
import { Provider } from 'react-redux'
import store from './store';
// import fetchVideos from './actions'

// const renderApp = () => {


  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,

    document.getElementById('root')
  );
// }
