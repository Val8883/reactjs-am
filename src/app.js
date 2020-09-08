import React from 'react';
import { render } from 'react-dom';

function App() {
  return React.createElement('h1', null, 'hello');
}

render(App(), document.getElementById('app'));
