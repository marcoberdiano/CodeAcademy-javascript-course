/**
 * Advanced Objects Introduction
 * 
 * Remember, objects in JavaScript are containers that store data and functionality.
 * In this lesson, we will build upon the fundamentals of creating objects and explore some advanced concepts.
 * So if there are no objections, let’s learn more about objects!
 * 
 * In this lesson we will cover these topics:
 * 1- how to use the this keyword.
 * 2 - conveying privacy in JavaScript methods.
 * 3 -defining getters and setters in objects.
 * 4 - creating factory functions.
 * 5 - using destructuring techniques
 * 
 */

 // This keyword

 const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
  };
  
  console.log(robot.provideInfo())

  /**
   * Privacy
   * 
   * Accessing and updating properties is fundamental in working with objects.
   * However, there are cases in which we don’t want other code simply accessing and updating an object’s properties.
   * When discussing privacy in objects, we define it as the idea that only certain properties should be mutable
   * or able to change in value.
   * Certain languages have privacy built-in for objects, but JavaScript does not have this feature.
   * Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property.
   * One common convention is to place an underscore _ before the name of a property to mean that the property SHOULD NOT BE ALTERED.
   * Here’s an example of using _ to prepend a property.
   * 
   */

  const bankAccount = {
    _amount: 1000
  }

  const myRobot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  myRobot.recharge()

  /**
   * Getters
   * 
   * Getters are methods that get and return the internal properties of an object.
   * But they can do more than just retrieve the value of a property!
   * 
   */

  const otherRobot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
      if(typeof this._energyLevel == 'number'){
        return `My current energy level is ${this._energyLevel}`;
      } else {
        return 'System malfunction: cannot retrieve energy level';
      }
    }
  };
  console.log(otherRobot.energyLevel)

  const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
  }
  // To call the getter method: 
  console.log(person.fullName); // 'John Doe'

  /**
   * Setters
   * 
   * Along with getter methods, we can also create setter methods which reassign values of existing properties within an object
   * 
   */

  const myPerson = {
    _age: 37,
    set age(newAge){
      if (typeof newAge === 'number'){
        this._age = newAge;
      } else {
        console.log('You must assign a number to age');
      }
    },
    get age(){
        return this._age;
    }
  };

  console.log(myPerson.age);
  myPerson.age=56;
  console.log(myPerson.age);

  /**
   * Factory Functions
   * 
   * So far we’ve been creating objects individually, but there are times where we want to create many instances of an object quickly.
   * Here’s where factory functions come in. A real world factory manufactures multiple copies of an item quickly and on a massive scale.
   * A factory function is a function that returns an object and can be reused to make multiple object instances.
   * Factory functions can also have parameters allowing us to customize the object that gets returned.
   * 
   */

  const robotFactory = (model,mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep () {
        console.log('Beep Boop')
      }
    }
  };
  
  const tinCan = robotFactory('P-500',true)
  tinCan.beep()
  console.log(tinCan.model)
  console.log(tinCan.mobile)

  const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
      name: name,
      age: age, 
      energySource: energySource,
      scare() {
        console.log(catchPhrase);
      } 
    }
  };

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

/**
 * Property Value Shorthand
 * 
 * ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.
 * 
 */

const myRobotFactory = (model, mobile) => {
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = myRobotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)

  /**
   * Destructured Assignment
   * 
   * We often want to extract key-value pairs from objects and save them as variables
   * In destructured assignment we create a variable with the name of an object’s key
   * that is wrapped in curly braces { } andassign to it the object.
   */

  const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
      day: 'stay inside',
      night: 'satisfy appetite'
    }
  };

const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'



