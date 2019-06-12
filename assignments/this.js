/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1  : Window/ Global Binding
// code example for Window Binding

 function sayFood(item) {
    console.log(this);
    return item;
  }
  sayName("rice");


// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    hairType: function(hair) {
      console.log(`${this.greeting} my hair is ${hair}`);
      console.log(this);
    }
  };
  myObj.hairType('curly');




// Principle 3

// code example for New Binding

function NoseyMom(inquisitive) {
    this.greeting = 'Hello ';
    this.inquisitive = inquisitive;
    this.speak = function() {
      console.log(this.greeting + this.inquisitive + " did you say that?");
      console.log(this);
    };
  }
  
  const teresa = new NoseyMom('why');
  const ramona = new NoseyMom('how');
  
  teresa.speak();
  ramona.speak();


// Principle 4

// code example for Explicit Binding

teresa.speak.call(ramona);
ramona.speak.apply(teresa);


