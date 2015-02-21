var currentTimeDelay = 5000; //current set to 10 000 milliseconds, or 10 seconds

var timerIsInitialized = false;

var timerHolder;

function timerLogic() {

	if (!timerIsInitialized) { 
		
		startCountdown(); 

		timerIsInitialized = true;
	
	}


	var timerTitle = $("<div class = 'row well well-lg text-center'><h1>Next memory in:</h1></div><br>");

	var timeRemaining = $("<div class = 'text-center col-xs-6'>" + getRemainingTime() + "</div>");

	var minusButton = $("<button type='button' class = 'col-xs-offset-4 col-xs-1 btn btn-default'>-</button>");

	var plusButton = $("<button type='button' class = 'col-xs-1 btn btn-default'>+</button><br><br><br><br><br><br>");

	var addMemoryButton = $("<div class='row'><button type='button' class='col-xs-offset-4 col-xs-4 btn btn-primary btn-xl'>Add Memory</button></div>");


	$(".mainBody").append(timerTitle);
	$(".mainBody").append(timeRemaining);
	$(".mainBody").append(minusButton);
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

		restartCountdown();

	}, currentTimeDelay);

}

//this is a temporary function 
function restartCountdown() {

	takePicture();

	timerHolder = setTimeout(function () {

		restartCountdown();

	}, currentTimeDelay);


}

