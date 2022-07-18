function validatePassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let firstName = document.getElementById("firstName").value;
  let errorMessage = document.getElementById("errorMessage");

  console.log("You pressed the button.")
  if (confirmPassword === password) {
    console.log("Your password is " + password + " and your confirmed password is " + confirmPassword +". Passwords match.")
    errorMessage.innerHTML = ""
    alert("Your offering to the Fisherman has been accepted.")
  } else {
    console.log("Your password is " + password + " and your confirmed password is " + confirmPassword +". Passwords do not match.")
    errorMessage.innerHTML = "Password does not match."
  }
}