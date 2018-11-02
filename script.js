let today = new Date();
let day = today.getDay();
let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log('Today is : ' + dayList[day]);

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getHours();


// append AM/PM
hour = 13;
let prepand = (hour >= 12) ? ' PM' : ' AM';



hour = (hour => 12) ? hour - 12 : hour;

if (hour === 0 && prepand === 'PM') {
	if (minute === 0 && second === 0) {
		hour = 12;
		prepand = ' Noon';
	} else {
		hour = 12;
		prepand = ' PM';
	}
}

if (hour === 0 && prepand === ' AM') {
	if (minute === 0 && second === 0) {
		hour = 12;
		prepand = ' Midnight';
	} else {
		hour = 12;
		prepand = ' AM';
	}
}

console.log('Current Time : ' + hour + ' : ' + minute + ' : ' + second + prepand);

// tutorial link: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php