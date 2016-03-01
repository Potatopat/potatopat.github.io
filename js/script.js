window.onload = function() {
	
};

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    
    if (scroll <= 339) {
    	var newScroll = 339 - scroll;
    	$('#tabs').css('margin-top', newScroll.toString().concat('px'));
    	$('#sidebar').css('position', 'absolute');
    	$('#sidebar').css('margin-top', '50px');
    }
    else {
    	$('#tabs').css('margin-top', '0');
    	$('#sidebar').css('position', 'fixed');
    	$('#sidebar').css('margin-top', '-290px');		//check value and its math
    }
    if (scroll <= 400) {
    	$('#header').css('background-position', ('0px ').concat(((scroll / 2) - 20).toString().concat('px')));		//fix jumping to top issue, along with lack of matching origonal
    }
});