function timerLogic() {

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
