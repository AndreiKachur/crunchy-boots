import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundry from './components/Error-boundry'
import App from './components/App';
import { store } from './redux/store'

ReactDOM.render(

  <Provider store={store} >
    <ErrorBoundry>
      <Router >
        <App />
      </Router>
    </ErrorBoundry>
  </Provider>,

  document.getElementById('root')
);

