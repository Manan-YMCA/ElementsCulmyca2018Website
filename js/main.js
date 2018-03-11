 function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle('active');
  document.getElementById("open-menu").classList.toggle('act');

}


function deviceOrientation(event) {
  if(count%3 != 0)
    {
      count++;
      return 0;
    }
    count++;
    var top  = $(window).scrollTop();
    var xValue = Math.round(event.gamma);
    var yValue = Math.round(event.beta);
    var parX = xValue/5;
    var parY = yValue/2 - 15;
    if (parY > 30) {
        parY = 30;
      } else if (parY < -30) {
        parY = -30;
      }
    $("#eclogo").css({
      'transform': 'translate('+(-(parX*2.5 + 50))+'%,'+(-(parY*2 + 50)) +'%)'
    });
    $(".layer1 > *").css({
      'transform': 'translate('+(-(parX*2))+'%,'+(-(parY*2))+'%)'
    });
}
$(function(){
  setTimeout(function(){
    $(".layer1 > *").each(function(i, el) {
      setTimeout(function(){
        $(el).css({
          'transform': 'translate(0,0)',
          'opacity': '1'
        });
      },100*i)
    });
    setTimeout(function(){
      $(".layer1 > *").css('transition', 'transform ease-out .2s');
    },800)
  },500)
//get string after hash
  var afterhashi= window.location.hash.substr(1);
   var replaced = afterhashi.replace(/%20/g, " ");
   console.log(replaced);
  var afterhash=replaced.toUpperCase();
  console.log("type "+afterhash);
  
 
  console.log(replaced);
  
  

  // Get the events
  $.ajax({
    url: 'https://elementsculmyca2018.herokuapp.com/api/v1/events/getevent/*/*',
    type: 'GET'
  })
  .done(function(msg) {
    msg = JSON.parse(msg);
    console.log(msg);
    var i;
    var events = [];
    var idx = 0;
    var idx1 = 1;
    for (i = 0; i < msg.data.length; i++)
      {
       // console.log(msg.data[i]);


       if(msg.data[i].eventtype !== 'NA'){
        $("#events-list").append('<option value="'+msg.data[i]._id+'"">'+msg.data[i].title+'</option>');




       }

        switch (msg.data[i].clubname) {
          case "Manan":
            $("#cat-manan").append('<div class="cat-card" onclick="showevent('+"'"+msg.data[i]._id+"'"+')"><span class="e-name" id="title'+msg.data[i]._id+'">'+msg.data[i].title+'</span><hr>'+'<div id="mytitle'+msg.data[i]._id+'">"'+
              msg.data[i].desc.substr(0,Math.min(msg.data[i].desc.length,150))+((msg.data[i].desc.length > 150)?" ...":" ")+'</div>'
              +'<div id="mytitle1'+msg.data[i]._id+'"></div>'+'<div class="hid-data" id="desc'+msg.data[i]._id+'">'+msg.data[i].desc+'</div><div class="hid-data" id="rules'+msg.data[i]._id+'">'+msg.data[i].rules+'</div><div class="hid-data" id="venue'+msg.data[i]._id+'">'+msg.data[i].venue+'</div><div class="hid-data" id="timing'+msg.data[i]._id+'">'+msg.data[i].timing.from+' To '+msg.data[i].timing.to+'</div>'+
               '<div class="hid-data" id="coordinators'+msg.data[i]._id+'">'+msg.data[i].coordinators[0].name+" "+msg.data[i].coordinators[0].phone+"  "+"<br>"+((msg.data[i].coordinators[1].phone != 0) ? msg.data[i].coordinators[1].name+" "+msg.data[i].coordinators[1].phone+" ":" ")+'</div>'+
                 '<div class="hid-data" id="eventtype'+msg.data[i]._id+'">'+ ( (msg.data[i].eventtype == "NA") ? "": msg.data[i].eventtype )+'</div>'+'</div>');
                events.push({
                  "eventname": msg.data[i].title,
                  "index": 3
                });
            break;
          case "Microbird":
            $("#cat-microbird").append('<div class="cat-card" onclick="showevent('+"'"+msg.data[i]._id+"'"+')"><span class="e-name" id="title'+msg.data[i]._id+'">'+msg.data[i].title+'</span><hr>'+
              '<div  id="mytitle'+msg.data[i]._id+'">"'+
              msg.data[i].desc.substr(0,Math.min(msg.data[i].desc.length,150))+((msg.data[i].desc.length>150)?"...":" ")+
              '</div>'+
              '<div id="mytitle1'+msg.data[i]._id+'"></div>'+'<div class="hid-data" id="desc'+msg.data[i]._id+'">'+msg.data[i].desc+'</div><div class="hid-data" id="rules'+msg.data[i]._id+'">'+msg.data[i].rules+'</div><div class="hid-data" id="venue'+msg.data[i]._id+'">'+msg.data[i].venue+'</div><div class="hid-data" id="timing'+msg.data[i]._id+'">'+msg.data[i].timing.from+' To '+msg.data[i].timing.to+'</div>'+
               '<div class="hid-data" id="coordinators'+msg.data[i]._id+'">'+msg.data[i].coordinators[0].name+" "+msg.data[i].coordinators[0].phone+"  "+"<br>"+((msg.data[i].coordinators[1].phone != 0) ? msg.data[i].coordinators[1].name+" "+msg.data[i].coordinators[1].phone+" ":" ")+'</div>'+
                '<div class="hid-data" id="eventtype'+msg.data[i]._id+'">'+ ( (msg.data[i].eventtype == "NA") ? "": msg.data[i].eventtype )+'</div>'+'</div>');
                events.push({
                  "eventname": msg.data[i].title,
                  "index": 14
                });
              break;
          case "Mechnext":
           $("#cat-mechnext").append('<div class="cat-card" onclick="showevent('+"'"+msg.data[i]._id+"'"+')"><span class="e-name" id="title'+msg.data[i]._id+'">'+msg.data[i].title+'</span><hr>'+'<div  id="mytitle'+msg.data[i]._id+'">"'+msg.data[i].desc.substr(0,Math.min(msg.data[i].desc.length,150))+((msg.data[i].desc.length > 150)?" ...":" ")+'</div>'+'<div id="mytitle1'+msg.data[i]._id+'"></div>'+'<div class="hid-data" id="desc'+msg.data[i]._id+'">'+msg.data[i].desc+'</div><div class="hid-data" id="rules'+msg.data[i]._id+'">'+msg.data[i].rules+'</div><div class="hid-data" id="venue'+msg.data[i]._id+'">'+msg.data[i].venue+'</div><div class="hid-data" id="timing'+msg.data[i]._id+'">'+msg.data[i].timing.from+' To '+msg.data[i].timing.to+'</div>'+
             '<div class="hid-data" id="coordinators'+msg.data[i]._id+'">'+msg.data[i].coordinators[0].name+" "+msg.data[i].coordinators[0].phone+"  "+"<br>"+((msg.data[i].coordinators[1].phone != 0) ? msg.data[i].coordinators[1].name+" "+msg.data[i].coordinators[1].phone+" ":" ")+'</div>'+
              '<div class="hid-data" id="eventtype'+msg.data[i]._id+'">'+ ( (msg.data[i].eventtype == "NA") ? "": msg.data[i].eventtype )+'</div>'+'</div>');
                events.push({
                  "eventname": msg.data[i].title,
                  "index": 1
                });
            break;
          case "Samarpan":
           $("#cat-samarpan").append('<div class="cat-card" onclick="showevent('+"'"+msg.data[i]._id+"'"+')"><span class="e-name" id="title'+msg.data[i]._id+'">'+msg.data[i].title+'</span><hr>'+'<div  id="mytitle'+msg.data[i]._id+'">"'+msg.data[i].desc.substr(0,Math.min(msg.data[i].desc.length,150))+((msg.data[i].desc.length > 150)?" ...":" ")+'</div>'+'<div id="mytitle1'+msg.data[i]._id+'"></div>'+'<div class="hid-data" id="desc'+msg.data[i]._id+'">'+msg.data[i].desc+'</div><div class="hid-data" id="rules'+msg.data[i]._id+'">'+msg.data[i].rules+'</div><div class="hid-data" id="venue'+msg.data[i]._id+'">'+msg.data[i].venue+'</div><div class="hid-data" id="timing'+msg.data[i]._id+'">'+msg.data[i].timing.from+' To '+msg.data[i].timing.to+'</div>'+
               '<div class="hid-data" id="coordinators'+msg.data[i]._id+'">'+msg.data[i].coordinators[0].name+" "+msg.data[i].coordinators[0].phone+"  "+"<br>"+((msg.data[i].coordinators[1].phone != 0) ? msg.data[i].coordinators[1].name+" "+msg.data[i].coordinators[1].phone+" ":" ")+'</div>'+
              '<div class="hid-data" id="eventtype'+msg.data[i]._id+'">'+ ( (msg.data[i].eventtype == "NA") ? "": msg.data[i].eventtype )+'</div>'+'</div>');
              events.push({
                "eventname": msg.data[i].title,
                "index": 10
              });
              break;
          case "Vividha":
           $("#cat-vividha").append('<div class="cat-card" onclick="showevent('+"'"+msg.data[i]._id+"'"+')"><span class="e-name" id="title'+msg.data[i]._id+'">'+msg.data[i].title+'</span><hr>'+'<div  id="mytitle'+msg.data[i]._id+'">"'+msg.data[i].desc.substr(0,Math.min(msg.data[i].desc.length,150))+((msg.data[i].desc.length > 150)?" ...":" ")+'</div>'+'<div id="mytitle1'+msg.data[i]._id+'"></div>'+'<div class="hid-data" id="desc'+msg.data[i]._id+'">'+msg.data[i].desc+'</div><div class="hid-data" id="rules'+msg.data[i]._id+'">'+msg.data[i].rules+'</div><div class="hid-data" id="venue'+msg.data[i]._id+'">'+msg.data[i].venue+'</div><div class="hid-data" id="timing'+msg.data[i]._id+'">'+msg.data[i].timing.from+' To '+msg.data[i].timing.to+'</div>'+
               '<div class="hid-data" id="coordinators'+msg.data[i]._id+'">'+msg.data[i].coordinators[0].name+" "+msg.data[i].coordinators[0].phone+"  "+"<br>"+((msg.data[i].coordinators[1].phone != 0) ? msg.data[i].coordinators[1].name+" "+msg.data[i].coordinators[1].phone+" ":" ")+'</div>'+
              '<div class="hid-data" id="eventtype'+msg.data[i]._id+'">'+ ( (msg.data[i].eventtype == "NA") ? "": msg.data[i].eventtype )+'</div>'+'</div>');


              events.push({
                "eventname": msg.data[i].title,
                "index": 5
              });
            break;
          case "Ananya":
           $("#cat-ananya").append('<div class="cat-card" onclick="showevent('+"'"+msg.data[i]._id+"'"+')"><span class="e-name" id="title'+msg.data[i]._id+'">'+msg.data[i].title+'</span><hr>'+'<div  id="mytitle'+msg.data[i]._id+'">"'+msg.data[i].desc.substr(0,Math.min(msg.data[i].desc.length,150))+((msg.data[i].desc.length > 150)?" ...":" ")+'</div>'+'<div class="hid-data" id="desc'+msg.data[i]._id+'">'+msg.data[i].desc+'</div><div class="hid-data" id="rules'+msg.data[i]._id+'">'+msg.data[i].rules+'</div><div class="hid-data" id="venue'+msg.data[i]._id+'">'+msg.data[i].venue+'</div><div class="hid-data" id="timing'+msg.data[i]._id+'">'+msg.data[i].timing.from+' To '+msg.data[i].timing.to+'</div>'+
               '<div class="hid-data" id="coordinators'+msg.data[i]._id+'">'+msg.data[i].coordinators[0].name+" "+msg.data[i].coordinators[0].phone+"  "+"<br>"+((msg.data[i].coordinators[1].phone != 0) ? msg.data[i].coordinators[1].name+" "+msg.data[i].coordinators[1].phone+" ":" ")+'</div>'+
                '<div class="hid-data" id="eventtype'+msg.data[i]._id+'">'+ ( (msg.data[i].eventtype == "NA") ? "": msg.data[i].eventtype )+'</div>'
              +'</div>'
            
              )
              events.push({
                "eventname": msg.data[i].title,
                "index": 11
              });
            break;
          case "Srijan":
            $("#cat-srijan").append('<div class="cat-card" onclick="showevent('+"'"+msg.data[i]._id+"'"+')"><span class="e-name" id="title'+msg.data[i]._id+'">'+msg.data[i].title+'</span><hr>'+'<div  id="mytitle'+msg.data[i]._id+'">"'+msg.data[i].desc.substr(0,Math.min(msg.data[i].desc.length,150))+((msg.data[i].desc.length > 150)?" ...":" ")+'</div>'+'<div id="mytitle1'+msg.data[i]._id+'"></div>'+'<div class="hid-data" id="desc'+msg.data[i]._id+'">'+msg.data[i].desc+'</div><div class="hid-data" id="rules'+msg.data[i]._id+'">'+msg.data[i].rules+'</div><div class="hid-data" id="venue'+msg.data[i]._id+'">'+msg.data[i].venue+'</div><div class="hid-data" id="timing'+msg.data[i]._id+'">'+msg.data[i].timing.from+' To '+msg.data[i].timing.to+'</div>'+
               '<div class="hid-data" id="coordinators'+msg.data[i]._id+'">'+msg.data[i].coordinators[0].name+" "+msg.data[i].coordinators[0].phone+"  "+"<br>"+((msg.data[i].coordinators[1].phone != 0) ? msg.data[i].coordinators[1].name+" "+msg.data[i].coordinators[1].phone+" ":" ")+'</div>'+
                '<div class="hid-data" id="eventtype'+msg.data[i]._id+'">'+ ( (msg.data[i].eventtype == "NA") ? "": msg.data[i].eventtype )+'</div>'+'</div>');
              events.push({
                "eventname": msg.data[i].title,
                "index": 2
              });
            break;
          case "Taranuum":
            $("#cat-tarannum").append('<div class="cat-card" onclick="showevent('+"'"+msg.data[i]._id+"'"+')"><span class="e-name" id="title'+msg.data[i]._id+'">'+msg.data[i].title+'</span><hr>'+'<div  id="mytitle'+msg.data[i]._id+'">"'+msg.data[i].desc.substr(0,Math.min(msg.data[i].desc.length,150))+((msg.data[i].desc.length > 150)?" ...":" ")+'</div>'+'<div id="mytitle1'+msg.data[i]._id+'"></div>'+'<div class="hid-data" id="desc'+msg.data[i]._id+'">'+msg.data[i].desc+'</div><div class="hid-data" id="rules'+msg.data[i]._id+'">'+msg.data[i].rules+'</div><div class="hid-data" id="venue'+msg.data[i]._id+'">'+msg.data[i].venue+'</div><div class="hid-data" id="timing'+msg.data[i]._id+'">'+msg.data[i].timing.from+' To '+msg.data[i].timing.to+'</div>'+
                 '<div class="hid-data" id="coordinators'+msg.data[i]._id+'">'+msg.data[i].coordinators[0].name+" "+msg.data[i].coordinators[0].phone+"  "+"<br>"+((msg.data[i].coordinators[1].phone != 0) ? msg.data[i].coordinators[1].name+" "+msg.data[i].coordinators[1].phone+" ":" ")+'</div>'+
                '<div class="hid-data" id="eventtype'+msg.data[i]._id+'">'+ ( (msg.data[i].eventtype == "NA") ? "": msg.data[i].eventtype )+'</div>'+'</div>');
              events.push({
                "eventname": msg.data[i].title,
                "index": 7
              });
            break;
          case "Nataraja":
            $("#cat-natraja").append('<div class="cat-card" onclick="showevent('+"'"+msg.data[i]._id+"'"+')"><span class="e-name" id="title'+msg.data[i]._id+'">'+msg.data[i].title+'</span><hr>'+'<div  id="mytitle'+msg.data[i]._id+'">"'+msg.data[i].desc.substr(0,Math.min(msg.data[i].desc.length,150))+((msg.data[i].desc.length > 150)?" ...":" ")+'</div>'+'<div id="mytitle1'+msg.data[i]._id+'"></div>'+'<div class="hid-data" id="desc'+msg.data[i]._id+'">'+msg.data[i].desc+'</div><div class="hid-data" id="rules'+msg.data[i]._id+'">'+msg.data[i].rules+'</div><div class="hid-data" id="venue'+msg.data[i]._id+'">'+msg.data[i].venue+'</div><div class="hid-data" id="timing'+msg.data[i]._id+'">'+msg.data[i].timing.from+' To '+msg.data[i].timing.to+'</div>'+
               '<div class="hid-data" id="coordinators'+msg.data[i]._id+'">'+msg.data[i].coordinators[0].name+" "+msg.data[i].coordinators[0].phone+"  "+"<br>"+((msg.data[i].coordinators[1].phone != 0) ? msg.data[i].coordinators[1].name+" "+msg.data[i].coordinators[1].phone+" ":" ")+'</div>'+
                '<div class="hid-data" id="eventtype'+msg.data[i]._id+'">'+ ( (msg.data[i].eventtype == "NA") ? "": msg.data[i].eventtype )+'</div>'+'</div>');
              events.push({
                "eventname": msg.data[i].title,
                "index": 4
              });
            break;
          case "NSS":
            $("#cat-manan").append('<div class="cat-card" onclick="showevent('+"'"+msg.data[i]._id+"'"+')"><span class="e-name" id="title'+msg.data[i]._id+'">'+msg.data[i].title+'</span><hr>'+'<div  id="mytitle'+msg.data[i]._id+'">"'+msg.data[i].desc.substr(0,Math.min(msg.data[i].desc.length,150))+((msg.data[i].desc.length > 150)?" ...":" ")+'</div>'+'<div id="mytitle1'+msg.data[i]._id+'"></div>'+'<div class="hid-data" id="desc'+msg.data[i]._id+'">'+msg.data[i].desc+'</div><div class="hid-data" id="rules'+msg.data[i]._id+'">'+msg.data[i].rules+'</div><div class="hid-data" id="venue'+msg.data[i]._id+'">'+msg.data[i].venue+'</div><div class="hid-data" id="timing'+msg.data[i]._id+'">'+msg.data[i].timing.from+' To '+msg.data[i].timing.to+'</div>'
              + '<div class="hid-data" id="coordinators'+msg.data[i]._id+'">'+msg.data[i].coordinators[0].name+" "+msg.data[i].coordinators[0].phone+"  "+"<br>"+((msg.data[i].coordinators[1].phone != 0) ? msg.data[i].coordinators[1].name+" "+msg.data[i].coordinators[1].phone+" ":" ")+'</div>'+
                '<div class="hid-data" id="eventtype'+msg.data[i]._id+'">'+ ( (msg.data[i].eventtype == "NA") ? "": msg.data[i].eventtype )+'</div>'+'</div>');
            break;
          case "Eklavya":
            $("#cat-eklavya").append('<div class="cat-card" onclick="showevent('+"'"+msg.data[i]._id+"'"+')"><span class="e-name" id="title'+msg.data[i]._id+'">'+msg.data[i].title+'</span><hr>'+'<div  id="mytitle'+msg.data[i]._id+'">"'+msg.data[i].desc.substr(0,Math.min(msg.data[i].desc.length,150))+((msg.data[i].desc.length > 150)?" ...":" ")+'</div>'+'<div id="mytitle1'+msg.data[i]._id+'"></div>'+'<div class="hid-data" id="desc'+msg.data[i]._id+'">'+msg.data[i].desc+'</div><div class="hid-data" id="rules'+msg.data[i]._id+'">'+msg.data[i].rules+'</div><div class="hid-data" id="venue'+msg.data[i]._id+'">'+msg.data[i].venue+'</div><div class="hid-data" id="timing'+msg.data[i]._id+'">'+msg.data[i].timing.from+' To '+msg.data[i].timing.to+'</div>'+
               '<div class="hid-data" id="coordinators'+msg.data[i]._id+'">'+msg.data[i].coordinators[0].name+" "+msg.data[i].coordinators[0].phone+"  "+"<br>"+((msg.data[i].coordinators[1].phone != 0) ? msg.data[i].coordinators[1].name+" "+msg.data[i].coordinators[1].phone+" ":" ")+'</div>'+
                '<div class="hid-data" id="eventtype'+msg.data[i]._id+'">'+ ( (msg.data[i].eventtype == "NA") ? "": msg.data[i].eventtype )+'</div>'+'</div>');
              events.push({
                "eventname": msg.data[i].title,
                "index": 12
              });
            break;
          case "IEEE":
            $("#cat-ieee").append('<div class="cat-card" onclick="showevent('+"'"+msg.data[i]._id+"'"+')"><span class="e-name" id="title'+msg.data[i]._id+'">'+msg.data[i].title+'</span><hr>'+'<div  id="mytitle'+msg.data[i]._id+'">"'+msg.data[i].desc.substr(0,Math.min(msg.data[i].desc.length,150))+((msg.data[i].desc.length > 150)?" ...":" ")+'</div>'+'<div id="mytitle1'+msg.data[i]._id+'"></div>'+'<div class="hid-data" id="desc'+msg.data[i]._id+'">'+msg.data[i].desc+'</div><div class="hid-data" id="rules'+msg.data[i]._id+'">'+msg.data[i].rules+'</div><div class="hid-data" id="venue'+msg.data[i]._id+'">'+msg.data[i].venue+'</div><div class="hid-data" id="timing'+msg.data[i]._id+'">'+msg.data[i].timing.from+' To '+msg.data[i].timing.to+'</div>'+
               '<div class="hid-data" id="coordinators'+msg.data[i]._id+'">'+msg.data[i].coordinators[0].name+" "+msg.data[i].coordinators[0].phone+"  "+"<br>"+((msg.data[i].coordinators[1].phone != 0) ? msg.data[i].coordinators[1].name+" "+msg.data[i].coordinators[1].phone+" ":" ")+'</div>'+
                '<div class="hid-data" id="eventtype'+msg.data[i]._id+'">'+ ( (msg.data[i].eventtype == "NA") ? "": msg.data[i].eventtype )+'</div>'+'</div>');
              events.push({
                "eventname": msg.data[i].title,
                "index": 9
              });
            break;
          case "Vivekanand Manch":
           $("#cat-vivekanand").append('<div class="cat-card" onclick="showevent('+"'"+msg.data[i]._id+"'"+')"><span class="e-name" id="title'+msg.data[i]._id+'">'+msg.data[i].title+'</span><hr>'+'<div  id="mytitle'+msg.data[i]._id+'">"'+msg.data[i].desc.substr(0,Math.min(msg.data[i].desc.length,150))+((msg.data[i].desc.length > 150)?" ...":" ")+'</div>'+'<div id="mytitle1'+msg.data[i]._id+'"></div>'+'<div class="hid-data" id="desc'+msg.data[i]._id+'">'+msg.data[i].desc+'</div><div class="hid-data" id="rules'+msg.data[i]._id+'">'+msg.data[i].rules+'</div><div class="hid-data" id="venue'+msg.data[i]._id+'">'+msg.data[i].venue+'</div><div class="hid-data" id="timing'+msg.data[i]._id+'">'+msg.data[i].timing.from+' To '+msg.data[i].timing.to+'</div>'+
             '<div class="hid-data" id="coordinators'+msg.data[i]._id+'">'+msg.data[i].coordinators[0].name+" "+msg.data[i].coordinators[0].phone+"  "+"<br>"+((msg.data[i].coordinators[1].phone != 0) ? msg.data[i].coordinators[1].name+" "+msg.data[i].coordinators[1].phone+" ":" ")+'</div>'+
              '<div class="hid-data" id="eventtype'+msg.data[i]._id+'">'+ ( (msg.data[i].eventtype == "NA") ? "": msg.data[i].eventtype )+'</div>'+'</div>');
              events.push({
                "eventname": msg.data[i].title,
                "index": 6
              });
            break;
          case "SAE/BAJA":
            $("#cat-sae").append('<div class="cat-card" onclick="showevent('+"'"+msg.data[i]._id+"'"+')"><span class="e-name" id="title'+msg.data[i]._id+'">'+msg.data[i].title+'</span><hr>'+'<div  id="mytitle'+msg.data[i]._id+'">"'+msg.data[i].desc.substr(0,Math.min(msg.data[i].desc.length,150))+((msg.data[i].desc.length > 150)?" ...":" ")+'</div>'+'<div id="mytitle1'+msg.data[i]._id+'"></div>'+'<div class="hid-data" id="desc'+msg.data[i]._id+'">'+msg.data[i].desc+'</div><div class="hid-data" id="rules'+msg.data[i]._id+'">'+msg.data[i].rules+'</div><div class="hid-data" id="venue'+msg.data[i]._id+'">'+msg.data[i].venue+'</div><div class="hid-data" id="timing'+msg.data[i]._id+'">'+msg.data[i].timing.from+' To '+msg.data[i].timing.to+'</div>'
                + '<div class="hid-data" id="coordinators'+msg.data[i]._id+'">'+msg.data[i].coordinators[0].name+" "+msg.data[i].coordinators[0].phone+"  "+"<br>"+((msg.data[i].coordinators[1].phone != 0) ? msg.data[i].coordinators[1].name+" "+msg.data[i].coordinators[1].phone+" ":" ")+'</div>'+
                                 '<div class="hid-data" id="eventtype'+msg.data[i]._id+'">'+ ( (msg.data[i].eventtype == "NA") ? "": msg.data[i].eventtype )+'</div>'+'</div>');
              events.push({
                "eventname": msg.data[i].title,
                "index": 13
              });
            break;
          case "Jhalak":
           $("#cat-jhalak").append('<div class="cat-card" onclick="showevent('+"'"+msg.data[i]._id+"'"+')"><span class="e-name" id="title'+msg.data[i]._id+'">'+msg.data[i].title+'</span><hr>'+'<div  id="mytitle'+msg.data[i]._id+'">"'+msg.data[i].desc.substr(0,Math.min(msg.data[i].desc.length,150))+((msg.data[i].desc.length > 150)?" ...":" ")+'</div>'+'<div id="mytitle1'+msg.data[i]._id+'"></div>'+'<div class="hid-data" id="desc'+msg.data[i]._id+'">'+msg.data[i].desc+'</div><div class="hid-data" id="rules'+msg.data[i]._id+'">'+msg.data[i].rules+'</div><div class="hid-data" id="venue'+msg.data[i]._id+'">'+msg.data[i].venue+'</div><div class="hid-data" id="timing'+msg.data[i]._id+'">'+msg.data[i].timing.from+' To '+msg.data[i].timing.to+'</div>'+
             '<div class="hid-data" id="coordinators'+msg.data[i]._id+'">'+msg.data[i].coordinators[0].name+" "+msg.data[i].coordinators[0].phone+"  "+"<br>"+((msg.data[i].coordinators[1].phone != 0) ? msg.data[i].coordinators[1].name+" "+msg.data[i].coordinators[1].phone+" ":" ")+'</div>'+
              '<div class="hid-data" id="eventtype'+msg.data[i]._id+'">'+ ( (msg.data[i].eventtype == "NA") ? "": msg.data[i].eventtype )+'</div>'+'</div>');
              events.push({
                "eventname": msg.data[i].title,
                "index": 8
              });
            break;
          case "Brixx":
           $("#cat-manan").append('<div class="cat-card" onclick="showevent('+"'"+msg.data[i]._id+"'"+')"><span class="e-name" id="title'+msg.data[i]._id+'">'+msg.data[i].title+'</span><hr>'+'<div  id="mytitle'+msg.data[i]._id+'">"'+msg.data[i].desc.substr(0,Math.min(msg.data[i].desc.length,150))+((msg.data[i].desc.length > 150)?" ...":" ")+'</div>' +'<div class="hid-data" id="desc'+msg.data[i]._id+'">'+msg.data[i].desc+'</div><div class="hid-data" id="rules'+msg.data[i]._id+'">'+msg.data[i].rules+'</div><div class="hid-data" id="venue'+msg.data[i]._id+'">'+msg.data[i].venue+'</div><div class="hid-data" id="timing'+msg.data[i]._id+'">'+msg.data[i].timing.from+' To '+msg.data[i].timing.to+'</div>'+
               '<div class="hid-data" id="coordinators'+msg.data[i]._id+'">'+msg.data[i].coordinators[0].name+" "+msg.data[i].coordinators[0].phone+"  "+"<br>"+((msg.data[i].coordinators[1].phone != 0) ? msg.data[i].coordinators[1].name+" "+msg.data[i].coordinators[1].phone+" ":" ")+'</div>'+
              '<div class="hid-data" id="eventtype'+msg.data[i]._id+'">'+ ( (msg.data[i].eventtype == "NA") ? "": msg.data[i].eventtype )+'</div>'+'</div>');
            break;
        }
      }
    //function to search event which is typed after #
     function searchevents (afterhash, events) {
    for (var j=0; j<events.length; j++) {
        if (events[j].eventname.match(afterhash)) return events[j].index ;
    }
    return -1;
}
 if(afterhash.length!=0)
  {
     var indexx=searchevents (afterhash, events);
     console.log("indexxx after hash "+indexx);
     if(indexx!=-1)
     {
        Reveal.slide( 2, indexx);
        if ($(window).width() < 600)
        {
          $('#eclogo').css({
            'top' : '7.5%',
            'transform': 'translate(-50%,-50%) scale(.4)'
          });
        } else {
          $('#eclogo').css({
            'top' : '10%',
            'transform': 'translate(-50%,-50%) scale(.4)'
          });
        }
       }
   }
     if(afterhash.length!=0)
     {
     var indexx=searchevents (afterhash, events);
     console.log("indexxx after hash "+indexx);
     if(indexx!=-1)
     {
     Reveal.slide( 2, indexx);
      }}
      //for events with index in console
       for (var i = events.length - 1; i >= 0; i--) {
              console.log("EventName: " + events[i].eventname + " Index: " + events[i].index);
            }
    $(".cat-right,.wosh-data").attr('data-simplebar', '');
    // Getting the script
    $.getScript("https://cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.js");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
})
// The parallax
var count = 0;
if ($(window).width() < 600)
{
  if (window.DeviceOrientationEvent)
    {
      window.addEventListener("deviceorientation", deviceOrientation)
    }
} else {
  $("body").mousemove(function( event ) {
    if(count%3 != 0)
    {
      count++;
      return 0;
    }
    count++;
    var top  = $(window).scrollTop();
    var parX = event.pageX/100;
    var parY = event.pageY/100;
    $("#eclogo").css({
      'transform': 'translate('+(-(parX + 50))+'%,'+(-(parY + 50)) +'%)'
    });
    $(".layer1 > *").css({
      'transform': 'translate(-'+parX*2+'%,-'+parY*2+'%)'
    });
  })
}