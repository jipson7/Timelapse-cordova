/*** Take Picture Logic ***/

function getPicture() {

	navigator.camera.getPicture(
		function (imageData) {

		    // Uncomment to view picture
    		// image.src = "data:image/jpeg;base64," + imageData;

    		var url_ = "data:image/jpeg;base64," + imageData;

    		downloadImage(url_, function(){alert('great success!');}, function(){alert('oops didnt work!');});

		},
		function (message) {
		    // alert('Failed because: ' + message);
		},
		{
			quality: 50,
			destinationType: Camera.DestinationType.DATA_URL
			// sourceType: Camera.PictureSourceType.CAMERA,
			// allowEdit: false,
			// encodingType: Camera.EncodingType.JPEG,
			// targetWidth: 100,
			// targetHeight: 100,
			// popoverOptions: CameraPopoverOptions,
			// saveToPhotoAlbum: true
		}
	);

}

