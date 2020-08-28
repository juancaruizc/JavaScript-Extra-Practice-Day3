/*
TASK 1 🚀
// in your own words explain what a closure is below in comments and then write an example of a closure. Try to make this explaination simple enough to explain to a younger sibling. */

// A closure is a function nested within a function, the nested function is now enclosed in the scope of other function 

const name = 'juan';
function returnName () {
  return name;
}
returnName();


/*
TASK 2 🚀
// look at the code below and explain in your own words where the variable 'count' is available. 
// Explain why 'count' is initialized with a let and not a var or const. 
// Explain how initalizing the variable 'count' with a var would change it's scope
*/
function counterMaker() {
    let count = 0;
    return function counter() {
     return count++;
    }
  }

  //the variable 'count' is available in the function counterMaker. We use let in this case so it is only available within the statement. If 'var' were to be used then the variable would be available anywhere in the scope. 


/*
TASK 3 🚀
* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
1.  When in the global scope, the value of “this” will be the window/console Object;
2.  Whenever a preceding dot calls a function, the object before the dot is 'this'.
3.  When using a constructor function, 'this' refers to the specific instance of the object that is created and returned by the constructor function.
4.  When using the call or apply method, 'this' is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

function nameCaller(name) {
  console.log(this);
  return name;
}
nameCaller('Juan');

// Principle 2

const Obj = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
Obj.sayHello('Juan');

// Principle 3

function myGreeter(greeter) {
  this.greeting = 'Hi';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const juan = new myGreeter('Juan');
const sebastian = new myGreeter('Sebastian');

juan.speak();
sebastian.speak();

// Principle 4

juan.speak.call(sebastian); sebastian.speak.apply(juan);


/*
TASK 4 🚀
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function CharacterStats(attributes) {
  this.healthPoints = attributes.healthPoints;
  GameObject.call(this, attributes);
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`;
}
const Stick = new CharacterStats({
  healthPoints: 50,
  createdAt: 'Yesterday',
  name: 'Joe',
  dimensions: {
    length: 2,
    width: 1,
    height:1,
  }
})
console.log(Stick.destroy());

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function Humanoid(attributes) {
  this.name = attributes.name;
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
  CharacterStats.call(this, attributes);
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`;
}
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(attrs){
  CharacterStats.call(this,attrs);
  this.team = attrs.team;
  this.weapons = attrs.weapons;
  this.language = attrs.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} took damage.`;
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


/*
TASK 5 🚀
// convert the constructor functions above to class syntax copy and paste the objects and console logs below the class syntax to test if your code is working
 */
