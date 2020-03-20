const myLocation = document.getElementById("jsLocation");

const API_URL = "http://ip-api.com/json/";

function loadMyLocation() {
  fetch(API_URL)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      myLocation.innerHTML = `Your location is ${json.regionName} ${json.city}!!`;
    })
    .catch(err => {
      console.log("err : ", err);
      myLocation.innerHTML = "Can't load your location😥";
    });
}

function init() {
  loadMyLocation();
}

if (myLocation) {
  init();
}
