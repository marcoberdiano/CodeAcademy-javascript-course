/**
 * Scope
 * An important idea in programming is scope. Scope defines where variables can be accessed or referenced.
 * While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context.
 */

 /**
  * Blocks and Scope
  * 
  * A block is the code found inside a set of curly braces {}. 
  * Blocks help us group one or more statements together and serve as an important structural marker for our code.
 */
 const city = 'New York City';

 function logCitySkyline(){
   let skyscraper = 'Empire State Building';
   return 'The stars over the ' + skyscraper + ' in ' + city;
 }

 console.log(logCitySkyline())


/**
 * Global Scope
 * 
 * Scope is the context in which our variables are declared.
 * We think about scope in relation to blocks because variables can exist either outside of or within these blocks.
 * In global scope, variables are declared outside of blocks. These variables are called global variables.
 * Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.
 */

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

/**
 * Block Scope
 * 
 * The next context we’ll cover is block scope. When a variable is defined inside a block,
 * it is only accessible to the code within the curly braces {}. 
 * We say that variable has block scope because it is only accessible to the lines of code within that block.
 * Variables that are declared with block scope are known as local variables because they are only
 * available to the code that is part of the same block.
 */

function logVisibleLightWaves(){
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
}
  
logVisibleLightWaves();
console.log(lightWaves);

/**
 * Scope Pollution
 * 
 * It may seem like a great idea to always make your variables accessible, 
 * but having too many global variables can cause problems in a program.
 * When you declare global variables, they go to the global namespace.
 * The global namespace allows the variables to be accessible from anywhere in the program.
 * These variables remain there until the program finishes which means our global namespace can fill up really quickly.
 * Scope pollution is when we have too many global variables that exist in the global namespace,
 * or when we reuse variables across different scopes.
 * Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents.
 * For example, globally scoped variables can collide with other variables that are more locally scoped,
 * causing unexpected behavior in our code.
 */

const secondSatellite = 'The Moon';
const otherGalaxy = 'The Milky Way';
let otherStars = 'North Star';

const callMyNightSky = () => {
    otherStars = 'Sirius';
	return 'Night Sky: ' + secondSatellite + ', ' + otherStars + ', ' + otherGalaxy;
};

console.log(callMyNightSky());
console.log(otherStars);

