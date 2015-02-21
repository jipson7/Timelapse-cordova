var currentTimeDelay = 5000; //current set to 10 000 milliseconds, or 10 seconds

var timerIsInitialized = false;

var timerHolder;

function timerLogic() {

	if (!timerIsInitialized) { 
		
		startCountdown(); 

		timerIsInitialized = true;
	
	}

	var timerTitle = $("<div class = 'timeText'>Next memory in:</div>");

	var minusButton = $("<button class = 'timeButton'>-</button>");

	var plusButton = $("<button class = 'timeButton'>+</button>");

	var timeRemaining = $("<div class = 'timeText'>" + getRemainingTime() + "</div>");

	var addMemoryButton = $("<button class = 'memoryButton'>Add Memory</button>");


	$(".mainBody").append(timerTitle);
	$(".mainBody").append(minusButton);
	$(".mainBody").append(timeRemaining);
	$(".mainBody").append(plusButton);
	$(".mainBody").append(addMemoryButton);

}


function getRemainingTime() {
	//TODO
	
	
	//temp return statement	
	return "4:55";

}

function startCountdown() {

	timerHolder = setTimeout(function () {

		takePicture();

	}, currentTimeDelay);

}

//this is a temporary function 
function takePicture() {

	alert("snap");

	timerHolder = setTimeout(function () {

		takePicture();

	}, currentTimeDelay);


}

