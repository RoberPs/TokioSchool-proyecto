function initMap(){

    const mapDiv = document.getElementById('map');
    
     
    const espCoords = {lat: 40.463667 ,lng: -3.74922};
    const madrid = {lat:40.4165000 ,lng:-3.7025600}
  
  
    const map = new google.maps.Map(mapDiv,{
  
         center :espCoords,
         zoom: 8,
    });
  
    new google.maps.Marker({
          position:madrid,
          map:map,
    });
  }

  

     
  
  