$(function(){
	function reset(){
		var divs="";
		var row=22;
		for(var i=0;i<row*row;i++){
			divs+="<div><span></span></div>";	
		}
		$('.box').html(divs);
		$('.box div').addClass('gezi')
		$('.box div:lt(22)').removeClass();
		$('.box div:gt(461)').removeClass();
		$('.box div:nth-child(22n)').removeClass();
		$('.box div:nth-child(22n+1)').removeClass();
		$('.box .gezi').each(function(){
			if(Math.random()>0.8){
				$(this).data('islei',true);
			}
		})
		$('.box div').each(function(i){
			$(this).data('index',i);
		})
		var flag=false;
		$('.box .gezi').click(function(){
			if(!flag){
				if($(this).data('islei')){
					$('.start').css({display:'block'});
					$('.box .gezi').each(function(){
						if($(this).data('islei')){
							$(this).addClass('red').find('span').css('animation-delay',((Math.random()*4).toFixed(2))+'s');
							flag=true;
						}

					})
				}else{
					var num=0;
					var t=$(this).data('index');
					var a=$('.box div').eq(t-1).data('islei');
					var b=$('.box div').eq(t+1).data('islei');
					var c=$('.box div').eq(t-21).data('islei');
					var d=$('.box div').eq(t-22).data('islei');
					var e=$('.box div').eq(t-23).data('islei');
					var f=$('.box div').eq(t+21).data('islei');
					var g=$('.box div').eq(t+22).data('islei');
					var h=$('.box div').eq(t+23).data('islei');
					var arr=[a,b,c,d,e,f,g,h];
					for(var i=0;i<arr.length;i++){
						if(arr[i]==true){
							num+=1;
						}
					}
			        $(this).text(num);
				}
			}
		})
	};
	reset();
	$('.start').bind('click',function(){
		reset();
		flag=false;
		$(this).css({display:'none'});
	})
})
