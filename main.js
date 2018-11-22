//Check for argument-undefined
function f(x) {

  alert( arguments.length ? 1 : 0 );

}

f(undefined);
f();

//The sum of the arguments
function sum() {
  let rezult = 0;

  for(let i = 0; i < arguments.length; i++) {
    rezult += arguments[i];
  }
  return rezult;

}

alert( sum() );
alert( sum(1) );
alert( sum(1, 2) );
alert( sum(1, 2, 3) );
alert( sum(1, 2, 3, 4) );
