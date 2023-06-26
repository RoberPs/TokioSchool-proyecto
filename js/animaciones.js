window.onload=()=>{
const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');
const card3 = document.getElementById('card-3');
const card4 = document.getElementById('card-4');
const card5 = document.getElementById('card-5');
const card6 = document.getElementById('card-6');
const card7 = document.getElementById('card-7');
const card8 = document.getElementById('card-8');

const cargarImagen = (entradas,observador)=>{   
    entradas.forEach(entrada => { 
       if(entrada.isIntersecting){
          entrada.target.classList.add('visible') 
        }
    });   
}
const observador = new IntersectionObserver(cargarImagen,{      
    root:null,
    rootMargin:'0px 0px 0px 0px',
    threshold:1
});
observador.observe(card1);
observador.observe(card2);
observador.observe(card3);
observador.observe(card4);
observador.observe(card5);
observador.observe(card6);
observador.observe(card7);
observador.observe(card8);
}

