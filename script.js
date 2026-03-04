const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

function validateName() {
  if (nameInput.value.trim().length < 3) {
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
    nameError.textContent = "Name must be at least 3 characters long.";
    return false;
  } else {
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
    nameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  if (!email.includes("@") || !email.includes(".")) {
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
    emailError.textContent = "Enter a valid email address.";
    return false;
  } else {
    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");
    emailError.textContent = "";
    return true;
  }
}

function validateMessage() {
  if (messageInput.value.trim() === "") {
    messageInput.classList.add("invalid");
    messageInput.classList.remove("valid");
    messageError.textContent = "Message cannot be empty.";
    return false;
  } else {
    messageInput.classList.add("valid");
    messageInput.classList.remove("invalid");
    messageError.textContent = "";
    return true;
  }
}

function checkForm() {
  const nameValid = validateName();
  const emailValid = validateEmail();
  const messageValid = validateMessage();

  submitBtn.disabled = !(nameValid && emailValid && messageValid);
}

nameInput.addEventListener("input", checkForm);
emailInput.addEventListener("input", checkForm);
messageInput.addEventListener("input", checkForm);

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
});
