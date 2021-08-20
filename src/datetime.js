function updateClock() {
    var now = new Date();
    var dayname = now.getDay(),
        month = now.getMonth(),
        date = now.getDate(),
        year = now.getFullYear(),
        hour = now.getHours(),
        minutes = now.getMinutes(),
        seconds = now.getSeconds();

    if (hour == 0) hour = 12;
    if (hour > 12) hour -= 12;

    Number.prototype.addZeros = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    };

    var months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        ids = ["hours", "minutes", "seconds", "day", "month", "date", "year"],
        values = [hour, minutes.addZeros(2), seconds.addZeros(2), week[dayname], months[month], date, year];

    for (var i = 0; i < ids.length; i++) document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1000);
}

var now = new Date();
var month = now.getMonth(),
    date = now.getDate(),
    year = now.getFullYear(),
    ly = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? true : false,
    totaldays = ly ? 366 : 365,
    days = [31, ly ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    d = 0;

for (i = 0; i < month; i++) d += days[i];
d += date;

document.getElementById("daynumber").innerHTML = d;

totaldays - d == 1
    ? (document.getElementById("remainingdays").innerHTML = totaldays - d + " day left in the year")
    : d == totaldays
    ? (document.getElementById("remainingdays").innerHTML = "Today is the last day of the year")
    : (document.getElementById("remainingdays").innerHTML = totaldays - d + " days left in the year");
