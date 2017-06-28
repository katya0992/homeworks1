var options = {
//era: 'long',
//year: 'numeric',
//month: 'long',
//day: 'numeric',
weekday: 'long',
//timezone: 'UTC',
//hour: 'numeric',
//minute: 'numeric',
//second: 'numeric'
};

// задача 1
function day1 (year) {
	var date = new Date (year, 0, 1);
	return date.toLocaleString ("ru", {weekday: 'long'})
}
console.log(day1(2016));


// задача 2
var dateStr = "29.03.1985";
var arr = dateStr.split(".");
var newDate = new Date (arr[2], arr[1]-1, arr[0]);
var day = newDate.toLocaleString ("ru", {weekday: 'long'});
console.log(day);


// задача 3
var delta = (Date.now() -  new Date(2017,0,1)) / (1000*3600*24*7);
console.log(delta.toFixed(), "недель");

