 const inputBusqueda = document.querySelector('input[type="search"]');
 const contenedorPlatos = document.querySelector('.contenedor-platos')
 const clasePlato = document.querySelectorAll('.contenedor-platos .platos')


/*PREGUNTA 1*/
//Funcion para filtrar los platos por busqueda del cliente
function filtradoPlatos(){
   
    //Seleccion input y su valor
    inputBusqueda.addEventListener('keyup',(e)=>{
    const busqueda=(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))    
    
    //Iterar sobre cada seccion
      clasePlato.forEach(clase=>{
          
          const contenedorClase=(clase.children)
          //obtener cada plato en su clase
          let contenedorPlato;
          for(let contenedor of contenedorClase){
              contenedorPlato=contenedor;
          }
          //texto de cada clase
          const textClase=(clase.textContent)
              
          //Comprobar que hay algo en el input y comparar con el texto del plato
              if(busqueda){
                  if(textClase.includes(busqueda)){
                      //Añadir css para mostrar y ocultar
                      contenedorPlato.classList.remove('filtrado')
                      clase.classList.remove('filtrado')
                      return;
                  }
                  contenedorPlato.classList.add('filtrado')
                  clase.classList.add('filtrado');
              
              return;
              }
          //No hay criterios 
          clase.classList.remove('filtrado')
          contenedorPlato.classList.remove('filtrado')
      })
    })    
  }
  filtradoPlatos();