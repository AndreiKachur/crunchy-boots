import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import ErrorBoundry from './components/Error-boundry'
import Bootsservice from './services/boots-service'
import BootsServiceContext from './components/Boots-service-context';
import reducer from './reducers/reducer.js'

const store = createStore(reducer)
const bootsservice = new Bootsservice()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
        <ErrorBoundry>
            <BootsServiceContext.Provider value={bootsservice}>
                <Router >
                    <App />
                </Router>
            </BootsServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

