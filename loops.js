/**
 * Loops
 * 
 * A loop is a programming tool that repeats a set of instructions until a specified condition,
 * called a stopping condition is reached. As a programmer, you’ll find that you rely on loops all the time!
 * You’ll hear the generic term iterate when referring to loops; iterate simply means “to repeat”.
 */

 /**
  * The For Loop
  * 
  * Instead of writing out the same code over and over,
  * loops allow us to tell computers to repeat a given block of code on its own.
  * One way to give computers these instructions is with a for loop
  */

  /**
   * A for loop contains three expressions separated by ; inside the parentheses:
   * 
   * 
   * 1 - an initialization starts the loop and can also be used to declare the iterator variable.
   * 
   * 2 - a stopping condition is the condition that the iterator variable is evaluated against — 
   * if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
   * 
   * 3 - an iteration statement is used to update the iterator variable on each loop.
   */

for(let count=5;count<11;count++) {
    console.log(count);
}

/**
 * Looping in Reverse
 * 
 */

// The loop below loops from 0 to 3.
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
}

/**
 * Looping through Arrays
 * 
 * for loops are very handy for iterating over data structures.
 * For example, we can use a for loop to perform the same operation on each element on an array.
 * Arrays hold lists of data, like customer names or product information.
 * Imagine we owned a store and wanted to increase the price of every product in our catalog.
 * That could be a lot of repeating code, but by using a for loop to iterate through the array we could accomplish this task easily.
 * 
 * To loop through each element in an array, a for loop should use the array’s .length property in its condition.
 */

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for(let i=0;i<vacationSpots.length;i++){
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

/**
 * Nested Loops
 * 
 * When we have a loop running inside another loop, we call that a nested loop.
 * One use for a nested for loop is to compare the elements in two arrays.
 * For each round of the outer for loop, the inner for loop will run completely.
 */

 // Write your code below
const bobsFollowers = ['Bill Gates','Steve Jobs','Trump','Obama','Erika']

const tinasFollowers = ['Bill Gates','Obama','Marco','Erika']

const mutualFollowers = []

for(let i=0;i<bobsFollowers.length;i++){
  for(let j=0;j<tinasFollowers.length;j++){
    if(bobsFollowers[i]===tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}

console.log('Mutual followers:')
for(let follower=0;follower<mutualFollowers.length;follower++){
  console.log(follower +": "+ mutualFollowers[follower])
}

/**
 * The While Loop
 */

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;
while(currentCard!='spade'){
  currentCard=cards[Math.floor(Math.random()*4)];
  console.log(currentCard);
}

/**
 * Do...While Statements
 * 
 * In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run.
 * This is where the do...while statement comes in.
 */

 // Write your code below
let cupsOfSugarNeeded = 4;
let cupsAdded = 0;

do {
  cupsAdded++;
} while(cupsAdded < cupsOfSugarNeeded);

console.log(cupsAdded)
  
/**
 * The break Keyword
 */

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for(let i=0;i < rapperArray.length;i++){
    console.log(rapperArray[i]);
    if(rapperArray[i]==='Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.")