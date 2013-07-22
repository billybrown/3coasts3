// break point used in a bunch of functions
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

// show and hide the mobile nav
function navicon(){
	$('#site-navicon').click(function(){
		$('#mega-wrapper').toggleClass("slides");
	});
}

// main page slide down when clicking the arrows
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

//grow and shrink nav
function navSlide() {
	var ww = $(window).width(); 
	if (ww >= breakmiddle) {
		$(".site-header").hover(function(){
			$(this).toggleClass("open-wide");
			$(".home-shadow").toggleClass("open-wide");
		});
	}
}


$(document).ready(function() {

	sectionSize();
	navicon();
	slider();
	navSlide();

});


$(window).load(function() {

	equalHeight('.projects-list article');

});


$(window).resize(function () {
		sectionSize();
});


