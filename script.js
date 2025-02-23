function showLogin() {
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("dashboardSection").style.display = "none";
  }
  
  // Show Registration Section
  function showRegister() {
    document.getElementById("registerSection").style.display = "block";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("dashboardSection").style.display = "none";
  }
  
  // Show Dashboard
  function showDashboard() {
    document.getElementById("registerSection").style.display = "none";
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("dashboardSection").style.display = "block";
  }
  
  // Register User
  document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
      registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let username = document.getElementById("username").value;
        let character = document.getElementById("character").value;
        let password = document.getElementById("password").value;
  
        let users = JSON.parse(localStorage.getItem("users")) || [];
  
        // Check for duplicate username
        if (users.some(user => user.username === username)) {
          alert("Username already exists!");
          return;
        }
  
        let userData = { name, email, username, character, password };
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));
  
        alert("Registration successful! Please login.");
        showLogin();
      });
    }
  
    // Login User
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        let loginUsername = document.getElementById("loginUsername").value;
        let loginPassword = document.getElementById("loginPassword").value;
  
        let users = JSON.parse(localStorage.getItem("users")) || [];
  
        let validUser = users.find(
          user => user.username === loginUsername && user.password === loginPassword
        );
  
        // if (validUser) {
        //     sessionStorage.setItem("loggedInUser", JSON.stringify(validUser));
        //     window.location.href = "dashboard.html"; // Redirect to index.html after login
        //   } else {
        //     alert("Invalid username or password!");
        //   }

        // if (validUser) {
        //   sessionStorage.setItem("loggedInUser", JSON.stringify(validUser));
          
        //   // Create overlay element
        //   const overlay = document.createElement("div");
        //   overlay.id = "transitionOverlay";
        //   overlay.style.position = "fixed";
        //   overlay.style.top = "0";
        //   overlay.style.left = "0";
        //   overlay.style.width = "100%";
        //   overlay.style.height = "100%";
        //   overlay.style.zIndex = "9999";
        //   overlay.style.backgroundImage = "url('Designer (6).jpeg')"; // Replace with your image path
        //   overlay.style.backgroundSize = "cover";
        //   overlay.style.backgroundPosition = "center";
          
        //   // Append overlay to the body
        //   document.body.appendChild(overlay);
          
        //   // After 2 seconds, redirect to dashboard.html
        //   setTimeout(() => {
        //     window.location.href = "dashboard.html";
        //   }, 2000);
        // } else {
        //   alert("Invalid username or password!");
        // }


        if (validUser) {
          sessionStorage.setItem("loggedInUser", JSON.stringify(validUser));
          
          // Create overlay element with animation classes
          const overlay = document.createElement("div");
          overlay.id = "transitionOverlay";
          overlay.style.position = "fixed";
          overlay.style.top = "0";
          overlay.style.left = "0";
          overlay.style.width = "100%";
          overlay.style.height = "100%";
          overlay.style.zIndex = "9999";
          overlay.style.backgroundImage = "url('Designer (6).jpeg')"; // Replace with your image path
          overlay.style.backgroundSize = "cover";
          overlay.style.backgroundPosition = "center";
          
          // Append overlay
          document.body.appendChild(overlay);
          overlay.classList.add("ink-animation");
          
          // Hide all other body elements so the previous page is not visible
          document.querySelectorAll("body > :not(#transitionOverlay)").forEach(el => {
              el.style.display = "none";
          });
          
          // Wait 2 seconds for animation then redirect
          setTimeout(() => {
            window.location.href = "dashboard.html";
          }, 2000);
        } else {
          alert("Invalid username or password!");
        }
        
        
        
          
      });
    }
  
    // Load Dashboard
    function loadDashboard() {
      let loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
  
      if (!loggedInUser) {
        showLogin();
      } else {
        document.getElementById("welcomeMessage").innerText =
          `Welcome, ${loggedInUser.username}! Your favorite HIMYM character is ${loggedInUser.character}.`;

        showDashboard();
      }
    }
  
    // Check if user is already logged in
    if (sessionStorage.getItem("loggedInUser")) {
      loadDashboard();
    }
  });


  // after form added:

  const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



