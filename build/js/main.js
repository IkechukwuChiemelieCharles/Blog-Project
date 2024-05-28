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

// toggle////////////////////////////////////////
const darkBtn = document.getElementById("dark-btn");
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("darkenmode");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};
if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("darkenmode");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("darkenmode");
} else {
  localStorage.setItem("theme", "light");
}
// trial///////////////////////////
// const toggle = document.getElementById("dark-btn");
// const sun = document.getElementById("sunny");

// toggle.addEventListener("click", function () {
//   if (this.click) {
//     document.body.classlist.add("sunny");
//   } else {
//     document.body.classList.remove("sunny");
//   }
// });
