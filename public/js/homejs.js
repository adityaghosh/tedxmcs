
var flag =0;
var blinkc=0;//blink count for final scene
var cflag=0;//cover flag

$(document).ready(function(e) {
		var x=screen.availWidth;
		var y=screen.availHeight;
		var m=0;
		//cache clearing
		jQuery('img').each(function(){  
		jQuery(this).attr('src',jQuery(this).attr('src')+ '?' + (new Date()).getTime());  
		});
		$('#wrapper').css('width',x);
		$('#panout1').css('width',x);
		$('#panout2').css('width',x);
		$('#panout3').css('width',x);
		$('#wit').css('width',(x-200));
		$('#coverpane').css('width',x);
		$('#coverpane').css('height',y);
		$('#coverpane2').css('width',x);
		$('#coverpane2').css('height',y);
		$('#skate').css('visibility','hidden');
		$('#stickman').css('visibility','hidden');
		$('#stickmanhandsup').css('visibility','hidden');
		$('#cover').load(function(e){
				if(cflag==0)
				{	
				$('#cover').css('background-image','images/cover with loading without glow.png');
				$('#cover').fadeIn(220,function(e){
					$('#cover').attr('src','images/cover with loading without glow.png');
					});
					$('#cover').fadeOut(220,function(e){
					$('#cover').attr('src','images/cover with loading.png');
					});
				}
				else
				{
					$('#cover').css('background-image','images/cover without glow.PNG');
					$('#cover').fadeIn(220,function(e){
					$('#cover').attr('src','images/cover without glow.PNG');
					});
					$('#cover').fadeOut(220,function(e){
					$('#cover').attr('src','images/cover with glow.PNG');
					});
				}
	});
		  function showcover()
			{
				$('#coverpane').css('display','inline');
				$('#coverpane2').css('display','inline');
				$('#coverpane').css('visibility','visible');
				$('#coverpane2').css('visibility','visible');
				$('#scene1text').css('z-index',-1);
				$('#strip').attr('src','images/strip full blur 2.PNG');
				$('#skate').css('visibility','hidden');
				$('#stickman').css('visibility','hidden');
				$('#stickmanhandsup').css('visibility','hidden');				
			}
			$(window).load(function(e) {    
            cflag=1;
			$('#cover').attr('src','images/cover with glow.png');
			$('#cover1').attr('src','images/cover without glow.png');	
				
		$(document).keydown(function(e) {
			if(flag==0)
			{
				$('#scene1text').css('z-index',-1);
				$('#strip').attr('src','images/strip_full.PNG');
				$('#coverpane').fadeOut(1200,'linear');
				$('#coverpane2').fadeOut(1200,'linear');
				$('#skate').css('left',55);
				$('#stickman').css('left',55);
				$('#stickmanhandsup').css('left',60);
				$('#skate').css('visibility','visible');
				$('#stickman').css('visibility','visible');
				$('#scene1').css('visibility','visible');	
				m=0;
				flag=1;
			}
			else if(flag==1)
			{
			if (e.keyCode==37)
			m=m-10;
			else if(e.keyCode==39)
			m=m+10;
			if(e.keyCode==37 || e.keyCode==39)
			{
			$('.scroll-pane.horizontal-only').scrollLeft(m);
			var c=parseInt($('#moon').css('left'));
			//Moon Movement
			if(c<3020)
			{
				$('#moon').animate({'left':(m+200)+'px'},'fast');
				$('#moon').css('visibility','visible');
			}
			
			//Stickman Movement
			var sl=parseInt($('#stickman').css('left'));
			var shul=parseInt($('#stickmanhandsup').css('left'));
			var skl=parseInt($('#skate').css('left'));
			var move=m;
			if(shul < 3270)
			{
				$('#stickman').css('visibility','visible');
				$('#stickmanhandsup').css('visibility','hidden');
				$('#skate').css('left',move+50);
				$('#stickman').css('left',move+50);
				$('#stickmanhandsup').css('left',move+50);
				if(parseInt($('#skate').css('left'))<=50)
				{	
				flag=0;
				showcover();
				}	
			}
			//Scene 4 stick man movement
			else
			{
				$('#stickman').css('visibility','hidden');
				if($('#stickmanhandsup').css('visibility') == 'hidden')
				$('#stickmanhandsup').css('visibility','visible');
				$('#skate').css('left','3270px');
				$('#stickman').css('left','3270px');
				if(shul < 3320)
				{	
					$('#stickmanhandsup').css('transform','rotate(60deg)');
					$('#stickmanhandsup').css('top','252px');
					$('#stickmanhandsup').css('left',move+50);
					$('#xrayman').css('visibility','hidden');
					$('#xraymaninverted').css('visibility','hidden');	
				}
				else if(shul < 3370)
				{
					$('#stickmanhandsup').css('transform','rotate(120deg)');
					$('#stickmanhandsup').css('top','204px');
					$('#stickmanhandsup').css('left',move+50);
					$('#xrayman').css('visibility','hidden');
					$('#xraymaninverted').css('visibility','hidden');	
				}
				else if(shul < 3420)	
				{		
					$('#stickmanhandsup').css('transform','rotate(180deg)');
					$('#stickmanhandsup').css('top','156px');
					$('#stickmanhandsup').css('left',move+50);
					$('#xrayman').css('visibility','hidden');
					$('#xraymaninverted').css('visibility','hidden');	
				}
				else if(shul < 3470)
				{
					$('#stickmanhandsup').css('transform','rotate(240deg)');
					$('#stickmanhandsup').css('top','122px');
					$('#stickmanhandsup').css('left',move+50);
					$('#xrayman').css('visibility','hidden');
					$('#xraymaninverted').css('visibility','hidden');	
				}
				else if(shul < 3520)
				{		
					$('#stickmanhandsup').css('transform','rotate(300deg)');
					$('#stickmanhandsup').css('top','104px');
					$('#stickmanhandsup').css('left',move+50);
					$('#xrayman').css('visibility','hidden');
					$('#xraymaninverted').css('visibility','hidden');	
				}
				else if(shul < 3570)
				{
					$('#stickmanhandsup').css('transform','rotate(360deg)');
					$('#stickmanhandsup').css('top','86px');
					$('#stickmanhandsup').css('left',move+50);
					$('#xrayman').css('visibility','hidden');
					$('#xraymaninverted').css('visibility','hidden');	
				}
				
				else if(shul >= 3570)
				{
					$('#stickmanhandsup').css('visibility','hidden');
					if($('#xrayman').css('visibility')=='visible')
					{
						$('#xrayman').css('visibility','hidden');
						$('#xraymaninverted').css('visibility','visible');	
					}
					else
					{
						$('#xrayman').css('visibility','visible');
						$('#xraymaninverted').css('visibility','hidden');	
					}

					$('#stickmanhandsup').css('left',move+50);
				}
				else
				{
					$('#stickmanhandsup').css('visibility','hidden');
					if($('#xrayman').css('visibility')=='visible')
					{
						$('#xrayman').css('visibility','hidden');
						$('#xraymaninverted').css('visibility','visible');	
					}
					else
					{
						$('#xrayman').css('visibility','visible');
						$('#xraymaninverted').css('visibility','hidden');	
					}
					if(j==-1)
					{
					$('#stickmanhandsup').css('left',move+50);
					}					
				}
			}
			//Scene 1
			$('#scene1text').animate({'opacity':'1'},1200);
			$('#carsmoke').animate({'opacity':'1'},1200);
			$('#lightening').css('visibility','hidden');
			$('#mushroomkaboom').css('visibility','hidden');
			$('#dboulder').css('visibility','hidden');
			$('#kaboom').css('opacity','1');
			$('#kaboom').css('display','inline');
			//Scene 2
			if( sl>=910 && sl<=1415 )
			{
				var c=0
				$('#smoke').css('visibility','hidden');
				$('#explosistbefore').css('visibility','visible');
				$('#explosistafter').css('visibility','hidden');
				$('#lightening').css('visibility','visible');
				if($('#frankbfsh').css('visibility') == 'visible')
				{
					$('#frankbfsh').css('visibility','hidden');
					$('#socketwithglow').css('visibility','hidden');
					$('#frankaftershock').css('visibility','visible');
					$('#socketwithoutglow').css('visibility','visible');
					$('#buildingwithlight').css('visibility','visible');
					for(c=0;c<5000;c++);
				}
				else
				{
					$('#frankaftershock').css('visibility','hidden');
					$('#socketwithoutglow').css('visibility','hidden');
					$('#frankbfsh').css('visibility','visible');
				 	$('#socketwithglow').css('visibility','visible');
					$('#buildingwithlight').css('visibility','hidden');
					for(c=0;c<5000;c++);
				}
			}
			if(sl>1415 && sl<1750)
			{
					$('#explosistbefore').css('visibility','visible');
					$('#explosistafter').css('visibility','hidden');
					$('#kaboom').css('visibility','hidden');
					$('#dynamite').css('visibility','visible');
					$('#frankbfsh').css('visibility','hidden');	
					$('#smoke').css('visibility','hidden');
					$('#explosistlater').css('visibility','hidden');
					$('#socketwithglow').css('visibility','hidden');
					$('#frankaftershock').css('visibility','visible');
					$('#socketwithoutglow').css('visibility','visible');
					$('#lightening').css('visibility','hidden');
					$('#buildingwithlight').css('visibility','visible');
			}
			
			//Scene 3
			if(sl>=1750 && sl<=1930)
			{
				$('#explosistbefore').css('visibility','hidden');
				$('#explosistafter').css('visibility','visible');
				$('#smoke').css('visibility','hidden');
				if(sl>1775)
				{
					$('#dynamite').css('visibility','hidden');
					$('#kaboom').css('visibility','visible');
					$('#explosistlater').css('visibility','visible');
					$('#explosistafter').css('visibility','hidden');
				}
				if(sl>1800)
				{
					$('#mushroomkaboom').css('visibility','visible');
					$('#kaboom').fadeOut(1500,'linear');
				}
			} 
			if(sl>1930)
			{
				$('#kaboom').css('visibility','hidden');
				$('#kaboom').css('opacity','1');
				$('#mushroomkaboom').css('visibility','visible');
				if($('#smoke').css('visibility')=='hidden')
				{
					$('#smoke').css('opacity',0);
					$('#smoke').css('visibility','visible');
					$('#smoke').animate({'opacity':'1'},1500,function(){$('#smoke').css('opacity','1');});
				}
				else
				{
					if(sl<2280)
					{
						$('#rockonroad').css('visibility','visible');
						$('#rockonroad').css('left','2620px');
						$('#rockonroad').css('top','307px');
					}
					else if(sl<2330)
					{
						$('#rockonroad').css('left','2720px');
						$('#rockonroad').css('top','200px');
					}
					else if(sl<2380)
					{
						$('#rockonroad').css('left','2870px');
						$('#rockonroad').css('top','100px');
					}
					
					else if(sl<2430)
					{
						$('#rockonroad').css('left','2950px');
						$('#rockonroad').css('top','70px');
					}
					else if(sl<2480)
					{
						$('#rockonroad').css('left','3020px');
						$('#rockonroad').css('top','100px');
					}
					
					else if(sl<2530)
					{
						$('#rockonroad').css('left','3110px');
						$('#rockonroad').css('top','150px');
					}
					else if(sl<2580)
					{
						$('#rockonroad').css('left','3170px');
						$('#rockonroad').css('top','200px');
					}
					else if(sl<2630)
					{
						$('#rockonroad').css('left','3270px');
						$('#rockonroad').css('top','350px');
						$('#otherrock').css('visibility','hidden');
					}
					else if(sl<2680)
					{
						$('#rockonroad').css('left','3351px');
						$('#rockonroad').css('top','435px');
						$('#otherrock').css('visibility','visible');
					}
					
					
				}
			}
			//Condensed form
			if($('.scroll-pane.horizontal-only').scrollLeft()>=6400)
			{
				$('#panout1').fadeOut(1200);

				if($('.scroll-pane.horizontal-only').scrollLeft()>=6500)
				{
                        $('#panout2').animate({'opacity':'1'},1200);
				}
				
				if($('.scroll-pane.horizontal-only').scrollLeft()>=6600)
				{
					$('#panout3').animate({'opacity':'1'},1200);
					$('#panout3').animate({'opacity':'0'},1200);
					$('#panout3').animate({'opacity':'1'},1200,function(e){
						$('panout1').css('display','none');
						$('panout2').css('display','none');
						$('panout3').css('display','none');												
						$('#wit').css('visibility','visible');
						$('#scenelast').css('visibility','hidden');
					});	
				}
			}

			//Scene 4 rudder and ambulance
			if ($('#redlight').css('visibility') == 'visible')
			{
				$('#redlight').css('visibility','hidden');
			}
			else if($('#redlight').css('visibility')=='hidden')
			{
				$('#redlight').css('visibility','visible');
			}
			if ($('#rudder1').css('visibility') == 'visible')
			{
				$('#rudder1').css('visibility','hidden');
				$('#rudder2').css('visibility','visible');
			}
			else if($('#rudder1').css('visibility')=='hidden')
			{
				$('#rudder1').css('visibility','visible');
				$('#rudder2').css('visibility','hidden');
			}
			
			
			}
		}
		});
    });
});