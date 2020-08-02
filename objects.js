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