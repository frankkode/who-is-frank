function initMap(){
           var map = new google.maps.Map(document.getElementById("map"),{
               zoom:3,
               center: {
                   lat: 59.362170,
                   lng:18.057896
               }
           });
       
       var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       var locations= [
           {lat: 40.785091, lng:-73.868285},
           {lat: 41.084045, lng:-73.874245},
           {lat: 40.754932, lng:-73.984016},
           {lat:65.775252, lng:21.730351},
           {lat:59.362170, lng:18.057896}
           ];
           
           var markers = locations.map(function(location, i){
               return new google.maps.Marker({
                   position:location,
                   label: labels [i % labels.length]
               });
           });
           
            var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      
       }
    
    