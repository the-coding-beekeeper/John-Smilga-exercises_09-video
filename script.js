let shiftStatus = "pause";
const sampleVideo = document.querySelector('#sample-video');
const sliderEl = document.querySelector('.slider');
function shift() {
    if(shiftStatus === "play") {
        sliderEl.style.left = "0%";
        shiftStatus = "pause";
        sampleVideo.pause();
    } else {
        sliderEl.style.left = "50%";
        shiftStatus = "play";
        sampleVideo.play();
    }
}