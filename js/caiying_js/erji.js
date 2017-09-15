$(function(){

	$( 'nav a').hover(function(){

		$(this).css('color','#4A262B');
		console.log($(this));
	},function(){
		$(this).css('color','#9C9C9C');
	});
	$('.container_3 .three').hover(function(){
		$(this).css('background','#44A6ED');
	},function(){
		$(this).css('background','#050001');
	});
	$('.container_4 li ').hover(function(){
		$(this).css('opacity',1);
	},function(){
		$(this).css('opacity',0.5);
	});
	$('.container_5 .son2').hover(function(){
		$(this).css('background','#44A6ED');
	},function(){
		$(this).css('background','');
	});
	$('.topbtn').click(function(){
		$(document).scrollTop(0);
	})
})