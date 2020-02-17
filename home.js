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
	$(".navbar-fixed-top a").click(function() {
		if($(this).parents(".navbar-fixed-top").hasClass('opennav')) $(".navbar-toggle").click();
	});	
});
function scrollToDiv(id,offset){
	$('html,body').unbind().animate({scrollTop: $("#"+id).offset().top-offset},'slow');
};	
