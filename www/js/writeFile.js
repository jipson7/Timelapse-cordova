var logOb;

function fail(e) {
	console.log("FileSystem Error");
	console.dir(e);
}


function writeLog(str) {
	if(!logOb) {
		alert("no logOb!!");
		return;
	}
	var log = str + "\n";
	// console.log("going to log "+log);
	logOb.createWriter(function(fileWriter) {
		
		fileWriter.seek(fileWriter.length);
		
		var blob = new Blob([log], {type:'text/plain'});
		fileWriter.write(blob);
		// console.log("ok, in theory i worked");
	}, fail);
}

//var i = 0;
function readLog() {
	logOb.file(function(file) {
		var reader = new FileReader();

		reader.onloadend = function(e) {
			console.log(this.result);
			// alert(this.result);
			var urls = this.result;
			var imageArr = urls.split("\n");
 
            var listHtml = "<ul class='bxslider'>";

            //A for loop
            for (i = 0; i < imageArr.length; i++){
                listHtml = listHtml + "<li><img src='" + imageArr[i] + "'/></li>";
            }
            listHtml += "</ul>";
            var slideshowListing = $(listHtml);

            $(".mainBody").append(slideshowListing);

            $('.bxslider').bxSlider({
              auto: true,
              autoControls: true
            });
			//var img = document.getElementById("myImage");
			//img.src = lines[i];
			//i++;
			// $.each(lines, function(n, elem) {
   //          	console.log(elem);
   //          	alert(elem);
   //        	});
		};

		reader.readAsText(file);
	}, fail);

}
