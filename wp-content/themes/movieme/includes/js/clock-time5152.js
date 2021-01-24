/* 09 - Flipclock
-----------------------------------------------------------*/

var clock;


	// Grab the current date
	var currentDate = new Date();

	// Set some date in the future. In this case, it's always Jan 1
	futureDate = new Date(jQuery('.clock').data('clock-time'))

	// Calculate the difference in seconds between the future and current date
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

	// Instantiate a coutdown FlipClock
	clock = jQuery('.clock').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true
	});