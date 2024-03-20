function showRatingValue() {
  var rating = document.getElementById("page_rating").value;
  document.getElementById("rating_value").innerText = rating;
}

function checkPassword() {
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;
  var password_error = document.getElementById("password_error");

  if (password !== confirm_password) {
      password_error.style.display = "inline";
      document.getElementById("password").value = "";
      document.getElementById("confirm_password").value = "";
      document.getElementById("password").focus();
  } else {
      password_error.style.display = "none";
  }
}