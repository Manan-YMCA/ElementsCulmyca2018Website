if ($(window).width() < 600)
  {
    $("#home").removeAttr('data-background-video');
    $("#home").removeAttr('data-background-video-muted');  
    $("#home").removeAttr('data-background-video-loop');
    $("#home").attr('data-background-image', 'images/home.jpg');
  }