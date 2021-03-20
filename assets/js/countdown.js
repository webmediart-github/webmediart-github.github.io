// Set the date we're counting down to
var countDownDate = new Date("May 28, 2022 00:00:00").getTime();

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for remaining days
var days = Math.floor(distance / (1000 * 60 * 60 * 24));

// Display the result in the element with id="countdown"
if (days < -1) {
	document.getElementById("countdown").innerHTML = "<b>Vielen Dank für die schöne Feier mit Euch!</b>";
}else if (days == -1){
	document.getElementById("countdown").innerHTML = "Heute ist es soweit!";
}else if (days == 0){
	document.getElementById("countdown").innerHTML = "Morgen ist es soweit!";
}else{
	document.getElementById("countdown").innerHTML = "In <b>" + days + "</b> Tagen ist es soweit!";
	//  + hours + "h "  + minutes + "m " + seconds + "s ";
}
