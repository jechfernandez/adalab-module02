'use strict'

const sayHi = document.querySelector('.js-hi');
const herName = document.querySelector ('.js-name');

const handleChange = (event) => {
    console.log(event);
    sayHi.innerHTML = `Hola, ${event.target.value}!`;
};

herName.addEventListener ('change', handleChange);