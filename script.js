// script.js

function sayHi() {
  alert("Hello there ~ 👋✨ Thanks for visiting my page!");
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("sayHiBtn");
  if (btn) {
    btn.addEventListener("click", sayHi);
  }
}); 
