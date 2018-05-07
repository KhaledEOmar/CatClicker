(function($){

	var $counter = 0;
	var $counter2 = 0;
	var $cat1name = "Herbert";
	var $cat2name = "Johnny";
	
	$("#cat1name").html($cat1name);
	$("#cat2name").html($cat2name);

	
	$('#cat').click(function(e) {
		$counter += 1;
		$("#counter").html("Click Count: " + $counter);
	});

	$('#cat2').click(function(e) {
		$counter2 += 1;
		$("#counter2").html("Click Count: " + $counter2);
	});
	
	
})(jQuery); // end of jQuery name space