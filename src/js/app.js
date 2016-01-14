////////////////////////////////////
//Probably we should include all js files here like in style.scss
////////////////////////////////////

/////////// Ovo mi je u stvari DIST gde pozivam sve js fajlove

//Test
var testModule = require('./script/modules/test/test.js');

// test('Hi Zoran Markovic');
console.log(testModule.greetings);
testModule.setName("Jelena");
testModule.getName();
testModule.updatePlaceholder('Hello from testModule !!!!!!!!!!!!!!!!')

//console.log('javascript reporting in from app.js ...');

//Test code
// Object literal
var Person = {
  name: "Zoran",
  age: 33,
  showPerson: function() {
    console.log("Person: " + this.name + " is " + this.age + " years old!");
  }
}
var newPerson = Person;
//newPerson.showPerson();

//constructor
function Person2(name, age) {
  this.name2 = name;
  this.age2 = age;
}

Person2.prototype.showPerson2 = function() {
  console.log("Person2: " + this.name2 + " is " + this.age2 + " years old!");
};

var p2 = new Person2("Jelena", 29);
//p2.showPerson2();

//inheritance

function Person3(lastName, name, age) {
  Person2.call(this, name, age); // inherit from Person2
  this.lastName = lastName;
  // this.name = name;
  // this.age = age;
}

Person3.prototype = Object.create(Person2.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: Person3,
    writable: true
  }
});

Person3.prototype.showLastName = function() {
  console.log("Person last name is: " + this.lastName);
}

var p3 = new Person3("Markovic", "Slobodan", 55);
// p3.showPerson2();
// p3.showLastName();

//anonymus function
// (function() {
//   console.log("It works");
// })();

//method invocation pattern
var myObject = {
  value: 0,
  increment: function(inc) {
    //test
    var value = 10; // value nema uticaja na this.value
    //this.value je 0 zato sto je this vezan za objekat!!!
    return this.value += typeof inc === 'number' ? inc : 1;
  }
};
// myObject.increment(); //zovem metodu (funkciju)
// console.log(myObject.value); //rezultat je: 1
//
// myObject.increment(55);
// console.log(myObject.value); //rezultat je: 55

//function invocation pattern
myObject.double = function(){
  var that = this;
  var helper = function () {
    var result = myObject.increment(that.value, that.value);
    console.log("Double is: " + result);
  }
  helper();
};

// Invoke double as a method.
//myObject.double();
