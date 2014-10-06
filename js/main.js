// check if all assets are loaded 

$(window).load(function(){
	
	//if all is loaded then remove the loading div
	
	$('.loading').fadeOut('fast');
	
	//check the height of the information container
	var height = $('.info-container').outerHeight(true);
	
	//asign the same to the outer container and fix the problem brought by position absolute
	
	$('.info-glove').css("height",height);
	
	$('.book-btn span').click(function(){
		$('.info-container').fadeOut('fast', function(){
	
			//check the height of the information container
	        var height = $('.info-container').outerHeight(true);
			var newheight = parseInt(height) - 32;
			
			//asign the same to the outer container
			$('#form').css("height",newheight+'px');
			
			//fadein form
			$('#form').fadeIn('fast');
			
		 });
	});
	
	$('#booked').click(function(){
		$('#form').fadeOut('fast', function(){
	
			//check the height of the information container
	        var height = $('.info-container').outerHeight(true);
			var newheight = parseInt(height) - 32;
			
			//asign the same to the outer container
			$('#dorm').css("height",newheight+'px');
			
			//fadein form
			$('#dorm').fadeIn('fast');
			
		 });
	});
	
	booked
	
	//change all place holders to values that change on click of input. this is a hack for IE7 and IE 8
	
	$("input[placeholder], textarea[placeholder]").each(function(i, e){
		if($(e).val() == "")
		{
			$(e).val($(e).attr("placeholder"));
		}
		$(e).blur(function(){
	    if($(this).val()=="")
	      $(this).val($(e).attr("placeholder"));
		}).focus(function(){
	    if($(this).val() == $(e).attr("placeholder"))
        $(this).val("");
		});
	});
	
	//get the size of the text in the input box of our form
	
	function resizeInput() {
		$(this).attr('size', $(this).val().length);
	}

	$('input[type="text"]')
		// event handler
		.keyup(resizeInput)
		// resize on page load
		.each(resizeInput);
		
		
		
		
	$('#loadfivenights').click (function(){
		$('#sevennights').fadeOut('fast');
		$('#fivenights').fadeIn('fast');
	});
	
	$('#loadsevennights').click (function(){
		$('five#nights').fadeOut('fast');
		$('#sevennights').fadeIn('fast');
	});
});