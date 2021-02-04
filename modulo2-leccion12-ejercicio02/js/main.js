'use strict';

const select = document.querySelector(".js-cities");
const foto1 = document.querySelector(".js-foto1");
const foto2 = document.querySelector(".js-foto2");
const foto3 = document.querySelector(".js-foto3");

function showPhoto() {
  if (select.value === "madrid") {
    foto1.src = "https://i.pinimg.com/564x/72/63/f8/7263f80e4edee05293d11d34f51e9202.jpg";
    foto2.src = "https://culturepassport.co/wp-content/uploads/2017/03/Madrid_20161205_DSC_0140.jpg";
    foto3.src = "https://culturepassport.co/wp-content/uploads/2017/03/Madrid_20161205_DSC_0144.jpg";
  } else if (select.value === "paris") {
    foto1.src = "https://fashiontravelrepeat.com/wp-content/uploads/2019/07/Instagrammable-Places-Paris-Arc-de-Triomph-1024x819.jpg";
    foto2.src = "https://fashiontravelrepeat.com/wp-content/uploads/2019/07/Instagrammable-Places-Paris-Notre-Dame-819x1024.jpg";
    foto3.src = "https://fashiontravelrepeat.com/wp-content/uploads/2019/07/Instagrammble-Places-Paris-Moulin-Rouge-1024x768.jpg";
  } else if (select.value === "nueva-york") {
    foto1.src = "https://media.theeverygirl.com/wp-content/uploads/2017/09/insta_nyc_the_everygirl10.jpg";
    foto2.src = "https://media.theeverygirl.com/wp-content/uploads/2017/09/insta_nyc_the_everygirl18.jpg";
    foto3.src = "https://media.theeverygirl.com/wp-content/uploads/2017/09/insta_nyc_the_everygirl7.jpg";
  }
}

select.addEventListener("change", showPhoto);

// Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid. Haz lo mismo para París y Nueva York
