//****************** YOUR CUSTOMIZED JAVASCRIPT **********************//

$(function() {
	$(".frage").click(function() {
		$(this).parent().find(".antwort").slideToggle("slow");
	});
	
	// hide all details
	$(".antwort").hide();
});
