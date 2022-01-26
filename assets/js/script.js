$(document).ready(function(){
	$('.menu__btn').click(function(){
		$('.nav-panel__menu-body').toggleClass('hide_menu');
	});
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    let target = $(this.hash);
	    $('html, body').stop().animate({
	        'scrollTop': target.offset().top
	    }, 1000);
	});
});