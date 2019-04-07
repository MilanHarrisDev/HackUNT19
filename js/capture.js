const video = document.getElementById('video');

function startup() {
  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      facingMode: { 
        exact: 'environment'
      }
    },
    
  }).then(stream => {
    video.srcObject = stream;
  }).catch(console.error)
}

window.addEventListener('load', startup, false);