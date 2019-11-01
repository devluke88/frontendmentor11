    function validation() {
      // Email Validation
      var fname = document.getElementById("fname").value;
      var errorMsgFName = document.getElementById("fname-error");
      var lname = document.getElementById("lname").value;
      var errorMsgLName = document.getElementById("lname-error");
      var email = document.getElementById("email").innerHTML;
      var errorMsgEmail = document.getElementById("email-error");
      var pass = document.getElementById("pass").value;
      var errorMsgPass = document.getElementById("pass-error");

        if (fname == "" || fname == null || fname.length == 0) {
          errorMsgFName.style.display = "block";
        }
        else {
          errorMsgFName.style.display = "none";
        }

        if (lname == "" || lname == null || lname.length == 0) {
          errorMsgLName.style.display = "block";
        }
        else {
          errorMsgLName.style.display = "none";
        }

        if ((/(.+)@(.+){2,}\.(.+){2,}/.test(email)) || email == "" || email == null) {
          errorMsgEmail.style.display = "block";
        }
        else {
          errorMsgEmail.style.display = "none";
        }

        if (pass == "" || pass == null || pass.length == 0) {
          errorMsgPass.style.display = "block";
        }
        else {
          errorMsgPass.style.display = "none";
        }
      }
 