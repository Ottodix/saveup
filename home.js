$(function () {
	$(document).scroll(function () {
		var $nav = $(".navbar-fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height()*2);
		showScrollTop()
	});
	$(document).ready(function() {
		var $nav = $(".navbar-fixed-top");
		if($(this).scrollTop() > $nav.height()*2) $nav.addClass('scrolled');
		showScrollTop();
	});  
	$(".navbar-nav a").click(function(e) {
		e.preventDefault();		
	});		
	$(".navbar-toggle").click(function() {
		if($(this).hasClass("collapsed")) $(".navbar-fixed-top").addClass('opennav');
		else $(".navbar-fixed-top").removeClass('opennav');
	});
	$(".navbar-fixed-top a").click(function(e) {
		e.preventDefault();		
		if($(this).parents(".navbar-fixed-top").hasClass('opennav')) $(".navbar-toggle").click();
	});	
	$(".scrollTopBtn").click(function() {
		$('html,body').unbind().animate({scrollTop: 0},'slow');
	});	
});
function scrollToDiv(id,offset){
	$('html,body').unbind().animate({scrollTop: $("#"+id).offset().top-offset},'slow');
};
function showScrollTop(){
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		$('.scrollTopBtn').show(200);
	} else {
		$('.scrollTopBtn').hide(200);
	}
}