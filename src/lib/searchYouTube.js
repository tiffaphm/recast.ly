var searchYouTube = (searchString, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {'q': searchString, 'part': 'snippet', 'maxResults': 5, 'key': window.YOUTUBE_API_KEY, 'videoEmbeddable': true, 'type': 'video'},
    success: function(data) {
      //callback = callback from videoList
      // console.log('it worked!');
      // console.log(searchString);
      // console.log(data);
      callback(data.items);
    },
    
    failure: function() {
      console.log('fix me');
    }
  });
  
};

window.searchYouTube = searchYouTube;
