{"filter":false,"title":"maps.js","tooltip":"/assets/css/js/maps.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":30,"column":4},"action":"insert","lines":["function initMap(){","           var map = new google.maps.Map(document.getElementById(\"map\"),{","               zoom:3,","               center: {","                   lat: 59.362170,","                   lng:18.057896","               }","           });","       ","       var labels = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";","       var locations= [","           {lat: 40.785091, lng:-73.868285},","           {lat: 41.084045, lng:-73.874245},","           {lat: 40.754932, lng:-73.984016},","           {lat:65.775252, lng:21.730351},","           {lat:59.362170, lng:18.057896}","           ];","           ","           var markers = locations.map(function(location, i){","               return new google.maps.Marker({","                   position:location,","                   label: labels [i % labels.length]","               });","           });","           ","            var markerCluster = new MarkerClusterer(map, markers,","            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});","      ","       }","    ","    "],"id":1}]]},"ace":{"folds":[],"scrolltop":39,"scrollleft":0,"selection":{"start":{"row":5,"column":29},"end":{"row":5,"column":29},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":1,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1561401414774,"hash":"61eca576c9bda2f73a0f2f89b12fbcf7c0779f7d"}