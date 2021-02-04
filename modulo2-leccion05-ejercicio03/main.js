'use strict'

const text = document.querySelector('.paragraph');
const hiddenText = document.querySelector('.paragraph-b')
text.addEventListener('mouseover', () => hiddenText.classList.remove('hidden'));