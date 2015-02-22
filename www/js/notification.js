function notificationTest() {

    //waits for user to click the notification
    cordova.plugins.notification.local.on("click", function(notification) {
	showConfirm();
    });

    //adds a notificaiton that TimeLapse is taking a photo
    window.plugin.notification.local.add({message:'TimeLapse Moment',
					  id:1,
					  title: 'Reminder',
					  json:JSON.stringify({ test: 123 })});
    //Callback function to showConfirm()
    function onConfirm(buttonIndex) {
	if (buttonIndex === 1){//Take Picture
	    $(".mainBody").append("<p>start</p>");//temporary
	    startNotificationTimer(5);
	}else {//Extend 5 sec
	    $(".mainBody").append("<p>Extend to 30 sec</p>");//temporary
	    startNotificationTimer(30);
	}
    }  

    //Displays a counter given the amount of time
    function startNotificationTimer(setTime) {
	var timeToWait = setTime;
	var timeRemaining = $("<div id = 'countdownDisplay'>" + timeToWait + "</div>");
	$(".mainBody").append(timeRemaining);
	var notifyIntervalClock = setInterval(function() {
	    //display time
    	    timeToWait--;
    	    $timeRemaining = $("<div id = 'countdownDisplay'>" + timeToWait + "</div>");
	    $("#countdownDisplay").text(timeToWait);
	}, 1000);

	setTimeout(function() {
	    clearInterval(notifyIntervalClock);
	   //do something after 5 seconds has passed
	    $(".mainBody").append("<p>Done<\p");//temp
	    $(".mainBody").append("<p>Call Take Photo function</p>");//temporary(placeholder)
	}, timeToWait * 1000);
	
    }

    // Show a custom confirmation dialog
    function showConfirm() {
	navigator.notification.confirm(
            'Picture Time!', // message
            onConfirm,            // callback to invoke with index of button pressed
            'TimeLapse',           // title
            ['Take Picture','Extend 5 sec']         // buttonLabels
	);
    }  
} 




