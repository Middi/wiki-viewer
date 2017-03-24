var snippet = [];
var title =[];
var urlWiki = [];

function request() {
	$.ajax({
		url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=radiohead&prop=info&inprop=url&utf8=&format=json",
		dataType: "jsonp",
		success: function(response) {
			if (response.query.searchinfo.totalhits === 0) {
				showError(keyword);
			} else {

				for (var i = 0; i < response.query.search.length; i++) {
			
					
					snippet.push(response.query.search[i].snippet);
					title.push(response.query.search[i].title);
					urlWiki.push('https://en.wikipedia.org/wiki/' + response.query.search[i].title);
					
			console.log(title);
					
					// var result = store.slice(1, -1);
					$('.end-div').before('<article><h2><a href="https://en.wikipedia.org/wiki/' + title + '">' + title[i] +'</a></h2><p>' + snippet[i] + '</p></article>');
					
					
					// $('container').html("<article><p>" + store[i] + "</p></article>");
// console.log(response.query.search[i].snippet);
				}

			}
		},
		error: function() {
			alert("Error retrieving search results, please refresh the page");
		}
	});

}

$('.celsius').on('click', function() {
	request();
});

// New quote on start
$(document).ready(function() {
	request();
});