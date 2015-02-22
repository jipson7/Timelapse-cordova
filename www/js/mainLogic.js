function mainInit() {

	var pageTitle = $("<div class = 'row well well-lg text-center'><h1>Time Lapse</h1></div><br>");

	var minutesLabel = $("<div class = 'col-xs-6 mainLabels'>Minutes Interval: </div>");

	var minutesPlus = $("<button class = 'col-xs-1 btn btn-default plusMinusButton' onclick='incrementMinutesCounter()'>+</button>");

	var minutesNumber = $("<input type='text' type='number' step='1' value='60' name='minutesNumber' class='mainInputField col-xs-2'>");

	var minutesMinus = $("<button class = 'col-xs-1 btn btn-default plusMinusButton' onclick='decrementMinutesCounter()'>-</button>");

	
	var daysLabel = $("<br><br><br><div class = 'col-xs-2-offset mainLabels col-xs-6'>Days: </div>");

	var daysPlus = $("<button class = 'col-xs-1 plusMinusButton btn btn-default' onclick='incrementDaysCounter()'>+</button>");
	
	var daysNumber = $("<input type='text' value='2' type='number' step='1' name='daysNumber' class=' col-xs-2 mainInputField'>");

	var daysMinus = $("<button class = 'col-xs-1 plusMinusButton btn btn-default' onclick='decrementDaysCounter()'>-</button>");


	var makeMemoriesButton = $("<br><br><br><br><br><br><br><br><div onclick = 'startTimeLapse()' class='outerCircle'><button class = 'col-xs-offset-4 col-xs-4 btn btn-primary btn-xl mainButton'>Make Memories</button></div");	

	attach(pageTitle);	
	attach(minutesLabel);	
	attach(minutesPlus);	
	attach(minutesNumber);	
	attach(minutesMinus);	
	attach(daysLabel);	
	attach(daysPlus);	
	attach(daysNumber);	
	attach(daysMinus);	
	attach(makeMemoriesButton);

}

function startTimeLapse() {

	var duration = parseInt($("input[name=daysNumber]").val().replace(" ", ""));

	var frequency = parseInt($("input[name=minutesNumber]").val().replace(" ", ""));

	$(".mainBody").empty();

	timerLogic(duration, frequency);

}

function attach(element) {

	$(".mainBody").append(element);

}

function incrementDaysCounter() {

	$("input[name=daysNumber]").val(parseInt($("input[name=daysNumber]").val()) + 1);

}

function decrementDaysCounter() {

	if(!($("input[name=daysNumber]").val() <= 1)) {

		$("input[name=daysNumber]").val(parseInt($("input[name=daysNumber]").val()) - 1);

	}

}

function incrementMinutesCounter() {

	$("input[name=minutesNumber]").val(parseInt($("input[name=minutesNumber]").val()) + 1);

}

function decrementMinutesCounter() {

	if(!($("input[name=minutesNumber]").val() <= 1)) {

		$("input[name=minutesNumber]").val(parseInt($("input[name=minutesNumber]").val()) - 1);

	}

}


