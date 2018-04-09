
    if(localStorage.getItem("verified") == "YES" && localStorage.getItem("phonenumber") != " ") {
      var n = localStorage.getItem("phonenumber");
      showMyTickets(n);
        $(".siema1").css("display","none");
        $("#logoutbtn").css("display","block");
    }


		function showMyTickets(phone) {
			
			var url = 'https:elementsculmyca2018.herokuapp.com/api/v1/events/gettickets/'+ phone;
			console.log(url);

				
			 $.ajax({
            url:  url,
            type: 'GET',
            
          })
          .done(function(msg) {
            msg = JSON.parse(msg);
            console.log(msg);
          
            if (msg.success ==  1)
            {
            	for(i =0; i < msg.data.length;i++) {
            		

            	getEventdate1(msg.data[i].eventname,msg.data[i].qrcode,msg.data[i].arrived);
     
            	

            	}
            } 
          })
          .fail(function() {
            console.log("error");
          })

		}

		function getEventdate1(eventname,qrcode,arrivalstatus) {

			 $.ajax({
		
            url: 'https://elementsculmyca2018.herokuapp.com/api/v1/events/getevent/*/*',
            type: 'GET',
          })
          .done(function(msg) {
            msg = JSON.parse(msg);
            console.log(eventname);

            if (msg.success ==  1)
            {
             	
               for(i=0;i<msg.data.length;i++) {
              		
               	if(msg.data[i].title == eventname) {
               	var date1 = msg.data[i].timing.from;
                var fees = msg.data[i].fee;
        		var d2 = new Date(parseInt(date1));
            $(".myTickets").css("display","block");
            if ( arrivalstatus == "0" ) {
        		$(".myTickets").append(
                '<div class="card">'+'<img src="https://api.qrserver.com/v1/create-qr-code/?data='+qrcode+'&amp;size=70x70">'
              +'<div class="container">'+'<p>'+eventname+'</p>' +'<p>'+'April '+d2.getDate()+','+'2018 '+'</p>'+'<p>' +((d2.getHours()>12)? d2.getHours()%12:d2.getHours())+":"+((d2.getMinutes()<10)? '0'+d2.getMinutes():d2.getMinutes())+((d2.getHours()>=12)? 'PM':'AM') + '<p>'+'Rs.'+ fees +'</p>'+'</div>'+'</div>'

              );
          }
           else {
              $(".myTickets").append(
                '<div class="card">'+'<img src="qr.jpg">'
              +'<div class="container">'+'<p>'+eventname+'</p>' +'<p>'+'April '+d2.getDate()+','+'2018 '+'</p>'+'<p>' +((d2.getHours()>12)? d2.getHours()%12:d2.getHours())+":"+((d2.getMinutes()<10)? '0'+d2.getMinutes():d2.getMinutes())+((d2.getHours()>=12)? 'PM':'AM') + '<p>'+'Rs.'+ fees +'</p>'+'</div>'+'</div>'

              );

           }    		
               		
               		}

               }
              
			}
            
          })
          .fail(function() {
            console.log("error");
          })
     

		}
	

	





 








	function sendotp() {
		var phone = $("#mobnumber").val();
		if(phone.length !=10 || phone == "") {
				alert("Enter appropriate number");
		}

		 $.ajax({
            url: 'https://elementsculmyca2018.herokuapp.com/api/v1/otp/send',
            type: 'POST',
            data: {phone: phone},
          })
          .done(function(msg) {
            msg = JSON.parse(msg);
            console.log(msg);
            $("#numberform").css("display","none");
            if (msg.success ==  1)
            {
              swal({
                title: "Check your phone",
                text: msg.msg,
                icon: "success",

              });

               $("#otpverify").css("display","block");
            } else {
            
               $("#numberform").css("display","block");
            }
           

          })
          .fail(function() {
            console.log("error");
          })


	}

	function verifyotp() {
		var otp = $("#otp").val();

	var phone = $("#mobnumber").val();
		console.log(phone);

		$.ajax({
            url: 'https://elementsculmyca2018.herokuapp.com/api/v1/otp/verify',
            type: 'POST',
            data: {phone: phone ,otp : otp},
          })
          .done(function(msg) {
            msg = JSON.parse(msg);
            console.log(msg);
            if (msg.success ==  1)
            {
            	$("#otpverifyform").css("display","none");
              $(".siema1").css("display","none");
              
              $("#logoutbtn").css("display","block");
                     localStorage.setItem("verified", "YES");
                     localStorage.setItem("phonenumber",phone)                    
            	showMyTickets(phone);
              swal({
                title: "OTP verified",
                text: msg.msg,
                icon: "success",
              });
            } else {
              swal({
                title: "Whoops!",
                text: msg.msg,
                icon: "error",
              });
            }
            $("#otpverify").css("display","block");

          })
          .fail(function() {
            console.log("error");
          })

	}


function logout() {

$(".siema1").css("display","block");
$("#logoutbtn").css("display","none");
localStorage.removeItem("verified");
localStorage.removeItem("phonenumber");
$(".myTickets").css("display","none");
$("#numberform").css("display","block");
$("#otpverify").css("display","none");
$("#mobnumber").val('');;
$("#otp").val('');
}
