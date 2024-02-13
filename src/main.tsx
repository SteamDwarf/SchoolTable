import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ErrorHandler } from 'app/ErrorHandler';
import { Provider } from 'react-redux';
import { store } from 'app/redux/index.ts';
import { App } from 'app/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorHandler>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorHandler>
  </React.StrictMode>,
)
