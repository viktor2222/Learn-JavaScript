//Day a specified number of days ago
function getDateAgo(date, days) {

  let copyDate = new Date(date);

  copyDate.setDate(date.getDate() - days);
  return copyDate.getDate();

}

let date = new Date(2016, 3, 4);

alert(getDateAgo(date, 2));
alert(getDateAgo(date, 32));
alert(getDateAgo(date, 365));
