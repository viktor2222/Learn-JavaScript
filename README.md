<h1>Introduction-To-JavaScript</h1>

<h2>Learned-31-10-2018</h2>  

<ul>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/c2e10d303d8a194fd8720725e186cb53dff81162">Introduction</a> - All here to start learning JavaScript</li>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/7d56630857602149f857d1b1b3e532d2125775f2">Functions</a> - function is a block of code designed to perform a particular task. Function is executed when something invokes it.</li>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/d4720f6bfcd7cc4f00924d8743e62f7d6bacc97f">Arrays</a> - are used to store multiple values in a single variable.</li>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/cfca26f415ec0995aacab4e2148a38c3c32d04f3">Conditional</a> - сonditional expressions are used to perform different actions for conditions</li>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/add572b87f76b35b0eac86bdb8d99bc48711769c">Loops, iterators</a> - to run the same code again and again, each time with another value.</li>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/efff7ef7b3f42ded664a7dd4cd91b2ee9ae02fc0">Higher Order Functions</a> - is a function that can take another function as an argument, or that returns a function as a result.</li>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/083c22f3cd253af6cfacc97cef8a8d60b25e3a86">Objects</a> - object properties can be both primitive values, other objects, and functions.</li>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/30c582cce04375c71f386538138b3780b99cffb0">Classes</a></li>
</ul>

<h2>Learned-01-11-2018</h2>

<ul>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/4f84adcea9c43cf7b3cd5fce9e093781b07b8051">Methods Calls</a> - in classes</li>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/d7e42c2ea4118e8ff19dbe7c1afc89b850655247">Inheritance II</a></li>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/9d210256f4a69d3a1fa7e4cd72be5e76cad56c6c">Inheritance III</a></li>
</ul>

<h2>Learned-02-11-2018</h2>

<ul>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/fbc4e40a726a38299238db0275acf2e6728b52ff">Inheritance IV</a> - in classes</li>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/03009736bffd8c7c10acb7fcae1b3dbac725d028">Inheritance V</a></li>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/b6b3cc9f954825d8aaeb0cf24960dc31f055372b">Static Methods</a></li>
  <li><a href="https://caniuse.com">caniuse.com II</a></li>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/b5d34b91aeee576429898c606bca64cf14aa965f">Redefine the syntax ES6 to ES5</a></li>
  <li><a href="https://github.com/viktor2222/Learn-JavaScript/commit/868d2e0192a37e49a8a796d00f1622f33c009b87">npm init</a></li>
</ul>

<h2>Description-31-10-2018</h2>

<h4>Introduction includes:</h4>

