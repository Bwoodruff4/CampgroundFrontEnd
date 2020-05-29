var map;
const baseURL= "https://developer.nps.gov/api/v1"
const key = ``
const $selectState = document.querySelector("#state-select")
let state = "CO"
let latLong = {lat: 38.9972, lng: -105.5478}
let gmarkers = [];

createMarkers(state)

$selectState.addEventListener('change', (event) => {
    state = event.target.value
    latLong = recenterOnState(state)
    initMap()
    removeMarkers()
    createMarkers(state)
})

async function createMarkers(state) {
    const data = await getStateData(state);
    campsites = getCampsiteMarkers(getCampsites(data));
    setMarkers(map,campsites);
}

async function getStateData(state) {
    const response = await fetch(`${baseURL}/campgrounds?stateCode=${state}&api_key=${key}`)
    return response.json()
}

function setMarkers(map,campsites) {
  var image = {
    url: 'http://maps.google.com/mapfiles/kml/shapes/campfire.png',
    origin: new google.maps.Point(0, 0),
  };
  
  for (var i = 0; i < campsites.length; i++) {
    var campsite = campsites[i];
    var marker = new google.maps.Marker({
      position: {lat: campsite[1], lng: campsite[2]},
      map: map,
      icon: image,
      title: campsite[0],
    });
    gmarkers.push(marker)
  }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: latLong,
        zoom: 7
    });
}

function getCampsites(campInfo) {
    const campsites = campInfo.data;
    return campsites
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
//   ['Maroubra Beach', -33.950198, 151.259302, 1]
function getCampsiteMarkers(campsites) {
    let campsiteMarkers=[];
    for(var i=0; i < campsites.length; i++) {
        campsiteMarkers.push([campsites[i].name, parseFloat(campsites[i].latitude), parseFloat(campsites[i].longitude), i+1])
    }
    return campsiteMarkers
}

function removeMarkers() {
    for(i=0; i < gmarkers.length; i++){
        gmarkers[i].setMap(null);
    }
}

function recenterOnState(state) {
    if(state === "AL"){
        latLong = {lat: 32.7794, lng: -86.8287}
    }
    else if(state === "AK"){
        latLong = {lat: 64.0685, lng: -152.2782}
    }
    else if(state === "AZ"){
        latLong = {lat: 34.2744, lng: -111.6602}
    }
    else if(state === "AR"){
        latLong = {lat: 34.8938, lng: -92.4426}
    }
    else if(state === "CA"){
        latLong = {lat: 37.1841, lng: -119.4696}
    }
    else if(state === "CO"){
        latLong = {lat: 38.9972, lng: -105.5478}
    }
    else if(state === "CT"){
        latLong = {lat: 41.6219, lng: -72.7273}
    }
    else if(state === "DE"){
        latLong = {lat: 38.9896, lng: -75.5050}
    }
    else if(state === "DC"){
        latLong = {lat: 38.9101, lng: -77.0147}
    }
    else if(state === "FL"){
        latLong = {lat: 28.6305, lng: -82.4497}
    }
    else if(state === "GA"){
        latLong = {lat: 32.6415, lng: -83.4426}
    }
    else if(state === "HI"){
        latLong = {lat: 20.2927, lng: -156.3737}
    }
    else if(state === "ID"){
        latLong = {lat: 44.3509, lng: -114.6130}
    }
    else if(state === "IL"){
        latLong = {lat: 40.0417, lng: -89.1965}
    }
    else if(state === "IN"){
        latLong = {lat: 39.8942, lng: -86.2816}
    }
    else if(state === "IA"){
        latLong = {lat: 42.0751, lng: -93.4960}
    }
    else if(state === "KS"){
        latLong = {lat: 38.4937, lng: -98.3804}
    }
    else if(state === "KY"){
        latLong = {lat: 37.5347, lng: -85.3021}
    }
    else if(state === "LA"){
        latLong = {lat: 31.0689, lng: -91.9968}
    }
    else if(state === "ME"){
        latLong = {lat: 45.3695, lng: -69.2428}
    }
    else if(state === "MD"){
        latLong = {lat: 39.0550, lng: -76.7909}
    }
    else if(state === "MA"){
        latLong = {lat: 42.2596, lng: -71.8083}
    }
    else if(state === "MI"){
        latLong = {lat: 44.3467, lng: -85.4102}
    }
    else if(state === "MN"){
        latLong = {lat: 46.2807, lng: -94.3053}
    }
    else if(state === "MS"){
        latLong = {lat: 32.7364, lng: -94.3053}
    }
    else if(state === "MO"){
        latLong = {lat: 38.3566, lng: -92.4580}
    }
    else if(state === "MT"){
        latLong = {lat: 47.0527, lng: -109.6333}
    }
    else if(state === "NE"){
        latLong = {lat: 41.5478, lng: -99.7951}
    }
    else if(state === "NV"){
        latLong = {lat: 39.3289, lng: -99.7951}
    }
    else if(state === "NH"){
        latLong = {lat: 43.6805, lng: -71.5811}
    }
    else if(state === "NJ"){
        latLong = {lat: 40.1907, lng: -74.6728}
    }
    else if(state === "NM"){
        latLong = {lat: 34.4071, lng: -106.1126}
    }
    else if(state === "NY"){
        latLong = {lat: 42.9538, lng: -75.5268}
    }
    else if(state === "NC"){
        latLong = {lat: 35.5557, lng: -79.3877}
    }
    else if(state === "ND"){
        latLong = {lat: 47.4501, lng: -100.4659}
    }
    else if(state === "OH"){
        latLong = {lat: 40.2862, lng: -82.7937}
    }
    else if(state === "OK"){
        latLong = {lat: 35.5889, lng: -97.4943}
    }
    else if(state === "OR"){
        latLong = {lat: 43.9336, lng: -120.5583}
    }
    else if(state === "PA"){
        latLong = {lat: 40.8781, lng: -77.7996}
    }
    else if(state === "RI"){
        latLong = {lat: 41.6762, lng: -71.5562}
    }
    else if(state === "SC"){
        latLong = {lat: 33.9169, lng: -80.8964}
    }
    else if(state === "SD"){
        latLong = {lat: 44.4443, lng: -100.2263}
    }
    else if(state === "TN"){
        latLong = {lat: 35.8580, lng: -86.3505}
    }
    else if(state === "TX"){
        latLong = {lat: 31.4757, lng: -99.3312}
    }
    else if(state === "UT"){
        latLong = {lat: 39.3055, lng: -111.6703}
    }
    else if(state === "VT"){
        latLong = {lat: 44.0687, lng: -72.6658}
    }
    else if(state === "VA"){
        latLong = {lat: 37.5215, lng: -78.8537}
    }
    else if(state === "WA"){
        latLong = {lat: 47.3826, lng: -120.4472}
    }
    else if(state === "WV"){
        latLong = {lat: 38.6409, lng: -80.6227}
    }
    else if(state === "WI"){
        latLong = {lat: 44.6243, lng: -89.9941}
    }
    else if(state === "WY"){
        latLong = {lat: 42.9957, lng: -107.5512}
    }
    return latLong
}
