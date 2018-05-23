import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import 'antd/dist/antd.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppContainer from './containers/AppContainer';

const store = createStore(rootReducer);
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
