const video = document.getElementById('video');

function startup() {
  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: true,
    facingMode: { 
      exact: 'user'
    }
  }).then(stream => {
    video.srcObject = stream;
  }).catch(console.error)
}

window.addEventListener('load', startup, false);