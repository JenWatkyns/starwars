import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/app/connected';

function app() {
  return (
    <Provider store={store}>
      <div className="App">
        <App />
      </div>
    </Provider>
  );
}

export default app;
