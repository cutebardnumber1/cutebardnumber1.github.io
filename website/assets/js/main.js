/* 

congrats you have successfully found the main script behind this website.

shoutout to MiiMakerTV 24 and Mii get your

*/
$(function() {
var json_d;
function start() {
    console.log("start run")
    var inHome = window.location.href.includes("home");
    var nProjects = window.location.href.includes("projects")
    var inAbout = window.location.href.includes("about")
    var inWacky = window.location.href.includes("wacky")
    var inexWacky = window.location.href.includes("88x31")
    var showAnnouncement = json_d.an_show;
    var announcementDialog = json_d.an_dio
    var announceHead = document.getElementById("announcement");

    if (showAnnouncement) {
        console.log("announcement is set to true.");
        console.log("now showing: " + " \"" + announcementDialog + "\"");
        
        announceHead.style.display = "block";
        announceHead.innerHTML = "<p class=\"announcement\">" + announcementDialog + "</p>";
    } else {
        console.warn("showAnnouncement is not true. (guess there's no announcements then... :P)");
    }

    var aUseCustomColor = json_d.have_cc
    var customColor = json_d.an_color;

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
    announceHead.style.color = "#000000"
    announceHead.style.background = customColor;

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


    if (inHome) {
        console.log("in home.")
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
    }

    console.log(navigator.userAgent);

    if (navigator.userAgent.includes("Firefox")) {
        console.log("detected as firefox")
        document.getElementById("buttons-header").style = "max-width: 594px;";
    } else {
        console.log("no your using something else")
    }

    if (inAbout) {
        var updateNotes = "added some stuff to the wacky page, and some announcements have changed. also something in the projects section works now ig";
        var lastUpdate = "April 25, 2026";
        var headInfo = "about website";
        var parA = "last update: " + json_d.parA
        var parB = "update notes: " + json_d.parB
        var parC = "<strong>&copy; lovely weather we're having here.</strong>";
        var htmlHead = document.getElementById("headInfo")
        var userDate = new Date();
        var month = userDate.getMonth() + 1;
        var date = userDate.getDate();
        var year = userDate.getFullYear();
        var minutes = userDate.getMinutes();
        var hours = userDate.getHours();

        console.log(date);
        console.log(month);
        console.log(year);
        console.log(minutes);
        console.log(hours);

        function getTheDate(mth, dy, yr) {
            if (mth === 1) {
                console.log("Date is " + dy + " " + mth + " " + yr);
                console.log("setting full date as that in web info box");
                month = "January";
                console.log("set mth to " + month + " SUCCESS");
            } else if (mth === 2) {
                console.log("Date is " + dy + " " + mth + " " + yr);
                console.log("setting full date as that in web info box");
                month = "February";
                console.log("set mth to " + month + " SUCCESS");
            } else if (mth === 3) {
                console.log("Date is " + dy + " " + mth + " " + yr);
                console.log("setting full date as that in web info box");
                month = "March";
                console.log("set mth to " + month + " SUCCESS");
            } else if (mth === 4) {
                console.log("Date is " + dy + " " + mth + " " + yr);
                console.log("setting full date as that in web info box");
                month = "April";
                console.log("set mth to " + month + " SUCCESS");
            } else if (mth === 5) {
                console.log("Date is " + dy + " " + mth + " " + yr);
                console.log("setting full date as that in web info box");
                month = "May";
                console.log("set mth to " + month + " SUCCESS");
            } else if (mth === 6) {
                console.log("Date is " + dy + " " + mth + " " + yr);
                console.log("setting full date as that in web info box");
                month = "June";
                console.log("set mth to " + month + " SUCCESS");
            } else if (mth === 7) {
                console.log("Date is " + dy + " " + mth + " " + yr);
                console.log("setting full date as that in web info box");
                month = "July";
                console.log("set mth to " + month + " SUCCESS");
            } else if (mth === 8) {
                console.log("Date is " + dy + " " + mth + " " + yr);
                console.log("setting full date as that in web info box");
                month = "August";
                console.log("set mth to " + month + " SUCCESS");
            } else if (mth === 9) {
                console.log("Date is " + dy + " " + mth + " " + yr);
                console.log("setting full date as that in web info box");
                month = "September";
                console.log("set mth to " + month + " SUCCESS");
            } else if (mth === 10) {
                console.log("Date is " + dy + " " + mth + " " + yr);
                console.log("setting full date as that in web info box");
                month = "October";
                console.log("set mth to " + month + " SUCCESS");
            } else if (mth === 11) {
                console.log("Date is " + dy + " " + mth + " " + yr);
                console.log("setting full date as that in web info box");
                month = "November";
                console.log("set mth to " + month + " SUCCESS");
            } else if (mth === 12) {
                console.log("Date is " + dy + " " + mth + " " + yr);
                console.log("setting full date as that in web info box");
                month = "December";
                console.log("set mth to " + month + " SUCCESS");
        }
    }

        getTheDate(month, date, year);

        var lessThan10min = false;
        var millitaryTimeOff = true;
        var PM = "";
        var AM = "";
        if (minutes < 10) {
            lessThan10min = true;
            console.log("less than 10 minutes = " + lessThan10min);
        } else {
            lessThan10min = false;
            console.log("less than 10 minutes = " + lessThan10min);
        }

        if (hours <= 12) {
            PM = ""
            AM = "AM"
        } else {
            PM = "PM"
            AM = ""
        }

        if (millitaryTimeOff) {
            if (hours < 12) {
                console.log("your clock was about to be broken there... oh well! i think i fixed it.");
                console.log(hours);
            } else {
                hours = hours - 12;
                console.log(hours);
            }
        }

        if (lessThan10min) {
            htmlHead.innerHTML = "<h1>" + headInfo + "</h1>" + "<p class=\"webinfo\">today is: " + month + " " + date + ", " + year + "</p>" + "<p>" + "<p class=\"webinfo\">your time is: " + hours + ":" + "0" + minutes + AM + PM + " (does not update)" +"</p>" + "<p>" + parA + "</p>" + "<p>" + parB + "</p>" + "<p>" + parC + "</p>";
        } else {
            htmlHead.innerHTML = "<h1>" + headInfo + "</h1>" + "<p class=\"webinfo\">today is: " + month + " " + date + ", " + year + "</p>" + "<p>" + "<p class=\"webinfo\">your time is: " + hours + ":" + minutes + AM + PM + " (does not update)" +"</p>" + "<p>" + parA + "</p>" + "<p>" + parB + "</p>" + "<p>" + parC + "</p>";
        }
// getTheDate(month, date, year);

    }

    if (inWacky) {
        // do nothing, there's nothing to execute \_=/_/
    }

    var k_btn = document.getElementById("buttons-header")

    k_btn.addEventListener("mouseover", () => {
        k_snd_hov.play();
    })

}

    $.getJSON("/website/assets/json/dialog.json")
    .done(function (j_data) {
        console.log(j_data)
        json_d = j_data
        console.log(json_d.an_dio)
        console.log(json_d.parA)
        start()
        })
    .fail(function(j_data) {
        console.error("failed to get json")
        return ("unable to get data")
        })
})
var k_snd_hov = new Audio ("/website/assets/audio/hover_e.mp3")
var k_snd_click = new Audio("/website/assets/audio/click.mp3")
function gettopage(page) {
    k_snd_click.play();
    setTimeout(() => {
        console.log("YOU CLICKED A BUTTON!!!!!!!!!!!!!!!!")
        window.location.pathname = page
    }, 580)
}

function gettopageEx(page) {
    k_snd_click.play();
    setTimeout(() => {
        console.log("YOU CLICKED A BUTTON!!!!!!!!!!!!!!!!")
        window.location.href = page
    }, 580)
}

function hovSound() {
    k_snd_hov.play();
}

function clickSound() {
    k_snd_click.play();
}

// end