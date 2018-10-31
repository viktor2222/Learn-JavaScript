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
