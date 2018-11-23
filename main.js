// last day of the month
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0)
  return date.getDate();

}

alert( getLastDayOfMonth(2016, 0) );
alert( getLastDayOfMonth(2015, 1) );
alert( getLastDayOfMonth(2017, 1) );

//How many seconds have passed today?
function getSecondsToday() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let rez = now - today;

  return Math.floor(rez / 1000);
}

alert(getSecondsToday());
