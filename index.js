'use strict';


// #1: Functions As Arguments
function repeat(fn, n) {
  let i = 0;
  while (i <= n) {
    fn();
    i++;
  }
}

function hello() {
  console.log('Hello World');
}

function goodbye() {
  console.log('Goodbye World');
}

// repeat(hello, 5);
// repeat(goodbye, 5);


// #2: Functions As Arguments:

function filter(arr, fn) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    if(fn(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

const testFunc = function(name) {  
  return (name.length < 4);
};

const classNames = ['david', 'Ali', 'Jay', 'Andy', 'Samantha'];

const shortNames = filter(classNames, testFunc);
console.log('shortnames',shortNames);


// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


// #3 Functions as Return Values

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return function (location) {
    warningCounter ++;
    console.log(`Danger! There is a ${typeOfWarning} hazard at ${location}!
    The ${typeOfWarning} hazard alert has triggered ${warningCounter} times(s)today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const mudslideWarning = hazardWarningCreator('Mudslide across the Road');
const accidentWarning = hazardWarningCreator('Auto crash on the Road');

rocksWarning('Southbound I-15 in Draper');
rocksWarning('State St. and 800 N');
rocksWarning('Sunset Blvd. and Union');

mudslideWarning('Little Cottonwood Canyon');
mudslideWarning('Canyon Blvd.');
mudslideWarning('Parleys Summit');
mudslideWarning('Little Cottonwood Canyon');

accidentWarning('Your face');
accidentWarning('I-5 Renton');
accidentWarning('University Blvd. and 1600 S.');


// #4 forEach, filter and map:

const turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

const forwardAndLeft = turtleMovements.filter(movements => {
  return movements[0] >= 0 && movements[1] >= 0;
});
console.log(forwardAndLeft);

const totalTurtleStepsTaken = forwardAndLeft.map(movement => movement[0] + movement[1]);
console.log(totalTurtleStepsTaken);

totalTurtleStepsTaken.forEach((step, i) => (`Movement #${i + 1}: step(s)`)
);
// This does not seem to work
const printSteps = totalTurtleStepsTaken;
console.log(printSteps);


