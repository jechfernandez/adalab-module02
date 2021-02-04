"use strict";

// DECLARE CONST FOR NEEDED ELEMENTS
const form = document.querySelector(".js-form");
const nameInput = document.querySelector(".js-name");
const surnameInput = document.querySelector(".js-surname");

// RETRIEVE DATA FROM LOCAL STORAGE
// FROM DATA TO OBJECT
function getFromLocalStorage() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  nameInput.value = userData.name;
  surnameInput.value = userData.surname;
}

// RETRIEVE DATA IN ONE OBJECT, MAKE IT A STRING
function handleInput() {
  const data = {
    name: nameInput.value,
    surname: surnameInput.value
  };
  localStorage.setItem("userData", JSON.stringify(data));
}

//EVENT
form.addEventListener("keyup", handleInput);

getFromLocalStorage();