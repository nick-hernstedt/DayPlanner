// get time elements

var nineEL = document.getElementById("9AM");
var nineEL = document.getElementById("10AM");
var nineEL = document.getElementById("11AM");
var nineEL = document.getElementById("12PM");
var nineEL = document.getElementById("1PM");
var nineEL = document.getElementById("2PM");
var nineEL = document.getElementById("3PM");
var nineEL = document.getElementById("4PM");
var nineEL = document.getElementById("5PM");

// save slot variables

var nineSaveEl = docuement.getElementById("9save");
var nineSaveEl = docuement.getElementById("10save");
var nineSaveEl = docuement.getElementById("11save");
var nineSaveEl = docuement.getElementById("12save");
var nineSaveEl = docuement.getElementById("1save");
var nineSaveEl = docuement.getElementById("2save");
var nineSaveEl = docuement.getElementById("3save");
var nineSaveEl = docuement.getElementById("4save");
var nineSaveEl = docuement.getElementById("5save");

//setting current date to show
$(`#currentDay`).text(moment().format("MMMM Do YYYY, h:mm a"));

//setting schedule values
nineEL.value = localStorage.getItem("nine");
tenEl.value = localStorage.getItem("ten");
elevenEl.value = localStorage.getItem("eleven");
twelveEl.value = localStorage.getItem("twelve");
oneEl.value = localStorage.getItem("one");
twoEl.value = localStorage.getItem("two");
threeEl.value = localStorage.getItem("three");
fourEl.value = localStorage.getItem("four");
fiveEl.value = localStorage.getItem("five");

//when button is clicked save to local storage

nineSaveEl.addEventListener("click", function() {
  localStorage.setItem("nine", nineEl.value);
});

tenSaveEl.addEventListener("click", function() {
  localStorage.setItem("ten", tenEl.value);
});

elevenSaveEl.addEventListener("click", function() {
  localStorage.setItem("eleven", elevenEl.value);
});

twelveSaveEl.addEventListener("click", function() {
  localStorage.setItem("twelve", twelveEl.value);
});

oneSaveEl.addEventListener("click", function() {
  localStorage.setItem("one", oneEl.value);
});

twoSaveEl.addEventListener("click", function() {
  localStorage.setItem("two", twoEl.value);
});

threeSaveEl.addEventListener("click", function() {
  localStorage.setItem("three", threeEl.value);
});

fourSaveEl.addEventListener("click", function() {
  localStorage.setItem("four", fourEl.value);
});

fiveSaveEl.addEventListener("click", function() {
  localStorage.setItem("five", fiveEl.value);
});
