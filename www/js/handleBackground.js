var appIsOnPause = false;

document.addEventListener("pause", function() {

	appIsOnPause = true;

}, false);

document.addEventListener("resume", function () {

	appIsOnPause = false;

	alert('unpause');

}, false);

document.addEventListener("backbutton", function () {

	//TODO pause app here
	
	navigator.Backbutton.goHome(function() {

		console.log('success');

	}, function() {

		console.log('fail');

	});

}, false);
