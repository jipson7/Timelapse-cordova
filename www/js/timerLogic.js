var totalNumberOfPicturesTaken = 0;

var currentTimeDelay;

var secondsLeftTotal;

var timerIsInitialized = false;

var timeRemainingCurrentCycle;

var timerHolder;

var secondsCounter;

function resetAllTimerInstance() {

	totalNumberOfPicturesTaken = 0;

	currentTimeDelay = null;

	secondsLeftTotal = null;

	timerIsInitialized = false;

	timeRemainingCurrentCycle = null;

	clearTimeout(timerHolder);

	clearInterval(secondsCounter);

}

function cancelTimelapseRecording() {

	resetAllTimerInstance();

	$(".mainBody").empty();

	mainInit();

}

function timerLogic(duration, frequency) {

	if (!timerIsInitialized) { 

		secondsLeftTotal = duration * 24 * 60 * 60;

		currentTimeDelay = frequency * 60;

		timeRemainingCurrentCycle = currentTimeDelay;
		
		startSecondsCounter();

		restartCountdown();

		timerIsInitialized = true;
	
	}


	var timerTitle = $("<div class = 'row well well-lg text-center'><h1>Next memory in:</h1></div><br>");

	var timeRemaining = $("<div id = 'timeRemainContainer' class = 'text-center col-xs-6'>" + getRemainingTime() + "</div>");

	var minusButton = $("<button type='button' class = 'col-xs-offset-4 col-xs-1 btn btn-default'>-</button>");

	var plusButton = $("<button type='button' class = 'col-xs-1 btn btn-default'>+</button><br><br><br><br><br><br>");

	var addMemoryButton = $("<div class='row'><button type='button' class='col-xs-offset-4 col-xs-4 btn btn-primary btn-xl'>Add Memory</button></div>");

	var cancelTimerButton = $("<button onclick='cancelTimelapseRecording()'>Cancel</button>");


	$(".mainBody").append(timerTitle);
	$(".mainBody").append(timeRemaining);
	$(".mainBody").append(minusButton);
	$(".mainBody").append(plusButton);
	$(".mainBody").append(addMemoryButton);
	$(".mainBody").append(cancelTimerButton);
}


function getRemainingTime() {

	var secondsRemainingString;

	var minutesRemainingString;
 	
	var minutesRemaining = Math.floor(timeRemainingCurrentCycle / 60);

	var secondsRemaining = Math.floor(timeRemainingCurrentCycle % 60);


	if (secondsRemaining < 10) {

		secondsRemainingString = "0" + secondsRemaining.toString();

	} else {

		secondsRemainingString = secondsRemaining.toString();

	}

	if (minutesRemaining < 10) {

		minutesRemainingString = "0" + minutesRemaining.toString();

	} else {

		minutesRemainingString = minutesRemaining.toString();

	}

	return (minutesRemainingString + ":" + secondsRemainingString);

}

function startSecondsCounter() {

	secondsCounter = setInterval(function () {
	
		secondsLeftTotal--;	
		timeRemainingCurrentCycle--;
		updateRemainingTime();

	}, 1000);


}

function restartCountdown() {


	timeRemainingCurrentCycle = currentTimeDelay;

	if (secondsLeftTotal < currentTimeDelay) {

		takePicture();

		endTimerProcess();

		return;

	}

	timerHolder = setTimeout(function () {

		restartCountdown();

		takePicture();

	}, currentTimeDelay * 1000);



}

function endTimerProcess() {
	clearInterval(secondsCounter);
	$("#timeRemainContainer").text("Done");

	//TODO
	//Fill in a function here called buildAlbum or something, now that all the pictures are taken

}

function updateRemainingTime() {


	$("#timeRemainContainer").text(getRemainingTime());

}

function takePicture() {

	//do nothing for now
	//
	//
	
	totalNumberOfPicturesTaken++;

}
