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
function min(a, b) {
  if(a < b){
    return a;
  } else {
    return b;
  }
}
//Функция pow(x,n)
function pow(x, n){
  let result = x;

  for(a = 1; a < n; a++){
    result *= x;
  }
  return result;
}
let x = prompt('enter x');
let n = prompt('enter n');

if(n <= 1){
  alert('Power ' + n + ' not supported, please enter good power and > 1');
} else{
  alert(pow(x, n));
}
