var mapStyle = [
  {
    featureType: 'all',
    elementType: 'labels',
    stylers: [
      {
        lightness: 63,
      },
      {
        hue: '#ff0000',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'all',
    stylers: [
      {
        hue: '#000bff',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'labels',
    stylers: [
      {
        color: '#4a4a4a',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'labels.text',
    stylers: [
      {
        weight: '0.01',
      },
      {
        color: '#727272',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels',
    stylers: [
      {
        color: '#ff0000',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#ff0000',
      },
    ],
  },
  {
    featureType: 'administrative.province',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'administrative.province',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#545454',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#737373',
      },
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#7c7c7c',
      },
      {
        weight: '0.01',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#404040',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        lightness: 16,
      },
      {
        hue: '#ff001a',
      },
      {
        saturation: -61,
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#828282',
      },
      {
        weight: '0.01',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'poi.business',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.government',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#4c4c4c',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'poi.government',
    elementType: 'labels.text.fill',
    stylers: [
      {
        hue: '#00ffad',
      },
      {
        lightness: '16',
      },
      {
        saturation: '8',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'all',
    stylers: [
      {
        hue: '#00ff91',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#163e3a',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'on',
      },
      {
        saturation: '77',
      },
      {
        lightness: '-7',
      },
      {
        hue: '#ff00f1',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#999999',
      },
      {
        visibility: 'on',
      },
      {
        weight: '0.01',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        hue: '#ff0011',
      },
      {
        lightness: 53,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#626262',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text',
    stylers: [
      {
        color: '#676767',
      },
      {
        weight: '0.01',
      },
    ],
  },
  {
    featureType: 'transit.station.bus',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        hue: '#0055ff',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        lightness: '-24',
      },
    ],
  },
];

function initMap() {
  var styledMapType = new google.maps.StyledMapType(mapStyle, { name: 'Map' });
  var position = { lat: 1.310247, lng: 103.817610 };
  var map = new google.maps.Map(
    document.getElementById('map'),
    {
      center: position,
      zoom: 17,
      mapTypeControlOptions: {
        mapTypeIds: ['styled_map']
      }
    }
  );
  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

  new google.maps.Marker({
    position: position,
    map: map,
    title: 'The Plant House, Singapore Botanic Gardens'
  });
}
