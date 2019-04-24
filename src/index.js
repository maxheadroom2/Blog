import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import reducers from './redux/reducers' 
import { BrowserRouter } from 'react-router-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import './index.css';

ReactDOM.render(
    <Provider
    store = {createStore(reducers)}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

, document.getElementById('root')
);

