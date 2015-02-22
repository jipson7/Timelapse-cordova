function slideshowLogic() {
    //These are temporary to test the page
    var imageArr = ["http://i.imgur.com/dAvWkN8.jpg",
        "http://i.imgur.com/Te0WuIB.jpg","http://i.imgur.com/Sfyljur.jpg"];
    var listHtml = "<ul class='bxslider'>";

    for (i = 0; i < imageArr.length; i++){
        listHtml = listHtml + "<li><img src='" + imageArr[i] + "'/></li>";
    }
    alert(listHtml);

    listHtml += "</ul>";

    var slideshowListing = $(listHtml);

	$(".mainBody").append(slideshowListing);

    $('.bxslider').bxSlider({
      auto: true,
      autoControls: true
    });
}
