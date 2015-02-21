function notificationTest() {

	$(".mainBody").append("<button onclick='pushNotification()'>Push It Real Good</button>");

} 

function pushNotification(){

	$(".mainBody").append("<p>Attempting Push</p>");

    navigator.notification.alert(
	'You are the winner!',  // message
	alertDismissed,         // callback
	'Game Over',            // title
	'Done'                  // buttonName
    );
}
function alertDismissed() {
    // do something
}
