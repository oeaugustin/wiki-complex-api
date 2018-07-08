//main.js Wiki API

// $(function(){

// 	$("#search").on("click", function(){
// 		let searchTerm = $("#searchTerm").val()
// 		let url = ""
// 	})
// });

// $(document).ready(function(){
 
//     $.ajax({
//         type: "GET",
//         url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix&callback=?",
//         contentType: "application/json; charset=utf-8",
//         async: false,
//         dataType: "json",
//         success: function (data, textStatus, jqXHR) {
 
//             var markup = data.parse.text["*"];
//             var blurb = $('<section></section>').html(markup);
 
//             // remove links as they will not work
//             blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
//             // remove any references
//             blurb.find('sup').remove();
 
//             // remove cite error
//             blurb.find('.mw-ext-cite-error').remove();
//             $('#article').html($(blurb).find('p'));
 
//         },
//         error: function (errorMessage) {
//         }
//     });
// });


$(function() {
  // enter
    $("#searchTerm").keypress(function(e){
    	if(e.keyCode===13){
    		var searchTerm = $("#searchTerm").val();
		    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?"; 
		    $.ajax({
			url: url,
			type: 'GET',
			contentType: "application/json; charset=utf-8",
			async: false,
        	dataType: "json",
        	success: function(data, status, jqXHR) {
        		//console.log(data);
        		$("#output").html();
        		for(var i=0;i<data[1].length;i++){
        			$("#output").append("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
        		}

        	}
		})
    	}
    });
// click ajax call
    $("#search").on("click", function() {
    	var searchTerm = $("#searchTerm").val();
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?"; 
		$.ajax({
			url: url,
			type: 'GET',
			contentType: "application/json; charset=utf-8",
			async: false,
        	dataType: "json",
          // plop data
        	success: function(data, status, jqXHR) {
        		//console.log(data);
        		$("#output").html();
        		for(var i=0;i<data[1].length;i++){
        			$("#output").append("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
        		}

        	}
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
        
    });
});