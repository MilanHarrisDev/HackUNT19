$( document ).ready(function() {
  $("#add-marker-button").click(function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(positionRecieved);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
  });
});

function positionRecieved(position){
  console.log("latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
}