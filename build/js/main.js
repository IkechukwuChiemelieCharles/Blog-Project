const initApp = () => {
  const harmburgerBtn = document.getElementById("harmburger");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    harmburgerBtn.classList.toggle("toggle-btn");
  };
  harmburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};
document.addEventListener("DOMContentLoaded", initApp);
// form/////////////////////////////////////////

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
const emailInput = document.getElementById("emailInput");
const subscBtn = document.getElementById("subBtn");
const errorMsg = document.getElementById("error-msg");
const errorBtn = document.getElementById("btn-error");

emailInput.addEventListener("input", function () {
  const email = emailInput.value.trim();
  const isValidEmail = validateEmail(email);

  if (isValidEmail) {
    errorMsg.textContent = "Correct";
    errorMsg.classList.remove("error-msg");
    errorMsg.classList.add("success-msg");
  } else {
    errorMsg.textContent = "Please Check Your Email";
    errorMsg.classList.add("error-msg");
    errorMsg.classList.remove("success-msg");
  }
});

subscBtn.addEventListener("click", function () {
  const email = emailInput.value.trim();
  const isValidEmail = validateEmail(email);

  if (isValidEmail) {
    errorBtn.textContent = "Your Email Has Been Sent";
    errorBtn.classList.add("successBtn");
    errorBtn.classList.remove("errorBtn");
  } else {
    errorBtn.textContent = "Can't Send Email";
    errorBtn.classList.add("errorBtn");
    errorBtn.classList.remove("successBtn");
  }
});
const darkBtn = document.getElementById("dark-btn");
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("darkenmode");
};
