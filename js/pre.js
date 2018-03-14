var images = ["images/home.jpg","images/about/ac.jpg","images/about/wallpaper.jpg","images/about/ay.jpg","images/events/ananya.jpg","images/events/ehome.jpg","images/events/eklavya.jpg","images/events/IEEE.jpg","images/events/jhalak.jpg","images/events/manan.jpg","images/events/mechnext.jpg","images/events/microbird.jpg","images/events/natraja.jpg","images/events/SAE.jpg","images/events/samarpan.jpg","images/events/srijan.jpg","images/events/tarunnun.jpg","images/events/vivekanand.jpg","images/events/vividha.jpg","images/register/wallpaper.jpg","images/back.jpg","images/back.png","images/back2.jpg","images/bg.jpg","images/bg2.jpg"];
var x1 = 0;
var percent = 0;
var i = 0;
$.preload(images);
$.preload(images,{
  eachOnLoad: function(){
    x1++;
    percent = (x1/(images.length))*100;
   	$("#percent").text(percent.toFixed(0)+'%');
   	switch (x1){
   		case 1:
   		 $("#uptrap").css('opacity', '1');break;
   		case 4:
   		 $("#eside").css('opacity', '1');break;
   		case 8:
   		 $("#reside").css('opacity', '1');break;
   		case 11:
   		 $("#ebot").css('opacity', '1');break;
   		case 14:
   		 $("#upc").css('opacity', '1');break;
   		case 18:
   		 $("#lupc").css('opacity', '1');break;
   		case 21:
   		 $("#brc").css('opacity', '1');break;
   		case 25:
   		 $("#blrc").css('opacity', '1');break;
   	}
    if (x1 == images.length)
    {
     setTimeout(function(){
     	$("#preloader").fadeOut('slow');
     },1000)
    }
  }

});