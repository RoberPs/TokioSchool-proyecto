window.onload=()=>{

   const formulario = document.getElementById('formulario');
  
   const btnEnviar = document.querySelector('button[type="submit"]');
   const nombre = document.getElementById('nombre');
   const telefono = document.getElementById('telefono');
   const email = document.getElementById('email');
   const fecha = document.getElementById('fecha');
   const observaciones = document.getElementById('observaciones')
   
   const objReserva = {
      nombre:'',
      telefono:'',
      email:'',
      fecha:'',
   }
   
   const validarCampos=(e)=>{
      
       if(e.target.value.trim() ==='' || Number(nombre.value)){ 
         mensajeError(`El campo ${e.target.id} es obligatorio`,e.target.parentElement)
         objReserva[e.target.id]='';
         comprobarReserva();
         return;
       }
       if(e.target.id==='telefono'&& !validarTelefono(e.target.value)){
         mensajeError('El telefono no es valido',e.target.parentElement);
         objReserva[e.target.id]='';
         comprobarReserva();
         return;
       }
       if(e.target.id==='email' && !validarEmail(e.target.value)){
         mensajeError('email no valido',e.target.parentElement)  
         objReserva[e.target.id]='';
         comprobarReserva();
         return;
       }
       
       limpiarMensaje(e.target.parentElement);

       objReserva[e.target.id]=e.target.value;

       comprobarReserva();
   }
   const comprobarReserva=()=>{
     
      if(Object.values(objReserva).includes('')){
         btnEnviar.disabled=true;
      }else{
         btnEnviar.disabled=false;
        
      }
   }
   const mensajeError=(mensaje,ref)=>{

         limpiarMensaje(ref);
      
         const mensajeCampo = document.createElement('p');
         mensajeCampo.textContent=mensaje;
         mensajeCampo.classList.add('mensaje-campos');
         ref.appendChild(mensajeCampo)
      
   }
   const limpiarMensaje=(ref)=>{
      
      const alerta =ref.querySelector('.mensaje-campos')
      
      if(alerta){
         alerta.remove();
      }
   
   }
   const validarTelefono = (telefono)=>{
      const regexTel = /^(\+34|0034|34)?[6789]\d{8}$/;

      const resultadoTel = regexTel.test(telefono);
      return resultadoTel;
 
   }
   const validarEmail = (email)=>{
   
      const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

      const resultado =regex.test(email);
      return resultado;
   }
   const validarObservaciones=(e)=>{
      
      if(e.target.id==='observaciones' && e.target.value!==''){
        objReserva[e.target.id]=e.target.value;
        console.log(objReserva);
        return;
      }
   }
   const alertaEnviado =()=>{
   
      Swal.fire({
         position: 'top',
         width:250,
         icon: 'success',
         footer: '<span class="texto-alerta">Reserva enviada correctamente</span>',
         showConfirmButton: false,
         timer: 2000
       })
   }
   const enviarFormulario=()=>{
      
      alertaEnviado();
   }
 
   const eventos=()=>{
      
      nombre.addEventListener('input',validarCampos)
      telefono.addEventListener('input',validarCampos)
      email.addEventListener('input',validarCampos)
      fecha.addEventListener('input',validarCampos)
     
      observaciones.addEventListener('input',validarObservaciones)
      
      formulario.addEventListener('submit',enviarFormulario)
   
   }
   eventos();

}







     
  






