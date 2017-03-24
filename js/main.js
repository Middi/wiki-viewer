var snippet = [];
var title = [];
var urlWiki = [];


function request(search) {

	$.ajax({
		url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + search + "&prop=info&inprop=url&utf8=&format=json",
		dataType: "jsonp",
		success: function (response) {

			if (response.query.searchinfo.totalhits === 0) {

			} else {

				for (var i = 0; i < response.query.search.length; i++) {

					snippet[i] = response.query.search[i].snippet;
					title[i] = response.query.search[i].title;
					urlWiki[i] = 'https://en.wikipedia.org/wiki/' + response.query.search[i].title;

					$("#results").append('<a href="https://en.wikipedia.org/wiki/' + title + '"><article class="posts"><h2>' + title[i] + '</h2><p>' + snippet[i] + '</p></article></a>');

				}

			}
		},
		error: function () {
			alert("Error retrieving search results, please refresh the page");
		}

	});

}



$("input").on("keydown", function search(e) {

	if (e.keyCode === 13) {
		if (search !== "") {

		var search = $("input").val();


		$("#results").html("");

		request(search);

			$( ".moveBottom" ).toggleClass( "moveTop" );
		
	} else {}
	}
});


$(".result-btn").click(function (event) {
	event.preventDefault();

	if (search !== "") {

		var search = $("input").val();


		$("#results").html("");

		request(search);
	} else {}

});