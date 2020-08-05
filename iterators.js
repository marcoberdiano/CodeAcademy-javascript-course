/**
 * Introduction | higher-order functions
 * 
 * Higher-order functions are functions that accept other functions as arguments and/or return functions as output
 * 
 */

 /**
  * Functions as Data
  * 
  * JavaScript functions behave like any other data type in the language;
  * we can assign functions to variables, and we can reassign them to new variables.
  * 
  * In JavaScript, functions are first class objects. This means that, like other objects you’ve encountered,
  * JavaScript functions can have properties and methods.
  */

 const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  }

  // Write your code below
  const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  is2p2();
  console.log(is2p2.name);

  /**
   * Functions as Parameters
   * 
   * Since functions can behave like any other type of data in JavaScript,
   * it might not surprise you to learn that we can also pass functions (into other functions) as parameters.
   * A higher-order function is a function that either accepts functions as parameters, returns a function, or both!
   * We call the functions that get passed in as parameters and invoked callback functions
   * because they get called during the execution of the higher-order function.
   */

  const addTwo = num => num + 2;

  const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
  };
  
  // Write your code below
  const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes)
  
  const checkConsistentOutput = (f,v) => {
    for(let i=0;i < 2;i++){
      if(f(v)){
        return f(v);
      } else {
        return 'This function returned inconsistent results';
      }
    }
  }
  
  console.log(checkConsistentOutput(addTwo, 2));

  /**
   * Introduction to Iterators
   * 
   * Imagine you had a grocery list and you wanted to know what each item on the list was.
   * You’d have to scan through each row and check for the item.
   * This common task is similar to what we have to do when we want to iterate over, or loop through, an array.
   * One tool at our disposal is the for loop.
   * However, we also have access to built-in array methods which make looping easier.
   * 
   */

   /**
    * forEach()
    * 
    * The .forEach() method executes a callback function on each of the elements in an array in order.
    * 
    */

  const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

  artists.forEach(artist => {
    console.log(artist + ' is one of my favorite artists.');
  });

  
  /**
   * map()
   * 
   * The .map() method executes a callback function on each element in an array.
   * It returns a new array made up of the return values from the callback function.
   * The original array does not get altered, and the returned array may contain different elements than the original array.
   */
  const numbers = [1, 2, 3, 4, 5];
  
  const squareNumbers = numbers.map(number => {
    return number * number;
  });
  
  console.log(squareNumbers);
  
  /**
   *  filter()
   * 
   * The .filter() method executes a callback function on each element in an array.
   * The callback function for each of the elements must return either true or false.
   * The returned array is a new array with any elements for which the callback function returns true.
   * 
   */

  const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
  
  const onlyStrings = things.filter(thing => {
    return typeof thing === 'string';
  });
  
  console.log(onlyStrings);