window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

const recognition = new SpeechRecognition();
var text = "";
let languages = ['en', 'es'];
let currentLanguage = 0;

const Http;

const translateUrl='https://translation.googleapis.com/language/translate/v2';

$( document ).ready(function() {

    recognition.iterimResults = true;

    recognition.addEventListener("result", e => {
        const transcript = Array.from(e.results)
        .map(result => result.transcript).join("")

        // console.log(e.results[0][0].transcript);

        if(currentLanguage != 0){
            // Translate
            // Http = new XMLHttpRequest();
            // Http.open("GET", translateUrl);
            // Http.send();

            

            $.ajax({
                url: translateUrl,
                type: "POST",
                data: {
                    q: e.results[0][0].transcript,
                    target: languages[currentLanguage]
                },
                beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer ya29.GlvkBoqRvkM-uKRm1X1WlvdWFbVQiKKsa6d_6eSHmS8ehpJzMau9HLQV6j4-4aOAhuY2hOjQudZlZIFsYrYO1A67CRvl-Y4EVE-YMHKHA9_JrlICE-0G7s4fSQ-Q');},
                success: function(result){
                    console.log(result.data.translations.translatedText);
                    $('#caption').text(result.data.translations.translatedText);
                },
                error:function(error){
                    console.log('Error: ' + error);
                }
            });
        }
        else{
            $('#caption').text(e.results[0][0].transcript);
        }
    });
});

Http.onreadystatechange=(e)=>{
    console.log(Http.responseText);
}

recognition.start();

recognition.addEventListener("end", recognition.start);
