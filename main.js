// alert('Я – JavaScript!');
//
// let admin;
// let name = "John";
// admin = name;
// alert(admin);

// let name = prompt('What is your name', '');
//
// alert('Your name: ' + name);
// let officialNameScript = prompt('What is the “official” name of JavaScript?','');
//
// if(officialNameScript == 'ECMAScript'){
//   alert('Right!');
// } else{
//   alert('Didn’t know? ECMAScript!');
// }
// let number = prompt('Please enter number','');
// if(number > 0){
//   alert(1);
// } else if (number < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }
let userName = prompt('Please enter your login');

if(userName == 'Admin'){
  let password = prompt('enter your password', '');

  if(password == 'TheMaster'){
    alert('Welcome!');
  } else if (password == null) {
    alert('Canceled.');
  } else {
    alert('Wrong password');
  }
} else if (userName == null){
  alert('Canceled.');
} else {
  alert('I don’t know you');
}

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
result = (a + b < 4) ? 'Below' : 'Over';

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
