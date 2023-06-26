//AVISO COOKIES

const btnCookies = document.getElementById('btn-cookies-aceptar');
const divCookies = document.getElementById('aviso-cookies');
console.log(divCookies)
const fondoCookies=document.getElementById('fondo-aviso-cookies');




// En caso de que no haya aceptación anterior activamos el banner
if(!localStorage.getItem('cookies-aceptadas')){
   //Añadir clase activo con el display block css
    divCookies.classList.add('activo');
    fondoCookies.classList.add('activo')
  
}


btnCookies.addEventListener('click',()=>{

    divCookies.classList.remove('activo');
    fondoCookies.classList.remove('activo')
    //para almacenar el acto de aceptacion de las cookies 
    localStorage.setItem('cookies-aceptadas',true);


})