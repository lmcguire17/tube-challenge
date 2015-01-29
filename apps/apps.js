$(document).ready(function() {
	
  $('button.submit').click(function(event){
    console.log('ready!');
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);

    });
    
  function getRequest(searchTerm) {
    var params = {
      part: 'snippet',
      key: 'AIzaSyBbqWqJ7uf-JdA-b6J4mBp2kLw9TWkvz9Q',
      q: searchTerm,
      maxResults: 20
    };

    $.getJSON(' https://www.googleapis.com/youtube/v3/search',params,function(response) {
        showResults(response);
    });
  }



  function showResults(results) {
    var html = "";
    $.each(results.items, function(index, item) {
      html += '<a href="www.youtube.com/watch?v=' + item.id.videoId + '" target="blank"><img src="' + item.snippet.thumbnails.medium.url + '"/></a>';
    })

    $('#search-results').html(html);
    
    }

}) 

