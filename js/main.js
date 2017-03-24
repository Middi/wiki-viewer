// --- Variables --- //

var snippet = [];
var title = [];
var urlWiki = [];


// --- Call API --- //

function request(search) {

	$.ajax({
		url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + search + "&prop=info&inprop=url&utf8=&format=json",
		dataType: "jsonp",
		success: function (response) {

			// --- No Results --- /
			if (response.query.searchinfo.totalhits === 0) {
				$("#results").append('<article class="posts"><h3>No Results Found.</h3></article>');
			}

			// --- Results --- //
			else {
				for (var i = 0; i < response.query.search.length; i++) {

					snippet[i] = response.query.search[i].snippet;
					title[i] = response.query.search[i].title;
					urlWiki[i] = 'https://en.wikipedia.org/wiki/' + response.query.search[i].title;

					// --- Add To Dom --- //
					$("#results").append('<a href="https://en.wikipedia.org/wiki/' + title + '"><article class="posts"><h2>' + title[i] + '</h2><p>' + snippet[i] + '</p></article></a>');
				}
			}
		},
		error: function () {
			alert("Error retrieving search results, please refresh the page");
		}
	});
}


// --- On Enter Key --- //
$("input").on("keydown", function search(e) {
	if (e.keyCode === 13) {
		if (search !== "") {

			var search = $("input").val();

			// --- Empty Results Table --- //
			$("#results").html("");

			request(search);

			// --- Make Search Bar Move Up --- //
			$(".moveBottom").addClass("moveTop");
		}
		else {
			$("#results").append('<article class="posts"><h2>Type Above To Search</h2></article>');
		}
	}
});

// --- On Button Press --- //
$(".result-btn").click(function (event) {
	event.preventDefault();

	if (search !== "") {
		var search = $("input").val();

		// --- Empty Results Table --- //
		$("#results").html("");

		request(search);

		// --- Make Search Bar Move Up --- //
		$(".moveBottom").addClass("moveTop");
	}
	else {
		$("#results").append('<article class="posts"><h2>Type Above To Search</h2></article>');
	}
});