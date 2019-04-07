const createMarkerUrl = "https://us-central1-accessibility-ar.cloudfunctions.net/createMarker?";
var currentPos = null;

var captureMessage = false;

$( document ).ready(function() {
  $("#add-marker-button").click(function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(positionRecieved);
        $('#caption').text("Describe this marker.");
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
  });
});

function positionRecieved(position){
  currentPos = position;
  captureMessage = true;
}