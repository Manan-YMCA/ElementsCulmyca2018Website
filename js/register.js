function register() {
        // Let's do it
        if ($('#regform')[0].checkValidity())
        {
          var name = $("#name").val().trim();
          var phone = $("#phone").val().trim();
          var email = $("#email").val().trim();
          var college = $("#college").val().trim();
          var eventid = $("#events-list").val().trim();

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
        } else {
          alert("Please fill all the fields properly")
        }
      }