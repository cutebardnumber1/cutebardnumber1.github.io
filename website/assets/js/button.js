const audio = new Audio("/website/assets/audio/hover.mp3");
const mus = new Audio("/website/assets/audio/musicGame.mp3");
var button = document.getElementById("1button")
var button2 = document.getElementById("2button")
var button3 = document.getElementById("3button")
var button4 = document.getElementById("4button")
var button5 = document.getElementById("5button")
var button6 = document.getElementById("6button")
var button7 = document.getElementById("7button")
var button8 = document.getElementById("8button")
var button9 = document.getElementById("9button")
var button10 =document.getElementById("10button")

mus.loop = true;
mus.play();

button.addEventListener("mouseover", function() {
audio.play();
}
);

button.addEventListener("click", function() {
window.location.href = "/website/home/";
}
);

button2.addEventListener("mouseover", function() {
audio.play();
}
);

button2.addEventListener("click", function() {
window.location.href = "/website/wacky/88x31/external-link/?goTo=https://www.ubuntu.com/&orPage=/website/wacky/88x31/";
}
);

button3.addEventListener("mouseover", function() {
audio.play();
}
);

button3.addEventListener("click", function() {
window.location.href = "/website/wacky/88x31/external-link/?goTo=https://hacks.guide&orPage=/website/wacky/88x31/";
}
);

button4.addEventListener("click", function() {
window.location.href = "/website/wacky/88x31/external-link/?goTo=https://gemdation.com&orPage=/website/wacky/88x31/";
}
);

button4.addEventListener("mouseover", function() {
audio.play();
}
);

button5.addEventListener("click", function() {
window.location.href = "/website/wacky/88x31/external-link/?goTo=https://aol.com&orPage=/website/wacky/88x31/";
}
);

button5.addEventListener("mouseover", function() {
audio.play();
}
);

button6.addEventListener("click", function() {
window.location.href = "/website/wacky/88x31/external-link/?goTo=https://neocities.org&orPage=/website/wacky/88x31/";
}
);

button6.addEventListener("mouseover", function() {
audio.play();
}
);

button7.addEventListener("click", function() {
window.location.href = "/website/wacky/88x31/external-link/?goTo=https://www.firefox.com&orPage=/website/wacky/88x31/";
}
);

button7.addEventListener("mouseover", function() {
audio.play();
}
);

button8.addEventListener("click", function() {
window.location.href = "/website/wacky/88x31/external-link/?goTo=https://windows93.net/&orPage=/website/wacky/88x31/";
}
);

button8.addEventListener("mouseover", function() {
audio.play();
}
);

button9.addEventListener("click", function() {
window.location.href = "/website/wacky/88x31/external-link/?goTo=https://html5.org/&orPage=/website/wacky/88x31/";
}
);

button9.addEventListener("mouseover", function() {
audio.play();
}
);

button10.addEventListener("click", function() {
window.location.href = "/website/wacky/88x31/external-link/?goTo=https://theoldnet.com/&orPage=/website/wacky/88x31/";
}
);

button10.addEventListener("mouseover", function() {
audio.play();
}
);