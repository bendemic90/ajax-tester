function playTrailer(userInput){
    //$("#ajax-test").on("click", function(ajaxTest) {
        //event.preventDefault();
        var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + userInput + "%trailer" + "&type=video&key=AIzaSyCBJssvPtEHpo_rzFR6B8w_cLaTuOQEL64"
      $.ajax({
      url: queryURL,
      }).then(function(response) {
          var videoID = response.items[0].id.videoId;
          console.log(videoID);
          $("#player").append("<iframe>")
            $("iframe").attr("src", `https://www.youtube.com/embed/${videoID}?autoplay=1`)
            $("iframe").attr("width", '640')
            $("iframe").attr("height", '390')
            //("src", `https://www.youtube.com/embed/${videoID}?autoplay=1`)  
      });
}

function queryOMDB(title) {
    var baseUrl = "http://www.omdbapi.com/?apikey=";
    var OMDB_API_KEY = "trilogy";
    var searchQuery = "&t=";
    $.ajax(baseUrl + OMDB_API_KEY + searchQuery + title).then(function (r) {
      var movieContainer = `
      <h1>${r.Title}</h1>
      <h3>${r.Year}</h3>
      <h3>${r.Plot}</h3>
      <img src="${r.Poster}"/>
      `;
      $("#movieContainer").append(movieContainer);
      console.log(r);
    });
  }
  
$("#ajax-test").on("click", function(t){
    var userInput = $("#user-input").val();
    t.preventDefault();
    playTrailer(userInput);
    queryOMDB(userInput);
});