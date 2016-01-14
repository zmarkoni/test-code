var $ = require('jquery');

// module.exports = function (someText) { //ne mogu da stavim ime funkcije!
//   var z = $('#placeholder').text(someText);
//   return z;
// }

//REVEALING MODULE PATTERN
module.exports = (function(){
    var name = "Zoran Markovic";
    var greetings = "Hi";

    function printName(){
        console.log(greetings + " " + name + " !");
    }

    function setName(value){
      name = value;
    }

    function getName(){
      printName();
    }

    function updatePlaceholder(someText) {
      $('#placeholder').text(someText);
    }

    // reveal public pointers to private functions and properties
    return {
      setName : setName, //zovem kao metod
      getName : getName, //zovem kao metod
      greetings : greetings,
      updatePlaceholder : updatePlaceholder
    };


})();
