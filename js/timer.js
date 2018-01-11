
        
var countDownDate = new Date("March 21, 2018 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var today = new Date().getTime();
    
    // Find the remaining days between now an the count down date
    var remaining = countDownDate - today;
    
                                  // Time calculations for days, hours, minutes and seconds
                                  //because  1 sec=1000 ms
                                  //1 min=60 sec
                                  //1 hr=60 min
                                   //1 day=24 hours and floor function is used
    var days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remaining % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("pg").innerHTML = days + "d : " + hours + "h : "
    + minutes + "m : " + seconds + "s  ";
    
    // If the count down is over, write some text 
    if (remaining < 0) {
        clearInterval(x);
        document.getElementById("pg").innerHTML = "TIMER EXPIRED";
           }
}, 1000);