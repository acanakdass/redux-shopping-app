import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/root/App.jsx';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './redux/reducers/index'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'alertifyjs/build/css/alertify.min.css'
import { BrowserRouter } from 'react-router-dom'


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(



  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>

        <App />

      </Provider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
