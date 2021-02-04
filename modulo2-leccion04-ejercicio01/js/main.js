'use strict'


function media(a,b,c,d){
    return (a+b+c+d)/4
};

const resultmedia = media(40,77,332,5);

console.log(resultmedia);

function iva(a){
    return 'Precio sin IVA: ' + a + ', IVA: ' + a*0.21 + 'y Total: ' + a*1.21;
};

console.log(iva(100))

function pairs(a){
    if (a%2 === 0){
        console.log('True');
    }
    else{
        console.log('False')
    }

    return
}

console.log(pairs(233))

function getEl(a){
    return document.querySelector(a)
};

const textEl = getEl('.text');

console.log(textEl);
