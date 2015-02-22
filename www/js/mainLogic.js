function mainInit() {

	var pageTitle = $("<div class = 'row well well-lg text-center'><h1>Time Lapse</h1></div><br>");

	var minutesLabel = $("<div class = 'col-xs-6 mainLabels'>Minutes Interval: </div>");

	var minutesPlus = $("<button class = 'col-xs-1 btn btn-default plusMinusButton' onclick='incrementMinutesCounter()'>+</button>");

	var minutesNumber = $("<input type='number' step='1' value='60' name='minutesNumber' class='mainInputField col-xs-2'>");

	var minutesMinus = $("<button class = 'col-xs-1 btn btn-default plusMinusButton' onclick='decrementMinutesCounter()'>-</button>");

	
	var daysLabel = $("<br><br><br><div class = 'col-xs-2-offset mainLabels col-xs-6'>Days: </div>");

	var daysPlus = $("<button class = 'col-xs-1 plusMinusButton btn btn-default' onclick='incrementDaysCounter()'>+</button>");
	
	var daysNumber = $("<input value='2' type='number' step='1' name='daysNumber' class='col-xs-2 mainInputField'>");

	var daysMinus = $("<button class = 'col-xs-1 plusMinusButton btn btn-default' onclick='decrementDaysCounter()'>-</button>");


	var makeMemoriesButton = $("<br><br><br><br><br><br><br><br><button onclick = 'startTimeLapse()' class = 'col-xs-offset-2 col-xs-8 btn btn-primary btn-xl mainButton'>Make Memories</button>");	

	var helpButton = $("<i onclick='getInfoOnTimelapse()' class='glyphicon glyphicon-question-sign col-xs-offset-10 col-xs-2'></i>");

	attach(pageTitle);	
	attach(minutesLabel);	
	attach(minutesMinus);	
	attach(minutesNumber);	
	attach(minutesPlus);	
	attach(daysLabel);	
	attach(daysMinus);	
	attach(daysNumber);	
	attach(daysPlus);	
	attach(makeMemoriesButton);
	attach(helpButton); 

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

function getInfoOnTimelapse() {

	var helpMessage = "Timelapse is a new way to make sure you're keeping a record of all of your fondest memories. With gentle reminders to take a photo as often as specified, you can be sure you no longer forget to take pictures of those precious moments. Whether its a family vacation or a hackathon in Montreal. Timelapse will help make sure you take photos to remember those magical getaways. You can then save and view your favourite photojournal slideshows or videos for as long as you like.";

	$(".mainBody").empty();

	$(".mainBody").append("<div class = 'row well well-lg text-center'><h1>What is Time Lapse</h1></div>");


	$(".mainBody").append("<div class = 'row well well-lg text-center'><p>" + helpMessage  + "</p></div><br>");

	$(".mainBody").append("<button id='backToMainButton'class='col-xs-offset-3 col-xs-6 btn btn-primary btn-xl' onclick='restartMainPage()'>Back to Main</button>");

}

function restartMainPage() {

	$(".mainBody").empty();

	mainInit();

}
