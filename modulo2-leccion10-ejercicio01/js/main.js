"use strict";

function getNumber(){
fetch('https://api.rand.fun/number/integer')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.body.innerHTML = data.result;
  });
}

document.body.addEventListener("click", getNumber());