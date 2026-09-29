// تشغيل الصوت
function playAudio() {
    let audio = document.getElementById("backgroundAudio");
    if (audio) {
        audio.play();
    }
}

// إيقاف الصوت
function pauseAudio() {
    let audio = document.getElementById("backgroundAudio");
    if (audio) {
        audio.pause();
    }
}
