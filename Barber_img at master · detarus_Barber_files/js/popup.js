var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    console.log("login.value");
    console.log("password.value");

});

link.addEventListener("clik", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
});

close.addEventListener("clik", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});