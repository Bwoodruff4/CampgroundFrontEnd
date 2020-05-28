var map;
const baseURL= "https://developer.nps.gov/api/v1"
const key = ``
const state = "CO"
// let campsiteLocations = main();

createMarkers()

async function createMarkers(){
    const data = await getData();
    campsites = getCampsiteMarkers(getCampsites(data));
    setMarkers(map,campsites);
}

async function getData() {
    const response = await fetch(`${baseURL}/campgrounds?stateCode=${state}&api_key=${key}`)
    return response.json()
}

function setMarkers(map,campsites) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'http://maps.google.com/mapfiles/kml/shapes/campfire.png',
    // This marker is 20 pixels wide by 32 pixels high.
    // size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    // anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
//   var shape = {
//     coords: [1, 1, 1, 20, 18, 20, 18, 1],
//     type: 'poly'
//   };
  for (var i = 0; i < campsites.length; i++) {
    console.log(campsites)
    var campsite = campsites[i];
    var marker = new google.maps.Marker({
      position: {lat: campsite[1], lng: campsite[2]},
      map: map,
      icon: image,
    //   shape: shape,
      title: campsite[0],
    //   zIndex: campsite[3]
    });
  }
}


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39.7392, lng: -104.9903},
        zoom: 8
    });
}

function getCampsites(campInfo) {
    const campsites = campInfo.data;
    return campsites
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
//   ['Cronulla Beach', -34.028249, 151.157507, 3],
//   ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
//   ['Maroubra Beach', -33.950198, 151.259302, 1]
function getCampsiteMarkers(campsites){
    let campsiteMarkers=[];
    for(var i=0; i < campsites.length; i++) {
        campsiteMarkers.push([campsites[i].name, parseFloat(campsites[i].latitude), parseFloat(campsites[i].longitude), i+1])
    }
    return campsiteMarkers
}

