import React from 'react';
import { render } from 'react-dom';

function App() {
  return <h1>hellodsds</h1>;
}

class SomeClass {
  name = 'val';
}

console.log(new SomeClass());

render(<App />, document.getElementById('app'));
