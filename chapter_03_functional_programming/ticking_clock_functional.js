/**
Example of the Ticking Clock using functional JavaScript (Good!)
*/

// In functional programms, we should use functions over values wherever possible
const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => console.log(message)

// Takes a date object and returns an object for clock time that contains hours, minutes and seconds
const serializeClockTime = date => ({
	hours: date.getHours(),
	minutes: date.getMinutes(),
	seconds: date.getSeconds()
})

// Takes a date object and returns an object where hours are converted to civilian time.
const civilianHours = clockTime => ({
	...clockTime,
	hours: (clockTime.hours > 12) ? clockTime.hours - 12 : clockTime.hours
})

// Takes the clock time object and appends time of day, AM or PM, to that object.
const appendAMPM = clockTime => ({
	...clockTime,
	ampm: (clockTime.hours >= 12) ? "PM" : "AM"
})

/* Takes a target function and returns a function that will send a time to the target.
   In this example the target will be console.log. */
const display = target => time => target(time)

/* Takes a template string and uses it to return clock time formatted based upon the criteria
   from the string. In this example, the template is "hh:mm:ss tt". From there, 
   formatClock will replace the placeholders with hours, minutes, seconds, and time of day. */
const formatClock = format =>
	time => 
		format.replace("hh", time.hours)
			  .replace("mm", time.minutes)
			  .replace("ss", time.seconds)
			  .replace("tt", time.ampm)

/* Takes an object's key as an argument and prepends a zero to the value stored 
   under that objects key. It takes in a key to a specific field and prepends values
   with a zero if the value is less than 10. */
const prependZero = key => clockTime => ({
	...clockTime,
	[key]: (clockTime[key] < 10) ?
		"0" + clockTime[key] : 
		clockTime[key]
})
