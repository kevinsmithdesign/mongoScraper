$(document).on('click', "#mainButton", function(){
	console.log('I work');

	$.ajax({
		url: '/scrape'
	}).done(function(){
		$.getJSON('/articles', function(data){
			var count = 1;
			for (var i =0; i <data.length; i++){
				$("#articles").append(
					"<div class='individArticle' data-id=" + data[i]._id + "><img src='" + "'><h3>" + count + '. ' + data[i].title  +
					"</h3><p>" + data[i].author + "</p>" +
		        		"<p><a href='" + data[i].link + "' class='btn btn-primary' role='button'>Link</a> <a href='/articles/" + data[i]._id +"' class='btn btn-default' role='button' id='commentButton'>Comment</a></p>" +
		      				"</div>")
				count++;
			}
		});
	});
});

$(document).on('click', "#commentButton", function(){
	console.log('comment button working');

  	var thisId = $(this).attr('data-id');

	  // run a POST request to change the note, using what's entered in the inputs
	$.ajax({
	    method: "POST",
	    url: "/articles/" + thisId,
	    data: {
	      author: $('#author').val(), // value taken from title input
	      content: $('#content').val() // value taken from note textarea
	    }
	})
	    // with that done
	.done(function( data ) {
	    // log the response
	    console.log(data);
    });

	  // Also, remove the values entered in the input and textarea for note entry
	  $('#author').val("");
	  $('#content').val("");
});