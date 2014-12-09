$(document).ready(function() {

	$('p#name').focus()
	  .typetype("\nTIM SCULLY")
		.fadeTo(4000,0.6)
	  
	$('p#dev').focus().delay(2500)
	  .typetype("\nWEB DEVELOPMENT")
	  .fadeTo(400,0.6).delay(1000)

	$('p#made').focus().delay(5000)
	  .typetype("\nMADE SIMPLE")
	  .fadeTo(400,0.6).delay(1000)

});
       