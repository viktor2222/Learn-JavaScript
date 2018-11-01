//string-concatenation
console.log('Hello'+'World');//Inside a console.log() statement, concatenate the two strings 'Hello' and 'World'
console.log('Hello'+' '+'World');//include a space (' ') between the two words.

//properties
console.log('Teaching the world how to code'.length);//Use the .length property to log the number of characters in the following string to the console

//methods
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

//data-types
console.log('JavaScript');
console.log(2011);
console.log('Woohoo! I love to code! #codecademy');
console.log(20.49);

//comments
console.log('It was love at first sight.');
//Opening line
/*
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/

//built-in-objects
console.log(Math.random() * 100);//Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.
console.log(Math.floor(Math.random() * 100));//Now, use Math.floor() to make the output a whole number.Inside the console.log you wrote in the last step, put Math.random() * 100 inside the parentheses of Math.floor().
console.log(Math.ceil(43.8));//Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number.Use this method with the number 43.8. Log the answer to the console.
console.log(Number.isInteger(2017));//Use the JavaScript documentation to find a method on the built-in Number object that checks if a number is an integer.

//arithmetic-operators
console.log(21 + 3.5);//add 3.5 to your age.
console.log(2018 - 1969);//The answer is how many years it's been since the 1969 moon landing.
console.log(65 / 240);//divide 65 by 240
console.log(0.2708 * 100);//That's the percent of the sun that is made up of helium. Assuming we could stand on the sun, we'd all sound like chipmunks!


//Variables

//Create a Variable: var

//Declare a variable named favoriteFood using the var keyword and assign to it the string 'pizza'.
var favoriteFood = 'pizza';
console.log(favoriteFood);

//Declare a variable named numOfSlices using the var keyword and assign to it the number 8.
var numOfSlices = 8;
console.log(numOfSlices);

//Create a Variable: let

//Create a let variable called changeMe and set it equal to the boolean true.
let changeMe = true;

//On the line after changeMe is declared, set the value of changeMe to be the boolean false.To check if changeMe was reassigned, log the value saved to changeMe to the console
changeMe = false;
console.log(changeMe);

//Create a Variable: const

//Create a constant variable named entree and set it to equal to the string 'Enchiladas'
const entree = 'Enchiladas'

//Just to check that you've saved the value of 'Enchiladas' to entree, log the value of entree to the console.
console.log(entree);
//Great, let's see what happens if you try to reassign a constant variable.Paste the following code to the bottom of your program.entree = 'Tacos'This code throws the following error when you run your code:TypeError: Assignment to constant variable. After you clear this checkpoint, if you want to see about another quirk of const in action open the hint!
entree = 'Tacos'

//Mathematical Assignment Operators

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements.
console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);

//The Increment and Decrement Operator

let gainedDollar = 3;
let lostDollar = 50;

//Using the increment operator, increase the value of gainedDollar.
gainedDollar++;

//Using the decrement operator, decrease the value of lostDollar.
lostDollar--;

//String Concatenation with Variables

//Create a variable named favoriteAnimal and set it equal to your favorite animal.
let favoriteAnimal = 'cat';

//Use console.log() to print 'My favorite animal: ANIMAL' to the console. Use string concatenation so that ANIMAL is replaced with the value in your favoriteAnimal variable.
console.log('My favorite animal: ' + favoriteAnimal + '.');

//String Interpolation

//Create a variable called myName and assign it your name.
const myName = 'Viktor';

//Create a variable called myCity and assign it your favorite city's name.
const myCity = 'Lviv';

//Use a single template literal to interpolate your variables into the sentence below. Use console.log() to print your sentence to the console in the following format:My name is NAME. My favorite city is CITY. Replace NAME and CITY in the string above by interpolating the values saved to myName and myCity.
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

//typeof operator

let newVariable = 'Playing around with typeof.';

//Use console.log() to print the typeof newVariable.
console.log(typeof newVariable);

//Great, now let's check what happens if we reassign the variable. Below the console.log() statement, reassign newVariable to 1.
newVariable = 1;

console.log(typeof newVariable);


//scope
//Blocks and Scope

//At the top of main.js, declare a const variable, named city set equal to 'New York City'. This variable will exist outside of the block.
const city = 'New York City'

//Below the city variable, write a function named logCitySkyline. Write another variable using let named skyscraper and set it equal to 'Empire State Building'.
function logCitySkyline() {
  let skyscraper = 'Empire State Building';

  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());

//Global Scope

//At the top of main.js, write three global variables.
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

//Below the variables created in the previous step, write a function named callMyNightSky. Inside the function, include a return statement.
function callMyNightSky(){
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

console.log(callMyNightSky());

//Block Scope

//Within the logVisibleLightWaves() function, using const, create a variable lightWaves and set it equal to 'Moonlight'.
function logVisibleLightWaves() {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}

//Call the logVisibleLightWaves() function from outside the function.
logVisibleLightWaves()

//Beneath the function call, log the value of lightWaves to the console from outside the function. You'll notice that it logs a ReferenceError since the variable is tied to the block scope of the function!
console.log(lightWaves);

//Scope Pollution

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';
//Inside the callMyNightSky() function, on the very first line of the function body, assign the variable stars to 'Sirius'
const callMyNightSky = () => {
  stars = 'Sirius'
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

//Practice Good Scoping

//Inside the function body of logVisibleLightWaves(), beneath the region variable and before the provided console.log() statement, create an if statement that checks if the region is the 'The Arctic'.Beneath the variable in the if block, use console.log() to log the value of the block variable inside the if block.
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
    }

  console.log(lightWaves);
};

logVisibleLightWaves();


//functions
//Function Declarations

 //Let's create a function that prints a reminder to the console. Using a function declaration, create a function called getReminder().
function getReminder() {
  console.log('Water the plants.');
}
 //Using a function declaration, create a function called greetInSpanish().
function greetInSpanish(){
  console.log('Buenas Tardes.');
}

//Calling a Function

 //Define a function called sayThanks() as a function declaration. In the function body of sayThanks(), add code such that the function writes the following thank you message to the console when called: 'Thank you for your purchase! We appreciate your business.'
function sayThanks(){
 console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks();
sayThanks();
sayThanks();

//Parameters and Arguments

 //With name as a parameter, it can be used as a variable in the function body of sayThanks().
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks('Cole');

//Default Parameters

//Change the parameters of makeShoppingList() into default parameters : Assign 'milk' as the default value of item1. Assign 'bread' as the default value of item2. Assign 'eggs' as the default value of item3.
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList();

//Return

//Declare a function monitorCount() that has two parameters. The first parameter is rows and the second parameter is columns.
function monitorCount(rows, columns){
  return rows * columns;
}
//Declare a variable named numOfMonitors using the const keyword and assign numOfMonitors the value of invoking monitorCount() with the arguments 5 and 4.
const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

//Helper Functions

function monitorCount(rows, columns) {
  return rows * columns;
}
//Below monitorCount Create a function declaration named costOfMonitors that has two parameters, the first parameter is rows and the second parameter is columns. Leave the function body empty for now.
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

//Declare a variable named totalCost using the const keyword. Assign to totalCost the value of calling costOfMonitors() with the arguments 5 and 4 respectively.
const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

//Function Expressions

//Let's say we have a plant that we need to water once a week on Wednesdays. We could define a function expression to help us check the day of the week and the plant needs to be watered:
const  plantNeedsWater = function (day){
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
}
plantNeedsWater('Tuesday')
console.log(plantNeedsWater('Tuesday'));

//Arrow Functions

//Change plantNeedsWater() to use arrow function syntax.
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

//Concise Body Arrow Functions

//Let's refactor plantNeedsWater() to be a concise body. Notice that we've already converted the if/else statement to a ternary operator to make the code fit on one line.
const plantNeedsWater = day => day === 'Wednesday' ? true : false;


//Arrays

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

//Create an Array

//Declare a variable using const named hobbies and set it equal to an array with three strings inside of it.
const hobbies = ['drive', 'run', 'water'];
console.log(hobbies);

//Accessing Elements

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

//Create a variable named listItem and set it equal to the first item in the famousSayings array using square bracket notation ([]).
let listItem = famousSayings[0];

console.log(listItem);

//Now, console.log() the third element in the famousSayings array using bracket notation to access the element.
console.log(famousSayings[2]);

//Try to log the item at index [3] of famousSayings to the console. What is logged to the console?
console.log(famousSayings[3]);

//Update Elements

let groceryList = ['bread', 'tomatoes', 'milk'];
//Change the second element of the array groceryList to 'avocados'.
groceryList[1] = 'avocados';

//Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

//Below the two existing arrays, re-assign the element in index 0 of condiments to 'Mayo'.
condiments[0] = 'Mayo';
console.log(condiments);

//Below your code from Step 1, reassign condiments to be a new array that contains a single string ['Mayo']. Log the result to the console. Notice that you can re-assign elements in an array and re-assign an entire new array to a variable declared using the let keyword.
condiments = ['Mayo'];
console.log(condiments);

//Below your code from Step 2, re-assign the last item from the utensils array to 'Spoon'.
utensils[3] = 'Spoon';
console.log(utensils);

//The .length property

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

//Find the length of the objectives array and log it to the console.
console.log(objectives.length);


//The .push() Method

const chores = ['wash dishes', 'do laundry', 'take out trash'];

//Add two elements to the chores array using .push().
chores.push('drink', 'water');
//Use console.log to print your chores array to make sure your items were added.
console.log(chores);

//The .pop() Method

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

//Use the .pop() method to remove the last element from chores.In a line after you called chores.pop(), log chores to the console to make sure it worked.
chores.pop();
console.log(chores);

//More Array Methods

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

//Use the .shift() method to remove the first item from the array groceryList. Log the new groceryList to the console.
groceryList.shift();

//Under the code added in step 1, use the .unshift() method to add 'popcorn' to the beginning of your grocery list. After calling .unshift() on groceryList, log groceryList to the console. You may wish to delete the console.log() statement from the previous step.
groceryList.unshift('popcorn');
console.log(groceryList);

//You're in a hurry so you decide to ask a friend to help you with your grocery shopping. You want him to pick up the 'bananas', 'coffee beans', and 'brown rice'. Under the code you added for step 2, use .slice() to provide your friend with a list of these three things.
console.log(groceryList.slice(1, 4));

//After calling .slice() on groceryList, log the grocery list to the console one more time.
console.log(groceryList);

//Let's find the index of a particular element in groceryList using .indexOf(). Call .indexOf() on groceryList to find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex.
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

//arrays-24-10-2018

//Arrays and Functions

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
//Underneath the function call, log concept to the console to check if this reassignment mutated the array.
console.log(concept);

//Under the console.log() statement, define another function named removeElement that takes a parameter of newArr. Inside the function body call .pop() on newArr.
function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);
//After calling removeElement(concept), check the value of concept by logging it to console.
console.log(concept);

//Nested Arrays

//Let's make a nested array! Create a variable numberClusters. Assign as its value an array with three array elements. The first array element should hold the elements 1 and 2 in that order. The second array element should hold the elements 3 and 4 in that order. The third array element should hold the elements 5 and 6 in that order.
const numberClusters = [[1, 2], [3, 4], [5, 6]];

//Awesome, you made a nested array! Now declare a variable named target using the const keyword and assign to access the element 6 inside numberClusters.
const target = numberClusters[2][1];

//conditional

//What are Conditional Statements?

//create an if statement

//Now create an if statement. Provide the if statement a condition of sale. Inside the code block of the if statement, console.log() the string 'Time to buy!'.
//Notice that the code inside the if statement ran, since 'Time to buy!' was logged to the console.Below the sale variable declaration, but before the if statement, reassign sale to false. Run your code and observe what happens, we'll be changing this behavior in the next exercise.
let sale = true;

sale = false;

if(sale){
   console.log('Time to buy!');
   }

//If...Else Statements
//Add an else statement to the existing if statement. Inside the code block of the else statement, console.log() the string 'Time to wait for a sale.'
let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else{
  	console.log('Time to wait for a sale.');
	}
  //Comparison Operators

  //Using let, create a variable named hungerLevel and set it equal to 7.
  let hungerLevel = 7;

  //Write an if...else statement using a comparison operator. The condition should check if hungerLevel is greater than 7. If so, the conditional statement should log, 'Time to eat!'. Otherwise, it should log 'We can eat later!'.
  if(hungerLevel > 7){
     console.log('Time to eat!');
     } else{
       console.log('We can eat later!');
     }

  //Logical Operators
  //In main.js there are two variables mood and tirednessLevel.Let's create an if...else statement that checks if mood is 'sleepy' and tirednessLevel is greater than 8. If both conditions evaluate to true, then console.log() the string 'time to sleep'. Otherwise, we should console.log() 'not bed time yet'. After you press "Run", play around with the || operator and the ! operator! What happens if you negate the value of the entire statement with ! and switch to || instead of &&?
  let mood = 'sleepy';
  let tirednessLevel = 6;

  if(mood === 'sleepy' && tirednessLevel > 8){
    console.log('time to sleep');
    } else{
      console.log('not bed time yet');
    }

  //Truthy and Falsy
  //Change the value of wordCount so that it is truthy. This value should still be a number. After you make this change and run your code, 'Great! You've started your work!' should log to the console.
  let wordCount = 1;

  if (wordCount) {
    console.log("Great! You've started your work!");
  } else {
    console.log('Better get to work!');
  }

  //Change the value of favoritePhrase so that it is still a string but falsy. After you make this change and run your code, 'This string is definitely empty.' should log to the console.
  let favoritePhrase = '';

  if (favoritePhrase) {
    console.log("This string doesn't seem to be empty.");
  } else {
    console.log('This string is definitely empty.');
  }

  //Truthy and Falsy Assignment

  //Notice that text 'The pen is mightier than the sword' logged to the console. Which means the value of writingUtensil is 'pen'. What if we reassign the value of tool to 'marker'. Let's see what happens to the value of writingUtensil.
  let tool = 'marker';

  //Let's use short-circuit evaluation to assign a value to writingUtensil. Do not edit tool yet, we'll return to tool in the next step. Assign to writingUtensil the value of tool and if tool is falsy, assign a default value of 'pen'. Use short circuit evaluation to assign  writingUtensil variable below:
  let writingUtensil = tool || 'pen';

  console.log(`The ${writingUtensil} is mightier than the sword.`);

  //Ternary Operator

  let isLocked = false;

  if (isLocked) {
    console.log('You will need a key to open the door.');
  } else {
    console.log('You will not need a key to open the door.');
  }

  let isCorrect = true;

  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log('Incorrect!');
  }

  let favoritePhrase = 'Love That!';

  if (favoritePhrase === 'Love That!') {
    console.log('I love that!');
  } else {
    console.log("I don't love that!");
  }
  //Refactor, or edit, the first if...else block to use a ternary operator.
  isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

  //Refactor the second if...else block to use a ternary operator.
  isCorrect ? console.log('Correct!') : console.log('Incorrect!');

  //Refactor the third if...else block to use a ternary operator.
  favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

  //Else If Statements

  //In main.js there is already an if...else statement in place. Let's add an else if statement that checks if season is equal to 'winter'. Add another else if statement that checks if season is equal to 'fall'. Add a final else if statement that checks if season is equal to 'summer'.
  let season = 'summer';

  if (season === 'spring') {
    console.log('It\'s spring! The trees are budding!');
  } else if(season === 'winter'){
    console.log('It\'s winter! Everything is covered in snow.');
  }	else if(season === 'fall'){
    console.log('It\'s fall! Leaves are falling!')
  }	else if(season === 'summer'){
    console.log('It\'s sunny and warm because it\'s summer!');
  } else {
    console.log('Invalid season.');
  }

  //The switch keyword

  //Let's write a switch statement to decide what medal to award an athlete.
  let athleteFinalPosition = 'first place';

  switch (athleteFinalPosition){
    case 'first place':
      console.log('You get the gold medal!');
      break;
    case 'second place':
      console.log('You get the silver medal!');
      break;
    case 'third place':
      console.log('You get the bronze medal!');
      break;
    default:
      console.log('No medal awarded.');
      break;
  }


//LOOPS

//Repeating Tasks Manually

// Write your code below
//Create the variable vacationSpots, and assign its value to an array of three strings naming places you'd like to visit.
const vacationSpots = ['Lviv', 'Rivne', 'Kiev'];

//Next, console.log() each item in vacationSpots. Since we don't know loops yet, we have to console.log() each element in the array separately.
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//The For Loop

//Create a program that loops from 5 to 10 and logs each number to the console.
for (let counter = 5; counter <= 10; counter++) {
  console.log(counter);
};

//Looping in Reverse

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
  console.log(counter)
};

//Looping through Arrays

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
//Write a for loop that iterates through our vacationSpots array using i as the iterator variable. Inside the block of the for loop, use console.log() to log each element in the vacationSpots array after the string 'I would love to visit '. For example, the first round of the loop should print 'I would love to visit Bali' to the console.
for (let i = 0; i < vacationSpots.length; i++){
  console.log(vacationSpots[i]);
}
console.log('I would love to visit ' + vacationSpots[0]);

//Nested Loops

// Write your code below
//Make a variable called bobsFollowers and set it equal to an array with four strings representing the names of Bob's friends.
const bobsFollowers = ['Petro', 'Andriy', 'Vasyl', 'Volodya'];

//Make a variable called tinasFollowers and set it equal to an array with three strings representing the names of Tina's friends. Make exactly two of these the same as two of the friends in the bobsFollowers array.
const tinasFollowers = ['Petro', 'Volodya', 'Vika'];

let mutualFollowers = [];

//Create a nested loop that iterates through bobsFollowers as the array for the outer loop, and tinasFollowers as the array for the inner array. If the current element from the outer loop is the same as the current element from the inner loop, push the that element into the mutualFollowers array.
for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}

//The While Loop

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
//Below the cards array, declare a variable, currentCard, with the let keyword but don't assign it a value.
let currentCard;

//Create a while loop with a condition that checks if the currentCard does not have that value 'spade'. Inside the block of your while loop, add the following line of code: currentCard = cards[Math.floor(Math.random() * 4)]; Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We'll use this number to index the cards array, and assign the value of currentCard to a random element from that array.
while(currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

//Do...While Statements

//Create the variable cupsOfSugarNeeded, and assign it a number value of your choosing. The cups of sugar must be added to the batter one at a time. Declare the variable cupsAdded and assign it the value 0.
const cupsOfSugarNeeded = 5;
const cupsAdded = 0;

//We have a sweet tooth, so we want to add at least one cup of sugar to the batter even if the value of cupsOfSugarNeeded is 0. Create a do...while loop which increments cupsAdded by one while cupsAdded is less than cupsOfSugarNeeded.
do {
  cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded);

//The break Keyword

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
//Log each element from rapperArray in a for loop with the iterator variable rapperArrayIndex. Add a break inside your loop's block that breaks out of the loop if the element at the current index in the rapperArray is 'Notorious B.I.G.'.
for (let rapperArrayIndex = 0; rapperArrayIndex < (rapperArray.length); rapperArrayIndex++) {
  if(rapperArrayIndex > 2){
     break;
     }
  console.log(rapperArray[rapperArrayIndex])
}
console.log("And if you don't know, now you know.");



//Iterators

//Introduction to Iterators

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

//The .forEach() Method

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango. fruits.forEach(itemFruit => console.log('I want to eat a ' + itemFruit));

fruits.forEach(function(itemFruit){
  console.log('I want to eat a ' + itemFruit)
});

//The .map() Method

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Add your code under the animals array and before the line console.log(secretMessage.join('')); Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.
const secretMessage = animals.map(secretAnimal => {
  return secretAnimal[0];
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers.
const smallNumbers = bigNumbers.map(num => {
  return num / 100;
})
console.log(smallNumbers);

//The .filter() Method

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number =>{
  return number < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(latters => {
  return latters.length > 7;
});


//The .findIndex() Method

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];


//Invoke .findIndex() on the the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});
console.log(foundAnimal);

//Let's see if we can find the index of the first animal that starts with the letter 's'. Call .findIndex() on the animals array return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.
const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

console.log(startsWithS);

//The .reduce() Method

const newNumbers = [1, 3, 5, 7];

//Let's practice calling .reduce() and using console.log() to check the values as .reduce() iterates through the array. In main.js, there is an array of numbers, newNumbers. To start, declare a new variable named newSum using the const keyword. Assign to newSum the value of calling .reduce() on newNumbers. You don't need to provide any arguments to .reduce() yet. You'll also see a TypeError: undefined is not a function but we'll fix that after we add our callback function in the next step!
const newSum = newNumbers.reduce((accumulator, currentValue) =>{
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);
//Log the value of newSum to the console to see the return value of calling .reduce() on newNumbers.
console.log(newSum);
//While we have this code set up, let's also check what happens if you add a second argument to .reduce(). The second argument acts as an initial value for the accumulator. Add a second argument of 10 to .reduce().


//Higher Order functions

//Functions as Data

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

//Create a shorter-named variable, is2p2 that will be easier to work with, and assign checkThatTwoPlusTwoEqualsFourAMillionTimes as its value.
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();

//Use is2p2 to console.log() the name property of the function we assigned to is2p2.
console.log(is2p2.name);

//Functions as Parameters

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

//Save a variable, time2p2. Assign as its value the result of invoking the timeFuncRuntime() function with the checkThatTwoPlusTwoEqualsFourAMillionTimes() function. Write a higher-order function, checkConsistentOutput(). This function should have two parameters: a function and a value. It should call the argument function with the value two times. If the callback function produces the same result twice, it should return the result of the function call, otherwise, it should return the string 'This function returned inconsistent results'
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return 'This function returned inconsistent results'
    }
};

//Invoke your checkConsistentOutput() with the addTwo() function we wrote and a number as arguments.
checkConsistentOutput(addTwo, 10);


//Objects

//Creating Object Literals

// The spaceship we have so far looks good but, unfortunately, is not very fast at hyperspace travel due to having an inferior fuel source. Make a new spaceship object named fasterShip with the same color as spaceship but with a Fuel Type equal to 'Turbo Fuel'.
let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
};

//Accessing Properties

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Let's use the dot operator to access the value of numCrew from the spaceship object in the code editor. Create a variable crewCount and assign the spaceship's numCrew property to it.
let crewCount = spaceship.numCrew;

//Again using the dot operator, create a variable planetArray and assign the spaceship's flightPath property to it.
let planetArray = spaceship.flightPath;

//Bracket Notation

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

// Let's use bracket notation to access the value of 'Active Mission' from the spaceship object in the code editor. Create a variable isActive and assign the spaceship's 'Active Mission' property to it.
let isActive = spaceship['Active Mission'];

//Using bracket notation and the propName variable provided, console.log() the value of the 'Active Mission' property.
console.log(spaceship[propName]);

//Property Assignment

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Reassign the color property of the spaceship object to have a value of 'glorious gold'
spaceship.color = 'glorious gold';

//Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object.
spaceship.numEngines = 5;

//Use the delete operator to remove the 'Secret Mission' property from the spaceship object.
delete spaceship['Secret Mission'];

//Methods

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Below the retreatMessage variable in the code editor, create an alienShip object. It should contain a method .retreat() which will console.log() the retreatMessage. Add another method to your object literal. This method, .takeOff(), should console.log() the string 'Spim... Borp... Glix... Blastoff!'.
let alienShip = {
  retreat(){
    console.log(retreatMessage);
  },
  takeOff(){
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};

alienShip.retreat();
alienShip.takeOff();

//Nested Objects

let spaceship = {
  passengers: [{name: 'cap'}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
};

//Create a variable capFave and assign the captain's favorite food (the element in the 0th index of her 'favorite foods' array) to it. Make sure to use bracket and dot notation to get the value of the food through nested access (don't just copy the value into the variable!)
let capFave = spaceship.crew.captain['favorite foods'][0];

//Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). Make sure to use bracket and dot notation to get the passenger object through nested access (don't just copy the object into the variable!)
let firstPassenger = spaceship.passengers[0];

//Pass By Reference

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write a function greenEnergy() that has an object as a parameter and sets that object's 'Fuel Type' property to 'avocado oil'.
let greenEnergy = objParam => {
  objParam['Fuel Type'] = 'avocado oil'
};

//Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object's disabled property to true.
let remotelyDisable = obj => {
  obj.disabled = true
};

//Call your two functions with the spaceship object in the code editor, then console.log() the spaceship object to confirm those properties were changed/added.
greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);

//Looping Through Objects

let spaceship = {
    crew: {
    captain: {
        name: 'Lily',
        degree: 'Computer Engineering',
        cheerTeam() { console.log('You got this!') }
        },
    'chief officer': {
        name: 'Dan',
        degree: 'Aerospace Engineering',
        agree() { console.log('I agree, captain!') }
        },
    medic: {
        name: 'Clementine',
        degree: 'Physics',
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna',
        degree: 'Conservation Science',
        powerFuel() { console.log('The tank is full!') }
        }
    }
};

// Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew roles and names in the following format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

//Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew names and degrees in the following format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.
for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree} `)
};

//advantage objects

//The this Keyword

//In main.js there is an object robot, add a property of model and assign to it a value of '1E78V2'. Add another property, energyLevel and assign to it a value of 100. Inside the robot object, add a method named provideInfo. Inside the body of provideInfo(), return the following string by using interpolation: I am MODEL and my current energy level is ENERGYLEVEL. Replace 'MODEL' and 'ENERGYLEVEL' with the calling object's model and energyLevel property. Remember, to get the access to the calling object's properties inside a method, you have to use the this keyword!
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo(){
  	return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
	}
};

//Now to check .provideInfo() has access to the internal properties of robot. Log the result of calling .provideInfo() method on robot to the console.
console.log(robot.provideInfo());

//Arrow Functions and this

//Currently the .checkEnergy() method is not producing the correct output because it is using arrow function syntax. Refactor, or change, the method to use a function expression. You can write the function using either longhand or shorthand format. After refactoring the method, notice that .checkEnergy() has access to the other internal properties of the robot object.
const robot = {
  energyLevel: 100,
  checkEnergy(){
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

//Privacy

const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

//Below the robot object, reassign the _energyLevel property to 'high'.
robot._energyLevel = 'high';

//Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel. What will happen now that _energyLevel isn't a number? Call .recharge() on robot to find out. Notice that a funky string is printed to the console! This is known as a side-effect of type-coercion. No need to worry about what this means for now, but it's important to understand that you can cause unwanted side-effects when mutating objects and their properties.
robot.recharge();

//Getters

//In robot, create a getter method named energyLevel using the get keyword. Leave function body blank for now.Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator. If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel. Make sure you return the string and not logging it to the console. If this._energyLevel isn't a number it could be that the _energyLevel property was altered. Let's add a default return statement for when such a scenario arises. Add an else statement that returns 'System malfunction: cannot retrieve energy level'. Log the result of calling the getter method energyLevel on robot to the console. Notice that the method will return a formatted response rather than just accessing a property!
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};

console.log(robot.energyLevel);

//Setters

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  //Currently, in robot there is a getter method for numOfSensors but no setter method! What if we need to add or remove some sensors? Let's fix that problem. Add a setter method named numOfSensors using the set keyword. Provide a parameter of num. Leave the function body empty for now.Add a check to see if num is a number using the typeof operator. num should also be greater than or equal to 0. If both conditions are met, reassign this._numOfSensors to num.
  set numOfSensors(num){
    if(typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    }else{
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};

//Use the numOfSensors setter method on robot to assign _numOfSensors to 100.
robot.numOfSensors = 100
console.log(robot.numOfSensors);

//Factory Functions

//Instead of making individual robots like we've been doing, let's make a factory function to make robots as we please! Create a factory function named robotFactory that has two parameters model and mobile. Make the function return an object. In the object, add a key of model with the value of the model parameter. Add another property that has a key of mobile with a value of the mobile parameter. Then add a method named beep without a parameter that will log 'Beep Boop' to the console.
let robotFactory = (model, mobile) => {
  return{
    model: model,
    mobile: mobile,
    beep(){
      console.log('Beep Boop');
    }
  }
};

//Use your factory function by declaring a const variable named tinCan. Assign to tinCan the value of calling robotFactory with the first argument of 'P-500' and the second argument of true.
const tinCan = robotFactory('P-500', true);

tinCan.beep();

console.log(tinCan);

//Property Value Shorthand

//Use the property value shorthand and refactor the factory function in main.js
function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

//Destructured Assignment

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

//Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot. If you need a reminder on how to use destructured assignment, review the example in the narrative or check the hint.
const {functionality} = robot;

//Since functionality is referencing robot.functionality we can call the methods available to robot.functionality simply through functionality. Take advantage of this shortcut and call the .beep() method on functionality.
functionality.beep();

//Built-in Object Methods

//In main.js there is an object, robot. We'd like to grab the property names, otherwise known as keys, and save the keys in an array which is assigned to robotKeys. However, there's something missing in the method call.
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
//Object.entries() will also return an array, but the array will contain more arrays that have both the key and value of the properties in an object. Declare a const variable named robotEntries and assign to it the entries of robot by calling Object.entries().
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
//Now what if we want another object that has the properties of robot but with a few additional properties. Object.assign() sounds like a great method to use, but like the previous examples we should check Object.assign() documentation at MDN. Declare a const variable named newRobot. newRobot will be a new object that has all the properties of robot and the properties in the following object: {laserBlaster: true, voiceRecognition: true}. Make sure that you are not changing the robot object!
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)
console.log(newRobot);

//Classes

//Introduction to Classes

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior ++;
  }
};
const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console

//Constructor

//Create an empty class named Surgeon. Inside the Surgeon class, create a constructor() method that accepts two parameters: name and department. Inside the Surgeon constructor(), create name and department properties and set them equal to your input parameters.
class Surgeon{
  constructor(name, department){
    this.name = name;
    this.department = department
  }
}

//Instance

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

//Create an instance of the Surgeon class — set the name to 'Curry' and department to 'Cardiovascular'. Save the instance to a constant variable called surgeonCurry.
const surgeonCurry = new Surgeon ('Curry', 'Cardiovascular');

//Create an instance of the Surgeon class — set the name to 'Durant' and department to 'Orthopedics'. Save the instance to a constant variable called surgeonDurant.
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry.name + ': ' + surgeonCurry.department);
console.log(surgeonDurant.name + ': ' + surgeonDurant.department);

//Methods

//In the Surgeon constructor, prepend the name and department properties with an underscore (_).
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  //Under the constructor(), create a getter called name that returns the value saved to _name.
  get name(){
    return this._name;
  }
  //Under the name getter, create a getter called department that returns the value saved to _department.
  get department(){
    return this._department;
  }
  //Under the department getter, create a getter called remainingVacationDays that returns the value saved to _remainingVacationDays
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }
  //Under the remainingVacationDays getter, create a method called takeVacationDays that accepts one argument named daysOff. Inside of the method, subtract daysOff from the number saved to _remainingVacationDays. Set _remainingVacationDays to the result.
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');


//Methods calls

//In the Surgeon constructor, prepend the name and department properties with an underscore (_).
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  //Under the constructor(), create a getter called name that returns the value saved to _name.
  get name(){
    return this._name;
  }
  //Under the name getter, create a getter called department that returns the value saved to _department.
  get department(){
    return this._department;
  }
  //Under the department getter, create a getter called remainingVacationDays that returns the value saved to _remainingVacationDays
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }
  //Under the remainingVacationDays getter, create a method called takeVacationDays that accepts one argument named daysOff. Inside of the method, subtract daysOff from the number saved to _remainingVacationDays. Set _remainingVacationDays to the result.
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
//At the bottom of main.js, use console.log() to print the value saved to thename property of the surgeonCurry object.
console.log(surgeonCurry.name);
//Call .takeVacationDays() on surgeonCurry, with an input of 3.
surgeonCurry.takeVacationDays(3);

//After the call to .takeVacationDays(), use console.log() to print the value saved to the remainingVacationDays property of the surgeonCurry instance.
console.log(surgeonCurry.remainingVacationDays);
