const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get courses () {
        return Object.entries(this._courses);
    },
    get appetizers () {
      return this._courses.appetizers;
    },
    get mains () {
      return this._courses.mains;
    },
    get desserts () {
      return this._courses.desserts;
    },
    set appetizers (newAppetizers) {
      this._courses.appetizers = newAppetizers;
    },
    set mains(newMains) {
      this._courses.mains = newMains;
    },
    set desserts (newDesserts) {
      this._courses.desserts = newDesserts;
    },
    addDishToCourse (courseName, dishName, dishPrice) {
        dish = {dishName, dishPrice};
        for(const course in this._courses) {
          if (course===courseName) {
            this._courses[course].push(dish);
          }
        }
    },
    getRandomDishFromCourse (courseName) {
        dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    genrerateRandomMel(){
        let totalPrice=0;
        const appetizer =  this.getRandomDishFromCourse('appetizers');
        const main =  this.getRandomDishFromCourse('mains');
        const dessert =  this.getRandomDishFromCourse('desserts');
        totalPrice = appetizer.dishPrice + main.dishPrice + dessert.dishPrice;
        return `Appetizer: ${appetizer.dishName} Main: ${main.dishName} Dessert: ${dessert.dishName} Total Price: ${totalPrice}`;
    }
};

menu.addDishToCourse('appetizers','Appetizer 1',2);
menu.addDishToCourse('appetizers','Appetizer 2',4);
menu.addDishToCourse('appetizers','Appetizer 3',6);
menu.addDishToCourse('mains','Main 1',20);
menu.addDishToCourse('mains','Main 2',40);
menu.addDishToCourse('mains','Main 3',60);
menu.addDishToCourse('desserts','Dessert 1',10);
menu.addDishToCourse('desserts','Dessert 2',15);
menu.addDishToCourse('desserts','Dessert 3',20);

const meal = menu.genrerateRandomMel();

console.log(meal);