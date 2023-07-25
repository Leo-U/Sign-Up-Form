document.getElementById('regForm').addEventListener('submit', function (event) {
  let password = document.getElementById('pword').value;
  let confirmPassword = document.getElementById('pword-conf').value;
  console.log(password);
  console.log(confirmPassword);
  if (password !== confirmPassword) {
    event.preventDefault();
    document.getElementById('missmatch-msg').textContent = 'Passwords do not match';
    let elements = document.getElementsByClassName("pwords");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.borderColor = "red";
    }
  } else {
    document.getElementById('missmatch-msg').textContent = '';
  }
});