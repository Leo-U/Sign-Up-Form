let password = document.getElementById('pword');
let confirmPassword = document.getElementById('pword-conf');
let message = document.getElementById('missmatch-msg');
let registerForm = document.getElementById('regForm');

function validatePassword() {
  let elements = document.getElementsByClassName("pwords");

  if (password.value != confirmPassword.value) {
    message.textContent = 'Passwords do not match';
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.borderColor = "red";
    }
  } else {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.borderColor = "#04b34c";
    }
    message.textContent = '';
  }
}

password.oninput = validatePassword;
confirmPassword.oninput = validatePassword;

registerForm.onsubmit = function (event) {
  if (password.value != confirmPassword.value) {
    event.preventDefault();
  }
}