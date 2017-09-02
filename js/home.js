/*
* @Author: Administrator
* @Date:   2017-08-31 17:30:23
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-31 18:30:39
*/
var banner=$('.banner');
var lis=$('.banner .bannerbox li');
var btnleft=$('.banner .btnleft');
var btnright=$('.banner .btnright');
var pionts=$('.banner .piontbox .pionts');

pionts.eq(0).css('background','#C77C51');
lis.css('left',lis.width()).eq(0).css('left',0);

var now=0,next=0;
var flag=true;
function move(dir='left'){
	if(flag==false){
		return;
	}
	flag=false;

	if(dir=='left'){
		next++;
		if(next>lis.length-1){
			next=0;
		}
		lis.eq(next).css('left','100%');
		lis.eq(now).delay(0).animate({left:'-100%'},1500);
	}else{
		next--;
		if(next<0){
			next=lis.length-1;
		}
		lis.eq(next).css('left','-100%');
		lis.eq(now).delay(1).animate({left:'100%'},1500);
	}
	
	lis.eq(next).animate({left:0},1500,function(){
		flag=true;
	});

	pionts.css('background','white').eq(next).css('background','#C77C51');

	now=next;
}

var t=setInterval(move,3500);

banner.mouseenter(function(){
	clearInterval(t);
}).mouseleave(function(){
	t=setInterval(move,3500);
});


btnleft.click(function(){
	move('left');
});
btnright.click(function(){
	move('right');
});

pionts.click(function(){
	var index=$(this).index();
	// $(this)指当前选择的
	if(index<next){
		next=index-1;
		move('left');
	}
	if(index>next){
		next=index+1;
		move('right');
	}
})

