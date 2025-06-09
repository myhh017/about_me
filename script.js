// script.js

function sayHi() {
  alert("Hiii bestiee ~ 👋✨ Thanks for visiting my page!");
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("sayHiBtn");
  if (btn) {
    btn.addEventListener("click", sayHi);
  }
}); 
