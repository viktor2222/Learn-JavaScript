//Create a date
let date = new Date(2012, 2, 20, 3, 12, 0);

alert(date);

//Week day
function getWeekDay(date) {
  let days = ['sun', 'mon', 'tue', 'wen', 'thu', 'fri', 'sat'];

  return days[date.getDay()];
}

alert( getWeekDay(date) );
