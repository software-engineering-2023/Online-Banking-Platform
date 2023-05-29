function launchVoiceRecognizer() {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = true;
    recognition.interimResults = true; // Enable interim results to get real-time transcription

    recognition.onresult = function(event) {
        const speechText = event.results[event.results.length - 1][0].transcript; // Use the last result in case of multiple results
        console.log(speechText);
        if(! speechText) {
            return;
        }
        fetch('/speech', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({speech: speechText})
        })
        .then(response => response.json()) // Use the parsed JSON data returned by `response.json()`
        .then(data => {
            console.log(data);
            launchTextReader(data.fulfillmentText);
        })
        .catch(error => console.error(error));
    };

    recognition.onend = function() {
        recognition.start();
    };
    recognition.start();
}

function launchTextReader(textResponse) {
    // Create a new SpeechSynthesisUtterance object
    const voice = "US English Male";
    const rate = 1.0;
    responsiveVoice.speak(textResponse, voice, {rate});
}

launchVoiceRecognizer();
