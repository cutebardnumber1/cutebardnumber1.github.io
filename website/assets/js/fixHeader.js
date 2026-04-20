// uh oh, is the stupid header thingy breaking the code in firefox? don't worry this will help (i hope)

console.log(navigator.userAgent);

if (navigator.userAgent.includes("Firefox")) {
    console.log("detected as firefox")
    document.getElementById("buttons-header").style = "max-width: 594px;";
} else {
    console.log("no your using something else")
}