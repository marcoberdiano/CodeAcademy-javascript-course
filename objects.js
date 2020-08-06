/*Introduction to Objects

It’s time to learn more about the basic structure that permeates nearly every aspect of JavaScript programming: objects.
You’re probably already more comfortable with objects than you think,
because JavaScript loves objects! Many components of the language are actually objects under the hood,
and even the parts that aren’t— like strings or numbers— can still act like objects in some instances.
There are only seven fundamental data types in JavaScript, and six of those are the primitive data types:
string, number, boolean, null, undefined, and symbol. With the seventh type, objects, we open our code to more complex possibilities.
We can use JavaScript objects to model real-world things, like a basketball,
or we can use objects to build the data structures that make the web possible.
At their core, JavaScript objects are containers storing related data and functionality,
but that deceptively simple task is extremely powerful in practice.
You’ve been using the power of objects all along, but now it’s time to understand the mechanics of objects and start making your own!
*/

/*Creating Object Literals
Objects can be assigned to variables just like any JavaScript type. We use curly braces, {}, to designate an object literal:
We fill an object with unordered data. This data is organized into key-value pairs.
A key is like a variable name that points to a location in memory that holds a value.
*/

// Write your fasterShip object literal below
let fasterShip = {  
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
};

let computer = {
  memory: 8,
  disk: 252,
  'Disk Type': 'SSD',
  cpu: 'i7',
  brand: 'asus',
  color: 'silver',
};

/**
 * Accessing Properties
 * 
 * There are two ways we can access an object’s property.
 * Let’s explore the first way— dot notation
 * 
 */
console.log(fasterShip.color);
console.log(computer.memory);

/**
 * Accessing Properties
 * 
 * Bracket Notation
 * The second way to access a key’s value is by using bracket notation, [ ].
 * We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them.
 */

 console.log(computer['Disk Type']);
 console.log(fasterShip['Fuel Type']);
 console.log(computer['cpu']);

 let returnAnyProp = (objectName, propName) => objectName[propName];

 console.log(returnAnyProp(computer,'disk'));

 /**
  * Property Assignment
  * 
  * Once we’ve defined an object, we’re not stuck with all the properties we wrote.
  * Objects are mutable meaning we can update them after we create them!
  * 
  * We can use either dot notation, ., or bracket notation, [],
  * and the assignment operator, = to add new key-value pairs to an object or change an existing property
  * 
  * One of two things can happen with property assignment:
  * 1 - If the property already exists on the object, whatever value it held before will be replaced with the newly assigned value.
  * 2 -If there was no property with that name, a new property will be added to the object.
  * 
  */

  // upgrade memory to 16GB

  computer.memory = 16;
  console.log(computer);

  // add new property price

  computer.price = 899;

  // show object computer

  console.log(computer);

  /**
   * You can delete a property from an object with the delete operator.
   * 
   */

   delete computer['brand'];

   console.log(computer);

   /**
    * Methods
    * 
    * When the data stored on an object is a function we call that a method.
    * A property is what an object has, while a method is what an object does.
    * 
    */

   const engine = {
    // method shorthand, with one argument
    start(adverb) {
      console.log(`The engine starts up ${adverb}...`);
    },  
    // anonymous arrow function expression with no arguments
    sputter: () => {
      console.log('The engine sputters...');
    },
  };

  engine.start();
  engine.sputter();

  /**
   * Nested Objects
   * 
   * In application code, objects are often nested— an object might have another object as a property which in turn
   * could have a property that’s an array of even more objects!
   * 
   */

  let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
       }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  };

const capFave = spaceship.crew.captain['favorite foods']
console.log(capFave);

spaceship.passengers = [{name: 'Marco'}, {name: 'Erika'}]

const firstPassenger = spaceship.passengers[0]

console.log(spaceship.nanoelectronics)

console.log(spaceship.passengers)

/**
 * Pass By Reference
 * 
 * Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument,
 * the computer interprets the parameter name as pointing to the space in memory holding that object.
 * As a result, functions which change object properties actually mutate the object permanently
 * (even when the object is assigned to a const variable).
 * 
 */

let mySpaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
const greenEnergy = obj => obj['Fuel Type']='avocado oil'
let paintIt = obj => obj.color = 'glorious gold';
const remotelyDisable = obj => obj.disabled=true

greenEnergy(mySpaceship)
remotelyDisable(mySpaceship)
console.log(mySpaceship)
paintIt(mySpaceship);
console.log(mySpaceship);



let tryReassignment = obj => {
  obj = {
    identified : false, 
    'transport type' : 'flying'
  }
  console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}

};
tryReassignment(mySpaceship) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship = {
  identified : false, 
  'transport type': 'flying'
}; // Regular reassignment still works.

/**
 * Looping Through Objects
 * 
 * Loops are programming tools that repeat a block of code until a condition is met.
 * We learned how to iterate through arrays using their numerical indexing, but the key-value pairs in objects aren’t ordered!
 * 
 */

let otherSpaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 
// Write your code below
for(const p in otherSpaceship.crew){
  console.log(`${p}: ${otherSpaceship.crew[p].name}`)
}

for(const c in otherSpaceship.crew){
  console.log(`${otherSpaceship.crew[c].name}: ${otherSpaceship.crew[c].degree}`)
}




  
