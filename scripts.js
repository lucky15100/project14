// script.js
document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const accessToken = Math.random().toString(36).substr(2);

  const userState = {
    fullName: fullName,
    email: email,
    password: password, 
    accessToken: accessToken
  };

  localStorage.setItem("userState", JSON.stringify(userState));

  const messageDiv = document.getElementById("signup-message");
  messageDiv.innerText = "Signup successful!";
  messageDiv.style.color = "green";
  setTimeout(() => {
    window.location.href = "/profile.html";
  }, 2000);
});

document.addEventListener("DOMContentLoaded", function() {
  const userState = JSON.parse(localStorage.getItem("userState"));
  if (userState) {
    const userDetailsDiv = document.getElementById("user-details");
    userDetailsDiv.innerHTML = `
      <h2>User Profile</h2>
      <p><strong>Full Name:</strong> ${userState.fullName}</p>
      <p><strong>Email:</strong> ${userState.email}</p>
    `;
  } else {
    window.location.href = "/signup.html";
  }
});

document.getElementById("logout").addEventListener("click", function() {
  localStorage.removeItem("userState");
  window.location.href = "/signup.html";
});
