document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if username and password are correct (dummy validation)
    if (username === "admin" && password === "password") {
      // Redirect to dashboard or perform any other action on successful login
      alert("Login successful!");
    } else {
      // Display error message
      document.getElementById("error-msg").innerText = "Invalid username or password. Please try again.";
    }
  });
  