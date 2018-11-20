//Get random value from array
let arr = ["apple", "lemon", "orange"];

let rand = Math.floor(Math.random() * arr.length);

alert(arr[rand]);

//Create a calculator for the entered values.
let arrNumbers = [];
while (true) {

  let value = prompt("enter number");

  if (value === "" || value === null || isNaN(value)) break;

  arrNumbers.push(+value);
}

let sum = 0;

for(let i = 0; i < arrNumbers.length; i++) {
  sum += arrNumbers[i];
}
alert(sum);
