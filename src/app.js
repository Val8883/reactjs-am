let count = 0;

const renderDecorator = (callback) => {
  callback();
  renderCounterApp();
};

const handleAddOne = () => {
  ++count;
};

const handleMinusOne = () => {
  if (count > 0) --count;
};

const resetCounter = () => {
  if (count > 0) count = 0;
};

let root = document.getElementById('app');

const renderCounterApp = () => {
  const template = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => renderDecorator(handleAddOne)}>+1</button>
      <button onClick={() => renderDecorator(handleMinusOne)}>-1</button>
      <button onClick={() => renderDecorator(resetCounter)}>reset</button>
    </div>
  );

  ReactDOM.render(template, root);
};

renderCounterApp();
