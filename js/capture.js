const video = document.getElementById('video');
const zooms = [0, 10, 25, 50, 75, 100];
var currentZoom = 0;

$( document ).ready(function() {
  $("#zoom-button").click(function() {
    currentZoom++;
    if(currentZoom >= zooms.length){
      currentZoom = 0;
    }

    $(this).text(colorModes[currentMode]);
    $("#video").css("width", (100 + zooms[currentZoom]).toString() + "%");
    $("#video").css("height", (100 + zooms[currentZoom]).toString() + "%");
    $("#video").css("top", (zooms[currentZoom] / -2.0).toString() + "%");
    $("#video").css("left", (zooms[currentZoom] / -2.0).toString() + "%");
    $(this).text((100 + zooms[currentZoom]).toString() + "%");

    console.log("top: " + (zooms[currentZoom] / 2.0).toString() + "%");
    console.log("bottom: " + (zooms[currentZoom] / 2.0).toString() + "%");
  });
});

function startup() {
  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      facingMode: 'environment'
    },
    
  }).then(stream => {
    video.srcObject = stream;
  }).catch(console.error)
}

window.addEventListener('load', startup, false);