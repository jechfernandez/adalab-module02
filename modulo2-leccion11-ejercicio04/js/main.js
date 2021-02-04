"use strict";

// const input = document.querySelector(".js-input").value;
// const paragraph = document.querySelector(".js-text");
let input = document.querySelector(".js-input");
let paragraph = document.querySelector(".js-text");

function writeText() {
  paragraph.innerHTML = input.value;
  localStorage.setItem("name", paragraph.innerHTML);
}

input.addEventListener("keyup", writeText);