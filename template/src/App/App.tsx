import React from 'react';
import { hot } from 'react-hot-loader';
import Provider from './Provider';

function App() {
  return (
    <Provider>
      <div>App</div>
    </Provider>
  );
}

export default hot(module)(App);
