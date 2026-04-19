// REDIRECTION SCRIPT

var urlParam = new URLSearchParams(document.location.search)
var redirectingTo = urlParam.get("goTo")
var prevPage = urlParam.get("orPage")
var headerHTML = document.getElementById("redirection")
var headerButtonHTML = document.getElementById("choose")

console.log("going to external site: " + redirectingTo)

headerHTML.innerHTML = "<h1>wait what you're leaving?</h1><p>you're heading to " + "<p class=\"redirectionL\">" + redirectingTo + "</p>" + "<p class=\"redirectionL\">do you really want to go there?!?!?!?</p>"
headerButtonHTML.innerHTML = "<a href=\"" + redirectingTo + "\"><button class=\"button-green\">yeah sure why not</button></a><a href=\"" + prevPage + "\"><button class=\"button-red\">nah, go back.</button></a>"