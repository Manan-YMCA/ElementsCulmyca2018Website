var images = ["images/home.jpg","images/about/ac.jpg","images/about/wallpaper.jpg","images/about/ay.jpg","images/events/ananya.jpg","images/events/ehome.jpg","images/events/eklavya.jpg","images/events/IEEE.jpg","images/events/jhalak.jpg","images/events/manan.jpg","images/events/mechnext.jpg","images/events/microbird.jpg","images/events/natraja.jpg","images/events/SAE.jpg","images/events/samarpan.jpg","images/events/srijan.jpg","images/events/tarunnun.jpg","images/events/vivekanand.jpg","images/events/vividha.jpg","images/register/wallpaper.jpg","images/back.jpg","images/back.png","images/back2.jpg","images/bg.jpg","images/bg2.jpg","images/homeo.jpg"];
$.preload(images);
$.preload(images,{
  eachOnLoad: function(){
    //console.log("loaded");
  $('#preloader').hide();
  }
});