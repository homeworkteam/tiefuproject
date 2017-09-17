$(function(){

	$('#colors li span').hover(function(){
	
		$(this).css('color','#AB4543');
	},function(){
		$(this).css('color','#6C6C6C');
	});
	$('.topbtn').click(function(){
		
		$(document).scrollTop(0);

	})
})