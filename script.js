const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const phone = document.getElementById("phone");

  let isValid = true;

  clearErrors();

  if (name.value.trim() === "") {
    setError(name, "Name is required");
    isValid = false;
  }

  if (!validateEmail(email.value)) {
    setError(email, "Invalid email address");
    isValid = false;
  }

  if (password.value.length < 6) {
    setError(password, "Password must be at least 6 characters");
    isValid = false;
  }

  if (confirmPassword.value !== password.value) {
    setError(confirmPassword, "Passwords do not match");
    isValid = false;
  }

  if (!/^\d{10}$/.test(phone.value)) {
    setError(phone, "Phone number must be 10 digits");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
}

function setError(input, message) {
  const small = input.nextElementSibling;
  small.innerText = message;
  input.style.borderColor = "red";
}

function clearErrors() {
  const inputs = form.querySelectorAll("input");
  inputs.forEach(input => {
    input.style.borderColor = "#ccc";
    input.nextElementSibling.innerText = "";
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
