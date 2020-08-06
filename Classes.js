/**
 * Introduction to Classes
 * 
 * JavaScript is an object-oriented programming (OOP) language we can use to model real-world items.
 * In this lesson, you will learn how to make classes. Classes are a tool that developers use to quickly produce similar objects.
 */

/**
 * Constructor
 * 
 * In the last exercise, you created a class called Dog, and used it to produce a Dog object.
 * Although you may see similarities between class and object syntax, there is one important method that sets them apart.
 * It’s called the constructor method. JavaScript calls the constructor() method every time it creates a new instance of a class.
 * 
 */


class Surgeon {
    constructor(name, department) {
      this.name = name;
      this.department = department;
    }
  }

/**
 * Instance
 * 
 * Now, we’re ready to create class instances. An instance is an object that contains the property names and methods of a class,
 * but with unique property values
 * 
 */

 