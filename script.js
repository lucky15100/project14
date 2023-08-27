// Get DOM elements
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmpassword");
const signupBtn = document.getElementById("signup");
const msg = document.getElementById("message");
const timer = document.getElementById("timer");

// Initialize user data and token
let userData = {};
const generatedToken = generateToken();

// Check if the user is authenticated
function isAuthenticated() {
  return localStorage.getItem("accessToken") !== null;
}

// Sign up function
function signUp() {
  const name = fullName.value;
  const e = email.value;
  const pass = password.value;
  const cp = confirmPass.value;

  if (name === '' || e === '' || pass === '' || cp === '') {
    msg.innerHTML = `<p class="e-msg">Error: All fields are mandatory</p>`;
    return;
  } else if (pass !== cp) {
    msg.innerHTML = `<p class="e-msg">Error: Passwords do not match</p>`;
    return;
  } else if (pass.length < 6 || cp.length < 6) {
    msg.innerHTML = `<p class="e-msg">Error: Password must be at least 6 characters long</p>`;
    return;
  }

  msg.innerHTML = `<p class="s-msg">Successfully Signed Up!</p>`;
  fullName.value = '';
  email.value = '';
  password.value = '';
  confirmPass.value = '';

  userData = {
    name: name,
    email: e,
    password: pass,
    accessToken: generatedToken,
  };

  localStorage.setItem('userData', JSON.stringify(userData));

  timer.innerHTML = `<p class="time">You will be redirected in 2 seconds...</p>`;

  setTimeout(() => {
    window.location.href = 'profile.html';
  }, 2000);
}

// Populate profile information
function Profile() {
  if (isAuthenticated()) {
    window.location.href = 'profile.html';
  }

  const userData = JSON.parse(localStorage.getItem('userData'));
  const name = document.getElementById("username");
  const em = document.getElementById("useremail");
  const p = document.getElementById("userpass");

  name.innerHTML = userData.name;
  em.innerHTML = userData.email;
  p.innerHTML = userData.password;
}

// Logout function
function logout() {
  localStorage.removeItem('userData');
  window.location.href = 'index.html';
}

// Generate random token
function generateToken(length = 10) {
  const tokens = new Uint8Array(length);
  crypto.getRandomValues(tokens);

  const token = Array.from(tokens, byte => byte.toString(16).padStart(2, '0')).join('');
  return token;
}
