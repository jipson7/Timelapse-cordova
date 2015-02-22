function notifyUser() {


    //waits for user to click the notification
    cordova.plugins.notification.local.on("click", function(notification) {
	showConfirm();
    });

    //adds a notificaiton that TimeLapse is taking a photo
    window.plugin.notification.local.add({message:'Tap to take a photo or dismiss',
					  id:1,
					  title: 'Timelapse',
					  json:JSON.stringify({ test: 123 })});
    //Callback function to showConfirm()
    function onConfirm(buttonIndex) {
	if (buttonIndex === 1){//Take Picture

		//do nothing for now

	}else {//Extend 5 sec

		//do nothing for now
	}
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




