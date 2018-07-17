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
 */
var tour_stop_data = [
    {
      date: new Date(2018, 08, 03, 00, 00, 00, 00),
      lat: 39.9831403,
      lng: -83.2710211,
      city: 'Columbus',
      state: 'OH',
      venue: {},
      fb: '',
      performers: ['Tactil Vision', 'Freeze Etch', 'Architect', 'Textbeak'],
      flier: 'images/0803.jpg',
    },
    {
      date: new Date(2018, 08, 04, 00, 00, 00, 00),
      lat: 41.4977042,
      lng: -81.8459456,
      city: 'Cleveland',
      state: 'OH',
      venue: {},
      fb: '',
      performers: ['Abstinence','Nau-Zee-auN','Tactil Vision','Red Pyramid','Textbeak'],
      flier: 'images/default.jpg',
    },
    {
      date: new Date(2018, 08, 05, 00, 00, 00, 00),
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
    },
    {
      date: new Date(2018, 08, 07, 00, 00, 00, 00),
      lat: 42.3528795,
      lng: -83.2392906,
      city: 'Detroit',
      state: 'MI',
      venue: {
        name: 'Detroit Industrial Underground promo spot',
        address: 'tba',
        phone: '',
      },
      fb: '',
      performers: ['Abstinence','Nau-Zee-auN'],
      flier: 'images/default.jpg',
    },
    {
      date: new Date(2018, 08, 11, 00, 00, 00, 00),
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
    },
    {
      date: new Date(2018, 08, 12, 00, 00, 00, 00),
      lat: 40.008639,
      lng: -83.0002007,
      city: 'Columbus',
      state: 'OH',
      venue: {
        name: 'Cafe Bourbon Street',
        address: '2216 Summit St, Columbus, OH 43201',
        phone: '(614) 725-5256',
        website: 'cafebourbonstreet.com',
      },
      fb: 'https://www.facebook.com/events/353554445173582/',
      performers: ['Abstinence','Nau-Zee-auN','Tactil Vision','Red Pyramid','Curse of Cassandra'],
      flier: 'images/0812.jpg',
    },
    {
      date: new Date(2018, 08, 14, 00, 00, 00, 00),
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
    }
];

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
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ff55FF'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#009900'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#00FF00'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#334444'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#0000FF'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#AAAAAA'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#00FF00'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#0000FF'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#FFFF00'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9966FF'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#6666ff'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ffffff'}]
      },
      {
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

  for (var i = 0; i < tour_stop_data.length; i++) {
    coordinates[i] = { lat: tour_stop_data[i].lat, lng: tour_stop_data[i].lng };
    var title = tour_stop_data[i].date+': '+tour_stop_data[i].city+', '+tour_stop_data[i].state;
    var lineup = '';
    var prefix = '';
    for (var j = 0; j < tour_stop_data[i].performers.length; j++) {
      lineup += prefix + '<b>' + tour_stop_data[i].performers[i] + '</b>';
      prefix = ', ';
    }

    //on click popup bubble
    contentString[i] = '<div id="content" style="background-color:#000;"><div id="siteNotice"></div>'+
      '<h1 id="firstHeading'+i+'" class="firstHeading">'+title+'</h1>'+
      '<h2 id="secondHeading'+i+'" class="secondHeading"><a href="'+tour_stop_data[i].venue.website+'">'+tour_stop_data[i].venue.name+'</a></h2>'+
      '<p>address: '+tour_stop_data[i].venue.address+'</p>'
      '<div id="bodyContent"><p>line up: '+lineup+'</p><img src="'+tour_stop_data[i].flier+"'></div></div>";

    var infowindow = new google.maps.InfoWindow({
      content: contentString[i],
    });

    markers[i] = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      icon:'images/icontiny.png',
      position: coordinates[i],
      map: map,
      title: title,
    });

    markers[i].setMap(map);

    markers[i].addListener('click', function() {
      infowindow.open(map, markers[i]);
    });
  }

  var line = new google.maps.Polyline({
    path: coordinates,
    icons: [{
      icon: {path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW, scale: 2, strokeColor: '#f00'},
      offset: '100%'
    }],
    map: map,
  });

  var path = new google.maps.Polyline({
    path: coordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 5,
  });

  path.setMap(map);

  animate(line);

/*  var contentString = '<div id="content" style="background-color:#000;">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  var marker = new google.maps.Marker({
    position: {lat: 41, lng: -80.0849867},
    map: map,
    title: 'Uluru (Ayers Rock)'
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
*/
}

function animate(line) {
    var count = 0;
    window.setInterval(function() {
      count = (count + 1) % 200;

      var icons = line.get('icons');
      icons[0].offset = (count / 2) + '%';
      line.set('icons', icons);
  }, 30);
}