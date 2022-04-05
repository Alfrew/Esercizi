const data = new Date();

const monthNames = [
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
    "December"
];
const weekNames = [
    "Sunday",
    "Monday",
    "Thursday",
    "Wednesday",
    "Tuesday",
    "Friday",
    "Saturday"
];

document.getElementById('data').innerHTML = data;
document.getElementById('dataE').innerHTML = data.toLocaleDateString('en-GB')
document.getElementById('anno').innerHTML = data.getFullYear();
document.getElementById('mese').innerHTML = monthNames[data.getMonth()];
document.getElementById('giorno').innerHTML = data.getDate();
document.getElementById('giornoS').innerHTML = weekNames[data.getDay()];

let clock = document.getElementById('live');
let hour = document.getElementById('ore');
let minutes = document.getElementById('minuti');
let seconds = document.getElementById('secondi');
let mseconds = document.getElementById('msecondi');
function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    var ms = d.getMilliseconds()
    clock.textContent =
        ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
    hour.textContent = ("0" + h).substr(-2)
    minutes.textContent = ("0" + m).substr(-2)
    seconds.textContent = ("0" + s).substr(-2)
}
setInterval(time, 1000);

function start() {

}
function pause() {

}
function stop() {

}