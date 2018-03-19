function register() {
        // Let's do it
          var name = $("#name").val().trim();
          var phone = $("#phone").val().trim();
          var email = $("#email").val().trim();
          var college = $("#college").val().trim();
          var eventid = $("#events-list").val().trim();
          if(name=="" && phone=="" &&email=="" && college=="" &&eventid=="010")
          {
            alert("Please fill all fields properly");
            return 0;
          }
          if (phone == "" || phone.length != 10)
          {
            alert("Please enter a valid phone number.");
            $("#phone").css("border-color", "red");
            setTimeout(function(){
              $("#phone").css("border-color", "white");
            },1500)
            return 0;
          }

          if (name == "")
          {
            alert("Please Enter a Name");
            $("#name").css("border-color", "red");
            setTimeout(function(){
              $("#name").css("border-color", "white");
            },1500)
            return 0;
          }
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       if (!filter.test(email)) {
    alert('Please provide a valid email address');
     $("#email").css("border-color", "red");
            setTimeout(function(){
              $("#email").css("border-color", "white");
            },1500)
    return 0;
 }
          if (eventid == "010")
          {
            alert("Please select an event");
            return 0;
          }
          
          $.ajax({
            url: 'https://elementsculmyca2018.herokuapp.com/api/v1/events/register',
            type: 'POST',
            data: {name: name, phone: phone, email: email, college: college, eventid: eventid},
          })
          .done(function(msg) {
            msg = JSON.parse(msg);
            console.log(msg);
            if (msg.success ==  1)
            {
              swal({
                title: "Alright, Sparky!",
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

          })
          .fail(function() {
            console.log("error");
          })
      }