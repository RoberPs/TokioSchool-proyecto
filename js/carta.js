
 //Variables
 const entrantes = document.querySelectorAll('.carta-entrantes .contenido-plato')
 
 //Arreglos donde se almacena el pedido de platos
  let pedido=[]
//Objeto de cada pedido
  let infoPlato ={
    nombre:'',
    ingredientes:'',
    precio:'',
    cantidad:'',
    id:'', 
 }
  let pagoTotal ={
    totalCuenta : '',
 }
 



//funciones

//PREGUNTA 2*/
//Crear un carrito para el pedido y añadir a la reserva

const  guardarPlato=(entrantes)=>{
      
    entrantes.forEach(plato=>{
        
        //Seleccionar datos de cada plato
        const{id}=plato
        const nombre = plato.children[0].children[0].textContent;
        const ingredientes = plato.children[0].children[1].textContent;
        const precio =Number(plato.children[1].children[0].textContent).toFixed(2);
        
            
        const inputCantidad= document.createElement('INPUT');
       
       
        //Crear input para la cantidad  
        inputCantidad.type='number';
        inputCantidad.min=0;
        inputCantidad.max=10,
        inputCantidad.classList.add('mt-3','w-75','ms-4')
        inputCantidad.onchange=(e)=>{
           const cantidad=(Number(e.target.value))
            
           //obener la cantidad del input
           infoPlato.cantidad= cantidad;
           
                  
           //Añadir datos del plato al objeto infoPlato
           infoPlato ={id,nombre,ingredientes,precio,cantidad}
           
           //funcion para detectar el id del plato
           agregarPlato(infoPlato)
        }
        //Añadir input al html de cada plato
        const platoPrecio = plato.children[1];
        platoPrecio.classList.add('d-flex','flex-column','justify-content-center')
        platoPrecio.appendChild(inputCantidad)
          
    }) 
     
}
guardarPlato(entrantes);
//Calcular totales plato
function totales(precio,cantidad){
    return `${cantidad * precio} €`;
}
//Agregar cada plato
function agregarPlato(infoPlato){
   
    //Extraer la cantidad del obj
    let{cantidad}=infoPlato;
     
    //Si la cantidad es mayor a 0
    if(cantidad > 0){
          
         //Comprobar si el plato añadido ya existe en el arreglo de pedido
        if(pedido.some(plato=> plato.id===infoPlato.id)){
          // Si el plato ya existe actualizamos cantidad creando un nuevo arreglo actualizado
             const actualizado = pedido.map(plato=>{
                if(plato.id === infoPlato.id){
                    //Actualizar cantidad
                   plato.cantidad =cantidad
                   
                }
                //retornamos el plato para que lo asigne al nuevo arreglo
                return plato;
            });
            //se asigna el nuevo arreglo al pedido
            pedido=[...actualizado]

        }else{
            //El plato no existe lo agregamos
            pedido = [...pedido,infoPlato]    
        }
        
    }else{
      //Eliminar elementos cuando la cantidad es 0
      //Si se elimina la cantidad del input se elimina del arreglo 
      const resultado = pedido.filter(plato=>plato.id!==infoPlato.id)
      console.log(resultado)
      //Actualizamos pedido
      pedido =[...resultado]
    }

  
   realizarPedido(pedido)
}
//pedido y confirmación
function realizarPedido(pedido){
    
    const modalContenedor = document.querySelector('.modal .modal-content')
    const modalHeader=document.querySelector('.modal .modal-header')
    const modalBody = document.querySelector('.modal .modal-body')

    let resultado;
    limpiarHtml(modalBody); 
     
    pedido.forEach(plato=>{
      
       const{nombre,cantidad,precio}=plato;
      
       //Div para cada plato
       const divPlato = document.createElement('DIV');
       
       //Nombre del plato
       const nombrePlato = document.createElement('P');
       nombrePlato.textContent=nombre;
       //Añadir el nombre al contenedor
       divPlato.appendChild(nombrePlato)  
       

       //Div cantidad
       const cantidadDiv = document.createElement('DIV');
       cantidadDiv.classList.add('d-flex','justify-content-start','align-center')
       //Texto cantidad
       const textoCantidad= document.createElement('P');
       textoCantidad.textContent='Cantidad :';
       textoCantidad.classList.add('fw-bold')
       //Cantidad
       const cantidadSpan= document.createElement('span');
       cantidadSpan.textContent=cantidad;
       
       //Añadir a los contenedores
       cantidadDiv.appendChild(textoCantidad)
       cantidadDiv.appendChild(cantidadSpan)
       divPlato.appendChild(cantidadDiv)
       
       //Div precio 
       const precioDiv = document.createElement('DIV');
       precioDiv.classList.add('d-flex','justify-content-start','align-center')
       
       //Texto Precio
       const textoPrecio= document.createElement('P');
       textoPrecio.textContent='Precio :';
       textoPrecio.classList.add('fw-bold')
       //Precio
       const precioSpan= document.createElement('span');
       precioSpan.textContent=`${precio} €`;
       
       //Añadir a los contenedores
       precioDiv.appendChild(textoPrecio)
       precioDiv.appendChild(precioSpan)
       divPlato.appendChild(precioDiv)
       
       
       const divSubtotales = document.createElement('DIV');
       divSubtotales.classList.add('d-flex','justify-content-start','align-items-center')
       const textoSubtotal = document.createElement('P');
       textoSubtotal.textContent='Subtotal:'
       
       const SubtotalSpan = document.createElement('SPAN');
       SubtotalSpan.textContent= totales(cantidad,precio);

       divSubtotales.appendChild(textoSubtotal)
       divSubtotales.appendChild(SubtotalSpan);

       divPlato.appendChild(divSubtotales)
       //Añadir todo el plato completo al modal
       modalBody.appendChild(divPlato)

    })
   
    calcularTotalPagar(pedido);
    
}
//Total pedido
function calcularTotalPagar(pedido){
   
    let totalPagar = 0;
    pedido.forEach(plato=>{
       totalPagar += plato.cantidad * plato.precio;
    })

    totalPagar=totalPagar.toFixed(2);
    
    const aPagar= document.createElement('DIV')
    
    const total = document.createElement('P');
    total.textContent='TOTAL A PAGAR :';

    const totalCantidad = document.createElement('SPAN');
    totalCantidad.textContent= `${totalPagar} €`
    

    aPagar.appendChild(total)
    aPagar.appendChild(totalCantidad)
   
    const modalBody = document.querySelector('.modal .modal-body')
    modalBody.appendChild(aPagar)
    
    pagoTotal.totalCuenta =`${totalPagar} €`;
    
    pedido = [...pedido,pagoTotal]
   
    console.log(pedido)   
}



export {pedido,infoPlato,pagoTotal}








function limpiarHtml(modalBody){
    while(modalBody.firstChild){
        modalBody.removeChild(modalBody.firstChild)
    }
}










