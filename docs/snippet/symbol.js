export default function addSymbolLayer(map) {
  map.addLayer({
    'id': 'symbol-layer',
    'type': 'symbol',
    'source': {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': [{
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-77.03238901390978, 38.913188059745586]
          },
          'properties': {
            'title': 'Mapbox DC',
            'icon': 'monument'
          }
        }]
      }
    },
    'layout': {
    'icon-image': '{icon}-15',
    'text-field': '{title}',
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top'
    }
  })
}
