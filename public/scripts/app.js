'use strict';

var data = {
  title: 'myTitle',
  subtitle: ' mySubtitle'
};

var title = data.title,
    subtitle = data.subtitle;


var template = React.createElement(
  'div',
  null,
  React.createElement(
    'p',
    null,
    title
  ),
  React.createElement(
    'p',
    null,
    subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'item'
    ),
    React.createElement(
      'li',
      null,
      'item'
    ),
    React.createElement(
      'li',
      null,
      'item'
    ),
    React.createElement(
      'li',
      null,
      'item'
    )
  )
);

var getLocation = function getLocation(location) {
  return location ? location : 'Unknown';
};

var user = {
  name: 'Val',
  age: 26,
  userLocation: 'LA'
};

var name = user.name,
    age = user.age,
    userLocation = user.userLocation;


var secondTemplate = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    name
  ),
  React.createElement(
    'p',
    null,
    'Age ',
    age
  ),
  React.createElement(
    'p',
    null,
    'City: ',
    getLocation(userLocation)
  )
);

var root = document.getElementById('app');
ReactDOM.render(secondTemplate, root);

// arrow fucntion

// // ! arguments object - no longer bound with arrow functions
// const add = function() {
//   console.group('add function');
//   console.log(arguments);
//   console.log('name: ', add.name);
//   console.groupEnd();
// };
// add();

// const arrowAdd = () => {
//   //console.log(arguments);
// };

// // ! this keword - no longer bound

// const newUser = {
//   name: 'Valentine',
//   cities: ['Chernivci', 'Kiev', 'LA'],
//   printPlaceLived() {
//     const that = this;
//     this.cities.forEach(function(city) {
//       console.log(city);
//     });
//   },
// };

// newUser.printPlaceLived();
