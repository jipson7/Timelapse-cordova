function mainInit() {

	var pageTitle = $("<div class = 'pageTitle'>timelapse</div>");


	var minutesLabel = $("<div class = 'mainLabels'>Minutes Interval: </div>");

	var minutesPlus = $("<button class = 'plusMinusButton' onclick='incrementMinutesCounter()'>+</button>");

	var minutesNumber = $("<input type='text' value='60' name='minutesNumber' class='mainInputField'>");

	var minutesMinus = $("<button class = 'plusMinusButton' onclick='decrementMinutesCounter()'>-</button>");

	
	var daysLabel = $("<div class = 'mainLabels'>Days: </div>");

	var daysPlus = $("<button class = 'plusMinusButton' onclick='incrementDaysCounter()'>+</button>");
	
	var daysNumber = $("<input type='text' value='2' name='daysNumber' class='mainInputField'>");

	var daysMinus = $("<button class = 'plusMinusButton' onclick='decrementDaysCounter()'>-</button>");


	var makeMemoriesButton = $("<div class='outerCircle'><button class = 'mainButton'>Make Memories</button></div");	

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


