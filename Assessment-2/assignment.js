// DONE Declare a variable named weekdays and initialize it to an array of these three strings:
// Monday, Wednesday, Friday.


var weekdays = ['Monday', 'Wednesday', 'Friday'];

console.log(weekdays);

// 2.  DONE Declare a variable named rectangle and initialize it to an object with two properties:
// height: 20 and width: 15.

var rectangle = {
    height: 20,
    width: 15
};

console.log(rectangle);

// 3. DONE Declare a function named greetMe
// ○Parameter(s): name
// ○Functionality: logs the following greeting: "Hi ____!", replacing the blank with
// the name parameter. Don't forget the "!" at the end.

function greet(name) {
    console.log("Hi, " + name + "!");
  }
  
  greet("shelby");

// 4. DONE Declare a function named calculateTriangleArea
// ○Parameter(s): base, height
// ○Functionality: calculates and returns the triangle area based on these two
// parameters. The formula for triangle area is base * height / 2.

function calculateTriangleArea(base, height){
    console.log(base * height / 2);
}
calculateTriangleArea(10, 5)


// 5. DONE Declare a function named countDown
// ○Parameter(s): n/a
// ○Functionality: uses a loop to log, one by one, the numbers 10, 9, 8, 7, 6, 5, 4, 3, 2,
// 1, and 0.

function countdown(n){
    console.log(n);
    return n ? countdown(n - 1) : 0; 
  }
  
countdown(10);

// 6. DONE Declare a function named countEvens
// ○Parameter(s): end
// ○Functionality: uses a loop to log, one by one, the even numbers from 2 through
// end, including both 2 and end (if end is even).

function countEvens(end){
  for(let i = 0 ; i < end.length; i++) {
      if (end[i] % 2 === 0 && end[i] != "" && end[i] != []){
          end++;
      }
  }
}
countEvens(20);


// 7. Declare a function named checkAdverb
// ○Parameter(s): word

function checkAdverb(word){

}

// 8. DONE Declare a variable named materials that is initialized to an array with the following
// objects:

const materials = [
  {type: 'straw', strength: 1 },
  {type: 'wood', strength: 5 },
  {type: 'brick', strength: 10 },
  
];
console.log(materials);

// 9. create a function named printMaterials
// ○Parameter(s): materialArray (an array like the one in question 8)
// ○Functionality: log each item from the materialArray, one per line, with a
// hyphen between the type and strength, like this: "type - strength".

// function printMaterials(materialArray){

// }


// 10. Declare a function named getStrengthOfMaterial
// ○Parameter(s): materialArray, type
// ○Functionality: find the item in the materialArray that has the given type.
// Return the strength of that material. Or if there is no material with that type,

function getStrengthOfMaterial (materials, type){
 return materials.strength
}
 console.log(materials.find(getStrengthOfMaterial) .strength);
