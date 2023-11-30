document.getElementById("login-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the entered username and password
    var username = document.getElementById("inputemail").value;
    var password = document.getElementById("inputPassword").value;
    
    if (username === "BankerUsername" && password === "BankerPassword") {
      window.location.href = "Banker.html"; 
    } else if (username === "SystemAdminUsername" && password === "SystemAdminPassword") {
        window.location.href = "SystemAdminOverview.html"; 
      } else if (username === "ClientUsername" && password === "ClientPassword") {
        window.location.href = "ClientOverview.html";  
      }
       else if (username === "" || password === "") {
        swal({
          title: "Please Enter Your Credentials",
          text: "Both email and password are required",
          icon: "error",
          button: {
            text: "OK",
            className: "btn-black",
          },
          closeOnClickOutside: false,
        });}
        else {
        swal({
          title: "Invalid Credentials",
          text: "Please try again",
          icon: "error",
          button: {
            text: "OK",
            className: "btn-black",
          },
          closeOnClickOutside: false,
        });
      }
    });
  
  