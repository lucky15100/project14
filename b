const profileDetails = document.getElementById('profile-details');
const usernameSpan = document.getElementById('username');
const passwordSpan = document.getElementById('password');
const accessTokenSpan = document.getElementById('access-token');
const logoutButton = document.getElementById('logout-button');

// Check if user data is present in local storage
const userData = JSON.parse(localStorage.getItem('user'));

if (userData) {
  usernameSpan.textContent = userData.username;
  passwordSpan.textContent = userData.password;
  accessTokenSpan.textContent = userData.accessToken;
} else {
  // If user data is not present, redirect to signup page
  window.location.href = '/';
}

logoutButton.addEventListener('click', function () {
  // Clear user data from local storage and redirect to signup page
  localStorage.removeItem('user');
  window.location.href = '/';
});
