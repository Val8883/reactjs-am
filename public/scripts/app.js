'use strict';

var count = 0;

var renderDecorator = function renderDecorator(callback) {
  callback();
  renderCounterApp();
};

var handleAddOne = function handleAddOne() {
  ++count;
};

var handleMinusOne = function handleMinusOne() {
  if (count > 0) --count;
};

var resetCounter = function resetCounter() {
  if (count > 0) count = 0;
};

var root = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: function onClick() {
          return renderDecorator(handleAddOne);
        } },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: function onClick() {
          return renderDecorator(handleMinusOne);
        } },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: function onClick() {
          return renderDecorator(resetCounter);
        } },
      'reset'
    )
  );

  ReactDOM.render(template, root);
};

renderCounterApp();
