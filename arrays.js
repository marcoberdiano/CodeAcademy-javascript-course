/**
 * Arrays
 * 
 * Organizing and storing data is a foundational concept of programming.
 * Arrays are JavaScript’s way of making lists. Arrays can store any data types (including strings, numbers, and booleans).
 * Like lists, arrays are ordered, meaning each item has a numbered position.
 */

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle', "Learn how to program","Travel"];

console.log(newYearsResolutions);

/**
 * Create an Array
 * 
 * One way we can create an array is to use an array literal.
 * An array literal creates an array by wrapping items in square brackets [].
 * Remember from the previous exercise, arrays can store any data type
 * — we can have an array that holds all the same data types or an array that holds different data types.
 * 
 */

const hobbies = ['music','read','play video games']

console.log(hobbies)

/**
 * Accessing Elements
 * 
 * Each element in an array has a numbered position known as its index.
 * We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.
 * Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1.
 * Therefore, the first item in an array will be at position 0
 * 
 */

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];
console.log(listItem);

console.log(famousSayings[2]);
console.log(famousSayings[3]);

// You can also access individual characters in a string using bracket notation and the index
const hello = 'Hello World';
console.log(hello[6]);

/**
 * Update Elements
 * 
 * In the previous exercise, you learned how to access elements inside an array or a string by using an index.
 * Once you have access to an element in an array, you can update its value.
 */

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

/**
 * Arrays with let and const
 * 
 * You may recall that you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.
 * Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable.
 * Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.
 * The instructions below will illustrate this concept more clearly.
 * Pay close attention to the similarities and differences between the condiments array and the utensils array as you complete the steps.
 */

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments)

utensils[3] = 'Spoon';
console.log(utensils);

utensils.push('fork')
console.log(utensils);

/**
 * The .length property
 * 
 * One of an array’s built-in properties is length and it returns the number of items in the array.
 * We access the .length property just like we do with strings
 */

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

/**
 * The .push() Method
 * 
 * Let’s learn about some built-in JavaScript methods that make working with arrays easier.
 * These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.
 * One method, .push() allows us to add items to the end of an array
 */

const toDoList = ['wash dishes', 'do laundry', 'take out trash'];

toDoList.push('eat','sleep');
console.log(toDoList);

/**
 * The .pop() Method
 * 
 * Another array method, .pop(), removes the last item of an array.
 */

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('eat','sleep');
console.log(chores);

/**
 * More Array Methods
 * 
 * There are many more array methods than just .push() and .pop().
 * You can read about all of the array methods that exist on the Mozilla Developer Network (MDN) array documentation.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

const citys = ['Aveiro','Porto','Coimbra','Setubal']

// shift removes the first element of the citys
citys.shift()
console.log(citys)

// unshift add 'Braga' to the beginning of city list
citys.unshift('Braga')
console.log(citys)

// slice 
const myGames = ['Clash Of Clans', 'Pokemon Go', 'Fifa 20', 'Bloodborne']
console.log(myGames.slice(1,3) )

// indexOf

console.log(myGames.indexOf('Bloodborne'))

/**
 * Arrays and Functions
 * 
 * So when you pass an array into a function, if the array is mutated inside the function, 
 * that change will be maintained outside the function as well. 
 * You might also see this concept explained as pass-by-reference
 * since what we’re actually passing the function is a reference to where the variable memory is stored and changing the memory.
 */

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept)

function removeElement(newArr){
    newArr.pop()
}
removeElement(concept)
console.log(concept)

/**
 * Nested Arrays
 * 
 * Earlier we mentioned that arrays can store other arrays. When an array contains another array it is known as a nested array.
 * 
 */

const numberClusters = [[1,2], [3,4], [5,6]]
const target = numberClusters[2][1]
console.log(target)
/**
 * Review Arrays
 * 
 * Nice work! In this lesson, we learned these concepts regarding arrays:
 * Arrays are lists that store data in JavaScript.
 * Arrays are created with brackets [].
 * Each item inside of an array is at a numbered position, or index, starting at 0.
 * We can access one item in an array using its index, with syntax like: myArray[0].
 * We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
 * Arrays have a length property, which allows you to see how many items are in an array.
 * Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
 * Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the Mozilla Developer Network website.
 * Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. 
 * You can always check the documentation.
 * Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable.
 *  However, a variable declared with const cannot be reassigned.
 * Arrays mutated inside of a function will keep that change even outside the function.
 * Arrays can be nested inside other arrays.
 * To access elements in nested arrays chain indices using bracket notation.
 * 
 */