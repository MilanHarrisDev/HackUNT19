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
            $.ajax({
                url: translateUrl,
                type: "POST",
                data: {
                    q: e.results[0][0].transcript,
                    target: languages[currentLanguage]
                },
                beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer ya29.GlvkBs_jXD3DDKRHpfbUkKeUkaU2fnW9mzZP8sWQgVlyj2zIC95aDECcIn82STjg8Qlj0rvWyQGMQT1NV3w8aWLBOV9pbyvIKhNWnfBa18AiU-cwylp-9zsb6XOE.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4OTY0NzYwNTgyMzAtcWZlNnEwZGo4cm5qcGQxaWdqbmZmYWIzY243MGVsYTYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4OTY0NzYwNTgyMzAtcWZlNnEwZGo4cm5qcGQxaWdqbmZmYWIzY243MGVsYTYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTE2NzQwNzEzODEyNzAyNDkwNzkiLCJlbWFpbCI6ImxhYnVzYWlkQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoicTM1YzJRMXhJUmgzRVo4R2hQRUM2USIsImlhdCI6MTU1NDYwNzI2MiwiZXhwIjoxNTU0NjEwODYyfQ.FwrTM3REF0KuG2voUMiUEqkt1EEmjHyn3GzuUpRgZ-abi5DvRUkCJLAPlDfvwndNbHzFXAHQYclxpbgUTn_yH8drCGjVRfnp_s30RMvEdwTPKy5mqRQnYKtsOs9xpgpDxQasG7NxWebCQ0ONqYBFMZwN3ggQTtHoWbd-yz5F8lrmVa_YYtGQoI-MPvjWce7wetytDR1a6uyhI93E_GfRuhkwVBVobum4kuhy_s7ZUtFGCdDfFQZMrDl2KKiOI3suRLGXeSpI9L_Cr8dObwLlI4ffGhNbZe9dQiFfgwMnTy8Tm-bkw_dJ-vZ6DfMJwNZqbeejjs_tRAyoSsjBDJjY3A');},
                success: function(result){
                    console.log(result.data.translations.translatedText);
                    $('#caption').text(result.data.translations.translatedText);
                }
            })
        }
        else{
            $('#caption').text(e.results[0][0].transcript);
        }
    });
});

recognition.start();

recognition.addEventListener("end", recognition.start);
