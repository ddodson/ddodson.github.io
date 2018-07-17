/**
 * tour_stop_data array of objects with data on each tour stop including 
 * date, coordinates, city, venue info, facebook eventy page, and line up.
 *
 * NOTE: traditionally shows indicate the order of performances, however,
 * we have a tradition of not announcing the order of performers.  
 * If I was doing this for the more traditional model, I would have 
 * arranged the bands in the order of apperanaces or added an indication 
 * of headliners.
 *
 * With more time I would move this info to a database and do an AJAX.
 * 
 * @type Array
 * 
 * @author David Dodson <david.dodson.001@gmail.com>
 */
var tour_stop_data = [{
    date: new Date(2018, 07, 03, 00, 00, 00, 00),
    lat: 39.9831403,
    lng: -83.2710211,
    city: 'Columbus',
    state: 'OH',
    venue: {},
    fb: '',
    performers: ['Tactil Vision', 'Freeze Etch', 'Architect', 'Textbeak'],
    flier: 'images/0803.jpg',
  },{
    date: new Date(2018, 07, 04, 00, 00, 00, 00),
    lat: 41.4977042,
    lng: -81.8459456,
    city: 'Cleveland',
    state: 'OH',
    venue: {},
    fb: '',
    performers: ['Abstinence','Nau-Zee-auN','Tactil Vision','Red Pyramid','Textbeak'],
    flier: 'images/default.jpg',
  },{
    date: new Date(2018, 07, 05, 00, 00, 00, 00),
    lat: 42.348941,
    lng: -83.0644807,
    city: 'Detroit',
    state: 'MI',
    venue: {
      name: 'The Old Miami',
      address: '3930 Cass Ave, Detroit, Michigan 48201',
      phone: '(313) 831-3830',
    },
    fb: '',
    performers: ['Abstinence','Nau-Zee-auN','Journey to the Center of the Colon','Freeze Etch','Fluxion A/D','S.A.P.','DJ Nemesis'],
    flier: 'images/0805.jpg',
  },{
    date: new Date(2018, 07, 11, 00, 00, 00, 00),
    lat: 39.1218698,
    lng: -84.5334866,
    city: 'Cincinnati',
    state: 'OH',
    venue: {
      name: 'The Mockbee',
      address: '2260 Central Pkwy, Cincinnati, OH 45214',
      phone: '(513) 621-1900',
    },
    fb: 'https://www.facebook.com/events/394109257765788/',
    performers: ['Abstinence','Nau-Zee-auN','Journey to the Center of the Colon','Tactil Vision','Freeze Etch','Decide Today','Divtech'],
    flier: 'images/0811.jpg',
  },{
    date: new Date(2018, 07, 12, 00, 00, 00, 00),
    lat: 40.008639,
    lng: -83.0002007,
    city: 'Columbus',
    state: 'OH',
    venue: {
      name: 'Cafe Bourbon Street',
      address: '2216 Summit St, Columbus, OH 43201',
      phone: '(614) 725-5256',
      website: 'http://cafebourbonstreet.com',
    },
    fb: 'https://www.facebook.com/events/353554445173582/',
    performers: ['Abstinence','Nau-Zee-auN','Tactil Vision','Red Pyramid','Curse of Cassandra'],
    flier: 'images/0812.jpg',
  },{
    date: new Date(2018, 07, 14, 00, 00, 00, 00),
    lat: 42.1232118,
    lng: -80.0849867,
    city: 'Erie',
    state: 'PA',
    venue: {
      name: 'Basement Transmissions Concert Hall',
      address: '145 W 11th St, Erie, PA 16501',
      phone: '(814) 520-8328',
    },
    fb: 'https://www.facebook.com/events/394109257765788/',
    performers: ['Abstinence','Nau-Zee-auN','Journey to the Center of the Colon','Tactil Vision','Greyscape'],
    flier: 'images/default.jpg',
  }];

/**
 * myMap build's the map
 * @author David Dodson <david.dodson.001@gmail.com>
 */
