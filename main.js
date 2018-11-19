//Rewrite the function using '?' or '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// function checkAge(age){
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }
//
// function checkAge(age){
//   return (age > 18) || confirm('Родители разрешили?');
// }
//Function min(a, b)
// function min(a, b) {
//   if(a < b){
//     return a;
//   } else {
//     return b;
//   }
// }
// //Функция pow(x,n)
// function pow(x, n){
//   let result = x;
//
//   for(a = 1; a < n; a++){
//     result *= x;
//   }
//   return result;
// }
// let x = prompt('enter x');
// let n = prompt('enter n');
//
// if(n <= 1){
//   alert('Power ' + n + ' not supported, please enter good power and > 1');
// } else{
//   alert(pow(x, n));
// }

//Automated testing with mocha
// function pow(x, n) {
//   var result = 1;
//
//   for (var i = 0; i < n; i++) {
//     result *= x;
//   }
//
//   return result;
// }
// alert( 0.1 + 0.2 == 0.3 );
let str = "asscx";

function ucFirst(str){

  if(str.charAt(0) == ""){
    return "please enter it correctly";
  } else {
    return str[0].toUpperCase() + str.slice(1);;
  }

};
alert(ucFirst(str));
