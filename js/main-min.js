function request(){$.ajax({url:"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=radiohead&prop=info&inprop=url&utf8=&format=json",dataType:"jsonp",success:function(e){if(0===e.query.searchinfo.totalhits)showError(keyword);else for(var r=0;r<e.query.search.length;r++)snippet.push(e.query.search[r].snippet),title.push(e.query.search[r].title),urlWiki.push("https://en.wikipedia.org/wiki/"+e.query.search[r].title),console.log(title),$(".end-div").before('<article><h2><a href="https://en.wikipedia.org/wiki/'+title+'">'+title[r]+"</a></h2><p>"+snippet[r]+"</p></article>")},error:function(){alert("Error retrieving search results, please refresh the page")}})}var snippet=[],title=[],urlWiki=[];$(".celsius").on("click",function(){request()}),$(document).ready(function(){request()});