<ul>
  <li>string concatenation - the + operator does string concatenation as soon as one of its operands is a string.</li>
  <li>properties - are the values associated with a JavaScript object.
    <ul>Syntax:
      <li>objectName.property   // person.age</li>
      <li>objectName["property"]    // person["age"]</li>
      <li>objectName[expression]    // x = "age"; person[x]</li>
    </ul>
  </li>
  <li>data-types - six data types: boolean, null, undefined, number, string, symbol</li>
  <li>comments - one-line(//), multi-line (/* */)</li>
  <li>built-in-objects - these objects are Date, Math, String, Array, and Object.</li>
  <li>arithmetic-operators - addition (+), subtraction (-), multiplication (*), division (/), modulus (division remainder, %), increment (++), decrement(--)</li>
  <li>scope - availability or inaccessibility of variables from different parts of the code</li>
</ul>

<h4>Functions</h4>

<ul>
  <li>how to call a function?</li>
  <li>Parameters and Arguments - A parameter is a variable in a method definition. When a method is called, the arguments are the data you pass into the method's parameters. Parameter is variable in the declaration of function. Argument is the actual value of this variable that gets passed to function.</li>
  <li>Return - the return statement ends function execution and specifies a value to be returned to the function caller.</li>
  <li>Arrow Functions - has a shorter syntax than a function expression. They cannot be used as constructors.</li>
  <li>Concise Body Arrow Functions - arrow functions can have either a "concise body" or the usual "block body". In a concise body, only an expression is specified, which becomes the implicit return value. In a block body, you must use an explicit return statement.</li>
</ul>

<h4>Arrays</h4>

<ul>
  <li>Create an Array - syntax: var array_name = [item1, item2, ...];</li>
  <li>Update Elements - change an element in an array by its index ([0])</li>
  <li>Arrays with let and const - arrays are declared through let can be changed but the const can not be changed, but you can mutate to a new array</li>
  <li>The .length property - will report the number of characters in the array</li>
  <li>The .push() Method - adds one or more elements to the end of an array and returns the new length of the array.</li>
  <li>The .pop() Method - removes the last element from an array and returns that element. Сhanges the length of the array.</li>
  <li>The .shift() method - removes the first element from an array and returns that removed element.. Сhanges the length of the array.</li>
  <li>The .unshift() method - can prepend one or more elements to the beginning of an array. This alters the array on which the method was called.</li>
  <li>.indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.</li>
  
</ul>

<h4>Conditional</h4>

<ul>
  <li>if statement - if the condition is true, then the code block will be executed</li>
  <li>If...Else Statements - is executed when block "if" with the same condition false</li>
  <li>The switch keyword - to select one of many code blocks to be executed.</li>
</ul>

<h4>Loops</h4>

<ul>
  <li>for - loops through a block of code a number of times</li>
  <li>for/in - loops through the properties of an object</li>
  <li>while - loops through a block of code while a specified condition is true</li>
  <li>do/while - also loops through a block of code while a specified condition is true</li>
</ul>

<h4>Iterators</h4>

<ul>
  <li>The .forEach() Method - calls a provided function once for each element in an array, in order.</li>
  <li>The .map() Method - creates a new array with the results of calling a provided function on every element in the calling array.</li>
  <li>The .filter() Method - creates a new array with all elements that pass the test implemented by the provided function.</li>
  <li>The .findIndex() Method - returns the index of the first element in the array that satisfies the provided testing function. if returns -1, no element passed the test.</li>
  <li>The .reduce() Method - executes a reducer function (that you provide) on each member of the array resulting in a single output value.</li>
</ul>

<h4>Higher Order Functions</h4>

<ul>
  <li>Functions as Parameters - is a function that is passed as a parameter to another function, and the callback function is run inside of the function it was passed into.</li>
</ul>

<h4>Objects</h4>

<ul>
  <li>Accessing Properties - provide access to an object's properties by using the dot notation or the bracket notation.</li>
  <li>Methods - methods are actions that can be performed on objects.</li>
  <li>Pass By Reference - іn Pass by Reference, Function is called by directly passing the reference/address of the variable as the argument. Changing the argument inside the function affect the variable passed from outside the function.</li>
  <li>Looping Through Objects - аfter converting an object into an array, you can execute a loop over an ordinary array.</li>
  <li>The this Keyword - the this keyword refers to the object it belongs to.
    <ul>
      <li>In a method, this refers to the owner object.</li>
      <li>Alone, this refers to the global object.</li>
      <li>In a function, this refers to the global object.</li>
      <li>In a function, in strict mode, this is undefined.</li>
      <li>In an event, this refers to the element that received the event.</li>
      <li>Methods like call(), and apply() can refer this to any object.</li>
    </ul>
  </li>
  <li>Getters - the get syntax binds an object property to a function that will be called when that property is looked up.</li>
  <li>Setters - the set syntax binds an object property to a function to be called when there is an attempt to set that property.</li>
  <li>Destructured Assignment - makes it possible to unpack values from arrays or properties from objects to distinct variables.</li>
</ul>

<h4>Classes</h4>

<ul>
  <li>Introduction to Classes - Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.</li>
  <li>Constructor - the constructor method is a special way to create and initialize an object created using a class.</li>
</ul>

<h2>Description-01-11-2018</h2>

<h4>Classes</h4>

<ul>
  <li>Inheritance - With inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share. The child classes inherit the properties and methods from their parent class.</li>
</ul>

<h2>Description-02-11-2018</h2>

<h4>Classes</h4>

<ul>
  <li>Static Methods - calls are made directly on the class and are not callable on instances of the class. The static keyword defines a static method for a class. These are often utility functions, such as functions to create or clone objects.(syntax: static nameMethod(){...})</li>
</ul>

<h4>Browser compatibility and transpilation</h4>

<ul>
  <li>Browser compatibility and transpilation - in 2015 a new version of javascript ES6 has been released which is not supported by all browsers. To solve this problem, there is a Bable that compiles the ES6 syntax to the old ES5</li>
  <li>caniuse.com - this is a site where statistics are maintained by browsers HTML, Css, JavaScript</li>
</ul>

<h2>Question-02-11-2018</h2>

<p>Did I correctly understand the static methods? > Description-02-11-2018 > Static Methods</p>
