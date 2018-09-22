// Log Clock Time every Second
setInterval(logClockTime, 1000);

function logClockTime() {

	// Get time string as civilian time
	var time = getClockTime();

	// Clear the Console and log the time
	console.clear();
	console.log(time);

}

function getClockTime() {

	// Get the current time
	var date = new Date();
	var time = "";


	// Convert to civilian time
	if(time.hours == 12) {
		time.ampm = "PM";
	} else if (time.hours > 12) {
		time.ampm = "PM";
		time.hours -= 12;
	}

	// Prepend a 0 on the hours to make double digits
	if (time.hours < 10) {
		time.hours = "0" + time.hours;
	}

	// Prepend a 0 on the minutes to make double digits
	if (time.minutes < 10) {
		time.minutes = "0" + time.minutes;
	} 

	// Prepend a 0 on the seconds to make double digits
	if (time.seconds < 10) {
		time.seconds = "0" + time.seconds;
	} 

	// Format the clock time as a string "hh:mm:ss tt"
	return time.hours + ":"
		+ time.minutes + ":"
		+ time.seconds + " "
		+ time.ampm;
}
