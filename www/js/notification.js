function notification(){

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
