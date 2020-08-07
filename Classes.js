/**
 * Introduction to Classes
 * 
 * JavaScript is an object-oriented programming (OOP) language we can use to model real-world items.
 * In this lesson, you will learn how to make classes. Classes are a tool that developers use to quickly produce similar objects.
 */

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}


/**
 * Constructor
 * 
 * In the last exercise, you created a class called Cat, and used it to produce a Cat object.
 * Although you may see similarities between class and object syntax, there is one important method that sets them apart.
 * It’s called the constructor method. JavaScript calls the constructor() method every time it creates a new instance of a class.
 * 
 */

class Dog {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }


/**
 * Instance
 * 
 * Now, we’re ready to create class instances. An instance is an object that contains the property names and methods of a class,
 * but with unique property values
 * 
 * We create a new variable named s1 that will store an instance of our Surgeon class.
 * We use the new keyword to generate a new instance of the Surgeon class.
 * The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.
 * We pass the 'Curry' and 'Cardiovascular' string to the Surgeon constructor, which sets the name property to 'Curry'.
 * and department property to 'Cardiovascular'
 */

  const ayraCat = new Cat('Ayra',1);
  const lunaDog = new Dog('Luna',2);


 /**
  * Methods
  * 
  * Class method and getter syntax is the same as it is for objects except you CAN NOT INCLUDE COMMAS BETWEEN methods.
  */

 class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name () {
    return this._name;
  }
  get department () {
    return this._department;
  }
  get remainingVacationDays () {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays-=daysOff;
  }
}


/**
 * Method Calls
 * 
 * Finally, let’s use our new methods to access and manipulate data from Surgeon instances.
 * 
 */

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant','Orthopedics');

console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);


/**
 * Inheritance I
 * 
 * With inheritance, you can create a parent class (also known as a superclass)
 * with properties and methods that multiple child classes (also known as subclasses) share.
 * The child classes inherit the properties and methods from their parent class.
 * 
 */

 class Animal {
   constructor(name){
     this._name = name;
     this._behavior = 0;
   }
   get name(){
     return this._name;
   }
   get behavior(){
     return this._behavior;
   }
   incrementBehavior(){
     this._behavior++;
   }
 }


 /**
  * Inheritance II
  * 
  */

 class HospitalEmployee {
  constructor(name){
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name(){
    return this._name;
  }
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff){
    this._remainingVacationDays-=daysOff;
  }
    // static method
  static generatePassword(){
    return Math.floor(Math.random()*10000);
  } 
}


/**
 * Inheritance III
 * 
 * The extends keyword makes the methods of the HospitalEmployee class available inside the Nurse class.
 * The constructor, called when you create a new Nurse object, accepts two arguments, name and certifications.
 * The super keyword calls the constructor of the parent class.
 * In this case, super(name) passes the name argument of the Nurse class to the constructor of the HospitalEmployee class.
 * When the HospitalEmployee constructor runs, it sets this._name = name; for new Nurse instances.
 * _certifications is a new property that is unique to the Nurse class, so we set it in the Nurse constructor.
 * 
 * Notice, we call super on the first line of our constructor(), then set the certifications property on the second line.
 * In a constructor(), you must always call the super method before you can use the this keyword
 * — if you do not, JavaScript will throw a reference error. To avoid reference errors,
 * it is best practice to call super on the first line of subclass constructors.
 */

class Nurse extends HospitalEmployee {
  constructor(name,certifications){
    super(name);
    this._certifications = certifications;
  }
  // Inheritance V
  get certifications(){
    return this._certifications;
  }
  addCertification(newCertification){
    this._certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk',['Trauma','Pediatrics']);


/**
 * Inheritance IV
 * 
 * Now that we know how to create an object that inherits properties from a parent class let’s turn our attention to methods.
 * When we call extends in a class declaration, all of the parent methods are available to the child class.
 */

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);


/**
 * Inheritance V
 * 
 * In addition to the inherited features, child classes can contain their own properties, getters, setters, and methods.
 * 
 */

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);


/**
 * Static Methods
 * 
 * Sometimes you will want a class to have methods that aren’t available in individual instances,
 * but that you can call directly from the class.
 * You CANNOT ACCESS the statics methods from instances of the Classes or instances of its subclasses 
 */

console.log(HospitalEmployee.generatePassword());


/**
 * Review: Classes
 * 
 * Way to go! Let’s review what you learned.
 * 
 * 1 - Classes are templates for objects.
 * 2 - Javascript calls a constructor method when we create a new instance of a class.
 * 3 - Inheritance is when we create a parent class with properties and methods that we can extend to child classes.
 * 4 - We use the extends keyword to create a subclass.
 * 5 - The super keyword calls the constructor() of a parent class.
 * 6 - Static methods are called on the class, but not on instances of the class.
 */





 