function myMap() {
  var mapCanvas = document.getElementById("map");

  var mapOptions = {
    center: new google.maps.LatLng(41, -82),
    zoom: 7,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#003300'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#000000'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#ffffff'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#aaaaaa'}]
      },{
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ff55FF'}]
      },{
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#009900'}]
      },{
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#00FF00'}]
      },{
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#334444'}]
      },{
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#0000FF'}]
      },{
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#AAAAAA'}]
      },{
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#00FF00'}]
      },{
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#0000FF'}]
      },{
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]
      },{
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#FFFF00'}]
      },{
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9966FF'}]
      },{
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#6666ff'}]
      },{
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]
      },{
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#FF0000'}]
      }
    ]
  };

  var map = new google.maps.Map(mapCanvas, mapOptions);
  var markers = [];
  var coordinates = [];
  var contentString = [];
  //var infowindow = [];
  var infoWindow = new google.maps.InfoWindow(), marker, i;

  for (var i = 0; i < tour_stop_data.length; i++) {
    coordinates[i] = { lat: tour_stop_data[i].lat, lng: tour_stop_data[i].lng };
    var title = tour_stop_data[i].date.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })+': '+tour_stop_data[i].city+', '+tour_stop_data[i].state;
    var lineup = '';
    var prefix = '';

    //build line up string
    for (var j = 0; j < tour_stop_data[i].performers.length; j++) {
      lineup += prefix + '<b>' + tour_stop_data[i].performers[j] + '</b>';
      prefix = ', ';
    }

    var address = '';
    var venue_info = '';
    var venue_url = '';
    var link_end = '';
    var fb = '';

    if((tour_stop_data[i].venue.address != '') && (typeof tour_stop_data[i].venue.address != 'undefined')){
      var address = '<p>address: '+tour_stop_data[i].venue.address+'</p>';
    }

    if((tour_stop_data[i].venue !== {}) && (typeof tour_stop_data[i].venue != 'undefined')){
      if((tour_stop_data[i].venue.website !== '') && (typeof tour_stop_data[i].venue.website != 'undefined')){
        venue_url = '<a href="'+tour_stop_data[i].venue.website+'" target="_blank">';
        link_end = '</a>';
      }
      
      venue_info = venue_url+tour_stop_data[i].venue.name+link_end;
      
      if(venue_info == 'undefined'){ 
        venue_info = 'tbd'; 
      }
    }

    if((tour_stop_data[i].fb !== '') && (typeof tour_stop_data[i].fb != 'undefined')){
      fb = '<a href="'+tour_stop_data[i].fb+'" target="_blank">Facebook Event Page</a>';
    }
    //on click popup bubble
    contentString[i] = '<div id="content" style="background-color:#000;"><div id="siteNotice"></div>'+
      '<h1 id="firstHeading'+i+'" class="firstHeading">'+title+'</h1>'+
      '<h2 id="secondHeading'+i+'" class="secondHeading">'+venue_info+'</h2>'+address+
      '<div id="bodyContent"><p>line up: '+lineup+'<br>'+fb+'</p>'+
      '<br><a href="https://www.youtube.com/playlist?list=PLrq41F0tYwHN5kme6ADOnDBYIy3loveGH" target="_blank">Video</a>'+
      '<br>Audio: <a href="https://voidstarproductions.bandcamp.com/" target="_blank">Voidstar Productions</a>, '+
      '<a href="https://abstinence-hell.bandcamp.com/" target="_blank">Abstinence</a>, '+
      '<a href="https://voidstarproductions.bandcamp.com/album/first-blast" target="_blank">Nau-Zee-auN</a>, '+
      '<a href="https://voidstarproductions.bandcamp.com/album/not-today-2007-2015" target="_blank">Freeze Etch</a>, '+
      '<a href="https://voidstarproductions.bandcamp.com/album/tribe" target="_blank">Tactil Vision</a>, more coming soon'+
      '<a href="'+tour_stop_data[i].flier+'" target="_lank"><img src="'+tour_stop_data[i].flier+'" height="200"></a>'+
      '</div></div>';

    infoWindow[i] = new google.maps.InfoWindow(), marker, i;

    markers[i] = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      icon:'images/icontiny.png',
      position: coordinates[i],
      map: map,
      title: title,
    });

    markers[i].setMap(map);

    // Allow each marker to have an info window    
    google.maps.event.addListener(markers[i], 'click', (function(marker, i, contentString) {
        return function() {
            infoWindow[i].setContent(contentString);
            infoWindow[i].open(map, marker);
        }
    })(markers[i], i, contentString[i]));

  }//end of for loop

  //create travel path and animated arrow
  var line = new google.maps.Polyline({
    path: coordinates,
    icons: [{
      icon: {path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW, scale: 3, strokeColor: '#fff'},
      offset: '100%'
    }],
    map: map,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 5,
  });

  line.setMap(map);

  animate(line);
}//end of myMap Function

/**
 * animate Makes the arrow travel from show to show in chronological order on a loop.
 * @param  line Google API polyline object
 * @author David Dodson <david.dodson.001@gmail.com>
 */
function animate(line) {
    var x = 0;
    window.setInterval(function() {
      x = (x + 1) % 200;

      var icons = line.get('icons');
      icons[0].offset = (x / 2) + '%';
      line.set('icons', icons);
  }, 30);
}
