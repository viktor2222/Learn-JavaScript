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
// let str = "asscx";
//
// function ucFirst(str){
//
//   if(str.charAt(0) == ""){
//     return "please enter it correctly";
//   } else {
//     return str[0].toUpperCase() + str.slice(1);;
//   }
//
// };
// alert(ucFirst(str));
// let str;
//
// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();
//
//   return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
// }
//
// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );
// let str;
// let maxLength;
//
// function truncate(str, maxLength) {
//
//   if(str.length > maxLength) {
//     return str.slice(0, maxLength - 3) + '...';
//   }
//
//   return str;
// }
//
// alert( truncate("Happy New Year New String old", 20) );
// alert( truncate("Hello all!", 20) );
// let user = {};
// user.name = "Ahmeed";
// user.surname = "Ahmedow";
// user.name = "Mahmud"
// delete user.name;
//
// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
//
// let schedule = {};
//
// alert(isEmpty(schedule));
//
// schedule["8:30"] = "подъём";
//
// alert( isEmpty(schedule) );
// let salaries = {
//   "Vasya": 100,
//   "Petya": 300,
//   "Dasha": 250
// };
// let sum = 0;
//
// for (let name in salaries){
//   sum += salaries[name];
// }
// alert(sum);
// let salaries = {
//   "Vasya": 100,
//   "Petya": 300,
//   "Dasha": 250
// };
//
// let max = 0;
// let maxName = "";
//
// for (let name in salaries) {
//   if(max < salaries[name]){
//     max = salaries[name];
//     maxName = name;
//   }
// }
// alert(maxName || "propertiesClear");
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
//
// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// };
//
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if(isNumeric(obj[key])) {
//       obj[key] *= 2;
//     }
//   }
// };
// multiplyNumeric(menu);
// alert( "menu width = " + menu.width + " height = " + menu.height + " title = " + menu.title );
//Get the last element of an array
// let goods = [1, 4, "taaaaa", "asrs"];
//
// let lastItem = goods[goods.length - 1];
//
// alert(lastItem);
//add an element to the end of an arbitrary array
// let goods = [2, 3, 5, 6, "str"];
// goods.push("arr", "str");
//
// alert(goods);
