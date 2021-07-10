import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import ErrorBoundry from './components/Error-boundry'
import Restoservice from './services/resto-service'
import RestoServiceContext from './components/Resto-service-context';
import reducer from './reducers'

const store = createStore(reducer)
const restoservice = new Restoservice()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
        <ErrorBoundry>
            <RestoServiceContext.Provider value={restoservice}>
                <Router >
                    <App />
                </Router>
            </RestoServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

