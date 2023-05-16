// Question 1
//===========
var dogNames = ["Max","Fido","Gizmo","Nala"]

let testString1 = "Hello, my dog is Max, and they have purple eyes!"

function findDogNames(sentence, dogNames) {
    const foundDogNames = [];
  
    for (const name of dogNames) {
      if (sentence.includes(name)) {
        foundDogNames.push(name);
      }
    }
    return foundDogNames;
  }
console.log(findDogNames(testString1, dogNames));

// Question 2
//===========
const heightsInInches = [66, 64, 60, 52, 72, 80, 51]

function inchesToFeet(heightsArray) {
    const heightsInFeet = [];
    for (const heightInches of heightsArray) {
        heightsInFeet.push(heightInches / 12);
    }
    return heightsInFeet;
}
console.log(inchesToFeet(heightsInInches));

// Question 3
//===========
const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]

// const pizzaEatingTurtles = tmnt.map(name => {
//     let message;
  
//     if (name.endsWith('o')) {
//       message = `${name} is eating pizza`;
//     } else {
//       message = `${name} is being rude`;
//     }
//     return message;
//   });

const pizzaEatingNinjas = tmnt.map(name => {
  return name.endsWith('o') ? `${name} is eating pizza` : `${name} is being rude`;
});
console.log(pizzaEatingNinjas);

// Question 4
//===========
let findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]

const maxNum = (arr) => {
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return max;
  }
  console.log(maxNum(findAMax));

// Question 5
//===========
// At the end of the third Iteration (the third time the loop has ran) of this for Loop define the state of all the variables used in the cell

// var bingo = "B-I-N-G-O"
// var ognib = ""
// for(let i=bingo.length-1; i>=0; i--){
//     ognib+=(bingo[i])
    //define state from this line on the third iteration
// }
// After the third iteration (i = 2):
    // bingo value is "B-I-N-G-O"
    // ognib value is "OGNIB"
    // i value is 0

// Question 6
//===========

// 1: 
// https://www.codewars.com/kata/56dec885c54a926dcd001095/javascript

// 2:
//https://www.codewars.com/kata/5265326f5fda8eb1160004c8/solutions/javascript

// 3:
//https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript

