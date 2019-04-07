window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

const recognition = new SpeechRecognition();
var text = "";


$( document ).ready(function() {

    recognition.iterimResults = true;

    recognition.addEventListener("result", e => {
        const transcript = Array.from(e.results)
        .map(result => result.transcript).join("")

        // console.log(e.results[0][0].transcript);
           
        $('#caption').text(e.results[0][0].transcript);
    });
});

recognition.start();

recognition.addEventListener("end", recognition.start);
