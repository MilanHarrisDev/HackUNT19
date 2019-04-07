window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

const recognition = new SpeechRecognition();
var text = "";
let languages = ['en', 'es'];
let currentLanguage = 1;


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
                beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZmNjc4MWJhNzExOTlhNjU4ZTc2MGFhNWFhOTNlNWZjM2RjNzUyYjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4OTY0NzYwNTgyMzAtcWZlNnEwZGo4cm5qcGQxaWdqbmZmYWIzY243MGVsYTYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4OTY0NzYwNTgyMzAtcWZlNnEwZGo4cm5qcGQxaWdqbmZmYWIzY243MGVsYTYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTE2NzQwNzEzODEyNzAyNDkwNzkiLCJlbWFpbCI6ImxhYnVzYWlkQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiZFU4ODVnSXlwbXdzVXd5T2FFcUFhQSIsImlhdCI6MTU1NDYwODU0MSwiZXhwIjoxNTU0NjEyMTQxfQ.Inm663gJ-f9-R96jS2KhJzSwqv5t3vpgSo6TsNxndubGeuFJFrdZ91SHaoG0CAdeqBpkdHWszkbcPcrD7wYgqpITkqgExPHbDajivm9e2Evap8l5sCoXHmN-Xbf2f_V0Sva05JfnkUIY_eTKIevIiWvAELoc46t2iUgG76LZhH5dzJz75EZxO5U2YVBdceNzfNOrvioyBF2VmCVOPo4YNkS9s2dKCwMYvEqhxMVZ97yw6CRLNriIBxz7L6o4yKzi-lLcM2jYd0fWlXreTjID9JAa2yAKN5BpeS0eTo-TU3Lt1Q136XTQWrZ9VAkTP9vdl_kj5jswN5v0TsfAfuHlkQ');},
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

recognition.start();

recognition.addEventListener("end", recognition.start);
