document.getElementById("login-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
  
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Check if the credentials are valid
    if (username === "Banker" && password === "BankerPass") {
      window.location.href = "Banker.html"; // Redirect to success page for user1
    } else if (username === "SystemAdmin" && password === "SystemAdminPass") {
      window.location.href = "SystemAdmin.html"; // Redirect to success page for user2
    } else if (username === "User" && password === "UaserPass") {
      window.location.href = "User.html"; // Redirect to success page for user3
    }else {
        var errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Invalid credentials"; // Display error message
      }
  });