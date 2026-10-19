var btnBlue = document.getElementById("btnBlue");
var btnGreen = document.getElementById("btnGreen");
var btnPurple = document.getElementById("btnPurple");

var contactForm = document.getElementById("contactForm");
var userName = document.getElementById("userName");
var formResponse = document.getElementById("formResponse");

btnBlue.addEventListener("click", function () {
  document.body.className = "theme-blue";
});

btnGreen.addEventListener("click", function () {
  document.body.className = "theme-green";
});

btnPurple.addEventListener("click", function () {
  document.body.className = "theme-purple";
});

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = userName.value;
  formResponse.innerText = "Thank you, " + name + "! Your message has been sent successfully.";

  contactForm.reset();
});