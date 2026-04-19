/* ABOUT THIS SCRIPT (info.js):
this script gets the date & time and puts it in the cutebard-website-about-header div class i guess.
it also replaces the inner html of the about header too */

var updateNotes = "literally the website came out, do you even want or need update notes? you're an insane person.";
var lastUpdate = "April 9, 2026";
var headInfo = "about website";
var parA = "last update: " + lastUpdate;
var parB = "update notes: " + updateNotes;
var parC = "<strong>&copy; 2026 cutebard. created by cutebard. yeah that's it :-)</strong>";
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