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

		secondsLeftTotal = (Math.floor(secondsLeftTotal/currentTimeDelay) * currentTimeDelay);

		timeRemainingCurrentCycle = currentTimeDelay;
		
		startSecondsCounter();

		restartCountdown();

		timerIsInitialized = true;

		//local storage code for state change, is currently broken

		// window.localStorage.setItem("isActive", true);
	
  //       document.addEventListener("pause", function () {
		
  //           window.localStorage.setItem("isActive", false);
		
		// }, false);

  //       document.addEventListener("resume", function () {
		
				
  //           window.localStorage.setItem("isActive", true);
		
		
		// }, false);
	
	}


	var timerTitle = $("<div class = 'row well well-lg text-center'><h1>Next memory in:</h1></div><br>");

	//var minusButton = $("<button type='button' class = 'col-xs-offset-2 col-xs-2 btn btn-default'>-</button>");

	var timeRemaining = $("<div id = 'timeRemainContainer' class = 'col-xs-offset-3 text-center col-xs-4'>" + getRemainingTime() + "</div>");

	var plusButton = $("<button onclick='addMoreTime()' type='button' class = 'col-xs-2 btn btn-default'>+</button><br><br><br><br><br><br>");

	var addMemoryButton = $("<div class='row'><button onclick='addMemoryHandler()' id='addMemoryButton' type='button' class='col-xs-offset-2 col-xs-8 btn btn-primary btn-xl'>Add Memory Now</button></div><br><br><br>");

	var cancelTimerButton = $("<button id='cancelTimerButton'class='col-xs-offset-3 col-xs-6 btn btn-primary btn-xl' onclick='cancelTimelapseRecording()'>Finish</button>");


	$(".mainBody").append(timerTitle);
	//$(".mainBody").append(minusButton);
	$(".mainBody").append(timeRemaining);
	$(".mainBody").append(plusButton);
	$(".mainBody").append(addMemoryButton);
	$(".mainBody").append(cancelTimerButton);
}

function addMemoryHandler() {

	if (timeRemainingCurrentCycle > 10) {

		timeRemainingCurrentCycle = 5;	

		setTimeout(function() {

			clearTimeout(timerHolder);
		
			restartCountdown();

			if (timeRemainingCurrentCycle < secondsLeftTotal) {

				picRequestHandle();

			}

		
		}, 5000);



	} else {

		//do nothing for now
	
	}

}

function addMoreTime() {
	//TODO
	


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

		picRequestHandle();

		endTimerProcess();

		return;

	}

	timerHolder = setTimeout(function () {

		restartCountdown();

		picRequestHandle();

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

function picRequestHandle() {


	notifyUser();

	totalNumberOfPicturesTaken++;

	getPicture();


}

