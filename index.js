let buttons = document.getElementsByTagName("button");
let audioFiles = ["crash", "kick-bass", "snare", "tom-1", "tom-2", "tom-3", "tom-4"];

// add a Click-event to each button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        let audioSrc = 'sounds/' + audioFiles[i] + '.mp3';
        soundPlay(audioSrc);
    });
}

// add a Press-event to each button
window.addEventListener('keypress', (e) => {
    switch (e.key) {
        case "a":
            soundPlay('sounds/kick-bass.mp3'); break;
        case "d":
            soundPlay('sounds/tom-1.mp3'); break;
        case "j":
            soundPlay('sounds/tom-2.mp3'); break;
        case "k":
            soundPlay('sounds/tom-3.mp3'); break;
        case "l":
            soundPlay('sounds/tom-4.mp3'); break;
        case "s":
            soundPlay('sounds/snare.mp3'); break;
        case "w":
            soundPlay('sounds/crash.mp3'); break;
        default: return;
    }
});

//play sound
function soundPlay(audioSrc) {
    new Audio(audioSrc).play();
}
