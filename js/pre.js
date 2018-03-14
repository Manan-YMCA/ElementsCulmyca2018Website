var images = ["images/home.jpg","images/about/ac.jpg","images/about/wallpaper.jpg","images/about/ay.jpg","images/events/ananya.jpg","images/events/ehome.jpg","images/events/eklavya.jpg","images/events/IEEE.jpg","images/events/jhalak.jpg","images/events/manan.jpg","images/events/mechnext.jpg","images/events/microbird.jpg","images/events/natraja.jpg","images/events/SAE.jpg","images/events/samarpan.jpg","images/events/srijan.jpg","images/events/tarunnun.jpg","images/events/vivekanand.jpg","images/events/vividha.jpg","images/register/wallpaper.jpg","images/back.jpg","images/back.png","images/back2.jpg","images/bg.jpg","images/bg2.jpg"];
var x1 = 0;
var percent = 0;
var i = 0;
$.preload(images);
$.preload(images,{
  eachOnLoad: function(){
    x1++;
    percent = (x1/(images.length))*100;
   	$("#percent").text(percent+'%');
   	switch (x1){
   		case 1:
   		 $(".ecparts:eq(0)").css('opacity', '1');
   		case 4:
   		 $(".ecparts:eq(1)").css('opacity', '1');
   		case 8:
   		 $(".ecparts:eq(2)").css('opacity', '1');
   		case 11:
   		 $(".ecparts:eq(3)").css('opacity', '1');
   		case 14:
   		 $(".ecparts:eq(4)").css('opacity', '1');
   		case 18:
   		 $(".ecparts:eq(5)").css('opacity', '1');
   		case 21:
   		 $(".ecparts:eq(6)").css('opacity', '1');
   		case 25:
   		 $(".ecparts:eq(7)").css('opacity', '1'); 
   	}
    if (x1 == images.length)
    {
     setTimeout(function(){
     	$("#preloader").fadeOut('slow');
     },1000)
    }
  }

});