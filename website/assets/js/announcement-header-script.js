/* what the heck is this?
this is script allows me to put custom messages onto that little tiny header on the top of most pages.
why?
why not.

p.s do not RiiSlop this.
thank you :)

*/

var showAnnouncement = true;
var announcementDialog = "WE HAVE A FOUR OH FOUR PAGE, and the background is purple if you want to know (you probably don't care nvm) and the announcement header is also purple.";
var announceHead = document.getElementById("announcement");

if (showAnnouncement) {
    console.log("announcement is set to true.");
    console.log("now showing: " + " \"" + announcementDialog + "\"");

    announceHead.style.display = "block";
    announceHead.innerHTML = "<p class=\"announcement\">" + announcementDialog + "</p>";
} else {
    console.warn("showAnnouncement is not true. (guess there's no announcements then... :P)");
}

var aUseCustomColor = true;
var customColor = "#530d81";

if (aUseCustomColor) {
    console.log("using custom color for announcement header.");
    if (customColor === "#ff0000") {
        console.log("using default red color." + customColor);
    } else if (customColor === "#00ff00") {
        console.log("using green color. " + customColor);
    } else if (customColor === "#0000ff") {
        console.log("using blue color. " + customColor);
    } else if (customColor === "#ff7300") {
        console.log("using orange color. " + customColor);
    }
    console.log("using: " + customColor);

    announceHead.style.backgroundColor = customColor;

} else {
    console.warn("color is not being changed. using default color, #d43838");
}

// seasonal announcements

var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();

if (month === 4 && day === 1) {
    console.error("Don't trust the Internet today.");
    var customColor = "#ff00dd";
    var showAnnouncement = true;
    var announcementDialog = "It's offical. I am quitting the internet. I am deleting all of my accounts and leaving the internet forever. I do not want to be on the internet anymore. I am done with the internet. I am leaving the internet. Goodbye everyone. It was nice knowing you all. I will miss you all. But I have to leave the internet. I am sorry. Goodbye.";
    announceHead.innerHTML = "<p class=\"announcement\">" + announcementDialog + "</p>";
    announceHead.style.backgroundColor = customColor;
}

else if (month === 12 && day === 25) {
    console.error("Merry Christmas?? IT'S CHRISTMAS??");
    var customColor = "#0066ff";
    var showAnnouncement = true;
    var announcementDialog = "NOBODY CARES ABOUT THE ANNOUNCEMENTS, IT'S CHRISTMAS?? MERRY CHRISTMAS?? HELLO?!?!?!";
    announceHead.innerHTML = "<p class=\"announcement\">" + announcementDialog + "</p>";
    announceHead.style.backgroundColor = customColor;
}

else if (month === 10 && day === 31) {
    console.error("boo");
    var customColor = "#ff7b00";
    var showAnnouncement = true;
    var announcementDialog = "It's Halloween. Okay. That's something. Maybe.";
    announceHead.innerHTML = "<p class=\"announcement\">" + announcementDialog + "</p>";
    announceHead.style.backgroundColor = customColor;
}
