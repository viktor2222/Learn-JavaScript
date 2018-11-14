//Rewrite the "switch" into an "if"
switch (browser) {
  case 'IE':
    alert( 'О, да у вас IE!' );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Да, и эти браузеры мы поддерживаем' );
    break;

  default:
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}

let browser;
if(browser == 'Edge'){
  alert("You've got the Edge!");
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}
