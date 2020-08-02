// function declaration
function greetWorld(){
    console.log('Hello, World!')
}

function getReminder(){
    console.log('Water the plants.')
}
  
function greetInSpanish(){
    console.log('Buenas Tardes.')
}

function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.')
}

// calling a function
greetWorld();
getReminder();
greetInSpanish();
sayThanks();
sayThanks();
sayThanks();

// Parameters and Arguments
function sayThanksUser(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}
  
sayThanksUser('Cole');

// Default Parameters
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}
  
makeShoppingList("wine","rice");


// function expressions
const calculateArea = function(width, height){
    const area = width * height;
    return area;
}
console.log(calculateArea(3,4))

const plantNeedsWater = function(day){
    if (day==='Wednesday'){
      return true;
    } else {
      return false;
    }
}
console.log(plantNeedsWater('Wednesday'));

// define a function using arrow function notation
const calculateAreaArrowNotation = (width, height) => {
    const area = width * height;
    return area;
}
console.log(calculateAreaArrowNotation(13,4))

// function definition using concise arrow notation

// single line block

// 0 parameter
const myFuncZeroParameter = () => {}

// one parameter
const sumNUmbers = number => number + number;
console.log(sumNUmbers(4));

// two or more paramater
const myFuncTwoOrMoreParameter = (paramOne, paramTwo) => {}

const helloWorld = () => console.log("Hello World!");
helloWorld();

// multi-line block
const sumNUmbersMulti = number => {
    const sum = number + number
    return sum;
}
console.log(sumNUmbersMulti(8));

const plantNeedsWaterArrow = day => {
    if (day === 'Wednesday') {
      return 'Yes';
    } else {
      return 'No';
    }
};
console.log(plantNeedsWaterArrow('Wednesday'))


// Helper functions

function monitorCount(rows, columns) {
    return rows * columns;
}
  
function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200; // monitorCount is a helper function (These functions being called within another function)
}
  
const totalCost = costOfMonitors(5,4);
  
console.log(totalCost);
