
(function(){
	window.appRootDirName = ".myapp";
	document.addEventListener("deviceready", onDeviceReady, false);
 
	function onDeviceReady() {
		// alert("device is ready");
		window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
	}
	
	function fail() {
		console.log("failed to get filesystem");
	}
 
	function gotFS(fileSystem) {
		console.log("filesystem got");
		fileSystem.root.getDirectory(window.appRootDirName, {
			create : true,
			exclusive : false
		}, dirReady, fail);
	}
 
	function dirReady(entry) {
		window.appRootDir = entry;
		console.log(JSON.stringify(window.appRootDir));
	}
})();



