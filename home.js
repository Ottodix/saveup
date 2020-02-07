$(function () {
	$(document).scroll(function () {
		var $nav = $(".navbar-fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height()*2);
	});
	$(document).ready(function() {
		var $nav = $(".navbar-fixed-top");
		if($(this).scrollTop() > $nav.height()*2) $nav.addClass('scrolled');
	});  
	$(".navbar-toggle").click(function() {
		if($(this).hasClass("collapsed")) $(".navbar-fixed-top").addClass('opennav');
		else $(".navbar-fixed-top").removeClass('opennav');
	});
	$(".animation").click(function() {
		if($(this).hasClass("anim1")) {
			$(this).addClass("anim2");
			$(this).removeClass("anim1");
		}
		else {
			$(this).addClass("anim1");
			$(this).removeClass("anim2")
		}
	});	
});