var breakmiddle = 900;

// make all sections as big as the window
function sectionSize(){
	var wh = $(window).height(); 
	var ww = $(window).width(); 
	if (ww >= breakmiddle) {
		$('.section').css("height", wh);
	} else {
		$('.section').css("height", "auto");

	}
}

//make some floated elements all the same height
function equalHeight(item){

		var currentTallest = 0;
    	$(item).each(function(i){
			if ($(this).height() > currentTallest) { 
				currentTallest = $(this).height(); 
			}
		});
		$(item).css('height', currentTallest); 
}

function navicon(){
	// show and hide the mobile nav
	$('#site-navicon').click(function(){
		$('#mega-wrapper').toggleClass("slides");
	});
}


function slider() {

    $('#arrow-callout').click(function(){
        $('html,body').animate({
            scrollTop: $('.development').offset().top
        }, 'slow');
    }); 
    $('#arrow-development').click(function(){
        $('html,body').animate({
            scrollTop: $('.strategy').offset().top
        }, 'slow');
    }); 
    $('#arrow-strategy').click(function(){
        $('html,body').animate({
            scrollTop: $('.design').offset().top
        }, 'slow');
    }); 

}




$(document).ready(function() {

	sectionSize();
	navicon();
	slider();

});


$(window).load(function() {

	equalHeight('.projects-list article');

});


$(window).resize(function () {
		sectionSize();
});


