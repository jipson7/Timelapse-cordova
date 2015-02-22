function downloadImage(url, success, err){
	// console.log('download image ' + url);
	
	var fileName = new Date().getTime() + ".png";
	writeLog(window.appRootDir.toURL() + "/" + fileName);
	
	// ft = new FileTransfer();
	// ft.download(
	//     url,
	//     window.appRootDir.toURL() + "/" + fileName,
	//     function(entry) {
	// 		var img_url = entry.toURL();
	// 		// var im = document.getElementById("myImage");
	// 		// im.src = img_url;
	// 		writeLog(img_url);			
	// 		justForTesting();
		    
	// 		alert("img url = " + img_url);
	// 		// var logFile = (window.appRootDir.toURL() + "/log.txt");


	//         console.log("download complete: " + entry.toURL());
	//         success(entry.toURL());

	//     },
	//     function(error) {
	//         console.log("download error source " + error.source);
	//         console.log("download error target " + error.target);
	//         console.log("upload error code" + error.code);
	//         err(error);
	//     }
	// );
}