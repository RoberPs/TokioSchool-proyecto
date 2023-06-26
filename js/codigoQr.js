
window.onload=()=>{

   const qr = document.getElementById('codigo-qr');
   console.log(qr)
   new QRCode(qr,{
         text:'http://www.sabordetaste.com/takeaway.html',
         width: 120,
         height: 120, 
   });
   
}






