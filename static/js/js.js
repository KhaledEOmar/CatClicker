(function($){

	var $counter = 0;
	
	$('#cat').click(function(e) {
	  $counter += 1;
	  $("#counter").html("Click Count: " + $counter);
	});


})(jQuery); // end of jQuery name space