window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

const recognition = new SpeechRecognition();
var text = "";

const translateUrl = 'https://us-central1-accessibility-ar.cloudfunctions.net/translate?';
let languages = ['English', 'Spanish', 'German', 'French', 'Arabic', 'Chinese', 'Portuguese', 'Russian', 'Japanese'];
let currentLang = 0;

$( document ).ready(function() {

    recognition.iterimResults = true;

    $("#language-button").click(function() {
        currentLang++;
        if(currentLang >= languages.length)
            currentLang = 0;

        $(this).text(languages[currentLang]);
    });

    recognition.addEventListener("result", e => {
        if(captureMessage){
            $('#caption').text("Location detected!");
            console.log("latitude: " + currentPos.coords.latitude + ", Longitude: " + currentPos.coords.longitude);
            $.ajax({
                url: createMarkerUrl + 'lat=' + currentPos.coords.latitude + "&long=" + currentPos.coords.longitude + "&msg=" + e.results[0][0].transcript,
                type: "POST",
            }).done(function(result){
                $('#caption').text("Marker Created!");
            }).fail(function(error){
                console.log(error);
            }).always(function(){
                captureMessage = false;
            });
        }
        else{
            const transcript = Array.from(e.results)
            .map(result => result.transcript).join("")
    
            var targetLang = '';
    
            switch(currentLang){
                case 0:
                targetLang = 'en';
                break;
                case 1:
                targetLang = 'es';
                break;
                case 2:
                targetLang = 'de';
                break;
                case 3:
                targetLang = 'fr';
                break;
                case 4:
                targetLang = 'ar';
                break;
                case 5:
                targetLang = 'zh-CN';
                break;
                case 6:
                targetLang = 'pt';
                break;
                case 7:
                targetLang = 'ru';
                break;
                case 8:
                targetLang = 'ja';
                break;
            }
    
            var requestUrl = translateUrl + "target=" + targetLang + "&content=" + e.results[0][0].transcript;
            console.log('requesting translation from: ' + requestUrl);
    
            $.ajax({
                url: requestUrl,
                type: "GET",
                success: function(result){
                    $('#caption').text(result.text);
                },
                error: function(error){
                    console.log(error);
                }
            });
        }
    });
});

recognition.start();

recognition.addEventListener("end", recognition.start);
