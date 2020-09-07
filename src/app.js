const data = {
  title: 'myTitle',
  subtitle: ' mySubtitle',
};

const { title, subtitle } = data;

let template = (
  <div>
    <p>{title}</p>
    <p>{subtitle}</p>
    <ol>
      <li>item</li>
      <li>item</li>
      <li>item</li>
      <li>item</li>
    </ol>
  </div>
);

const getLocation = (location) => (location ? location : 'Unknown');

const user = {
  name: 'Val',
  age: 26,
  userLocation: 'LA',
};

const { name, age, userLocation } = user;

let secondTemplate = (
  <div>
    <h1>{name}</h1>
    <p>Age {age}</p>
    <p>City: {getLocation(userLocation)}</p>
  </div>
);

let root = document.getElementById('app');
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
