/* it's really easy to get to the custom messages using the console.
i won't tell you how */

var button = document.getElementById("buttonClicker");
var scoreCounter = document.getElementById("scoreCount");
let score = 0;

button.addEventListener("click", function() {
    score += 1
    scoreCounter.innerHTML = "<h1>" + "score: " + score + "</h1>"; 

    if (score === 100000) {
    alert("no way in earth you would keep clicking 100,000 times. it's not like you're gonna get something by doing this anyway.")
} else if (score === 10000) {
    alert("oh my god bruh...")
} else if (score === 1500) {
    alert("yay, you got to 1,500. now stop. seriously.")
} else if (score === 1000) {
    alert("you did NOT have to do that. but, good job i guess?")
} else if (score === 500) {
    alert("500? really? just explore the website already...")
} else if (score === 150) {
    alert("okay. cool, i guess.")
} else if (score === 10) {
    alert("just keep clicking, nothing will actually happen.")
} else if (score === 5) {
    alert("okay, you clicked it 5 times.")
}
    }
);