//input class elements

var nineEL = document.getElementById(`9AM`);
var tenEL = document.getElementById(`10AM`);
var elevenEL = document.getElementById(`11AM`);
var twelveEL = document.getElementById(`12PM`);
var oneEL = document.getElementById(`1PM`);
var twoEL = document.getElementById(`2PM`);
var threeEL = document.getElementById(`3PM`);
var fourEL = document.getElementById(`4PM`);
var fiveEL = document.getElementById(`5PM`);

//save button elements

var nineSaveEl = document.getElementById(`9save`);
var tenSaveEl = document.getElementById(`10save`);
var elevenSaveEl = document.getElementById(`11save`);
var twelveSaveEl = document.getElementById(`12save`);
var oneSaveEl = document.getElementById(`1save`);
var twoSaveEl = document.getElementById(`2save`);
var threeSaveEl = document.getElementById(`3save`);
var fourSaveEl = document.getElementById(`4save`);
var fiveSaveEl = document.getElementById(`5save`);

//setting current date to show
$(`#currentDay`).text(moment().format("MMMM Do YYYY, h:mm a"));

//setting the schedule values

nineEL.value = localStorage.getItem(`nine`);
tenEL.value = localStorage.getItem(`ten`);
elevenEL.value = localStorage.getItem(`eleven`);
twelveEL.value = localStorage.getItem(`twelve`);
oneEL.value = localStorage.getItem(`one`);
twoEL.value = localStorage.getItem(`two`);
threeEL.value = localStorage.getItem(`three`);
fourEL.value = localStorage.getItem(`four`);
fiveEL.value = localStorage.getItem(`five`);

//making buttons save to local storage

nineSaveEl.addEventListener(`click`, function() {
  localStorage.setItem(`nine`, nineEL.value);
});

tenSaveEl.addEventListener(`click`, function() {
  localStorage.setItem(`ten`, tenEL.value);
});

elevenSaveEl.addEventListener(`click`, function() {
  localStorage.setItem(`eleven`, elevenEL.value);
});

twelveSaveEl.addEventListener(`click`, function() {
  localStorage.setItem(`twelve`, twelveEL.value);
});

oneSaveEl.addEventListener(`click`, function() {
  localStorage.setItem(`one`, oneEL.value);
});

twoSaveEl.addEventListener(`click`, function() {
  localStorage.setItem(`two`, twoEL.value);
});

threeSaveEl.addEventListener(`click`, function() {
  localStorage.setItem(`three`, threeEL.value);
});

fourSaveEl.addEventListener(`click`, function() {
  localStorage.setItem(`four`, fourEL.value);
});

fiveSaveEl.addEventListener(`click`, function() {
  localStorage.setItem(`five`, fiveEL.value);
});

//making colours change depending on time

if (moment().hour() < 9) {
  nineEL.classList.add(`future`);
  tenEL.classList.add(`future`);
  elevenEL.classList.add(`future`);
  twelveEL.classList.add(`future`);
  oneEL.classList.add(`future`);
  twoEL.classList.add(`future`);
  threeEL.classList.add(`future`);
  fourEL.classList.add(`future`);
  fiveEL.classList.add(`future`);
} else if (moment().hour() == 9) {
  nineEL.classList.add(`present`);
  tenEL.classList.add(`future`);
  elevenEL.classList.add(`future`);
  twelveEL.classList.add(`future`);
  oneEL.classList.add(`future`);
  twoEL.classList.add(`future`);
  threeEL.classList.add(`future`);
  fourEL.classList.add(`future`);
  fiveEL.classList.add(`future`);
} else if (moment().hour() == 10) {
  nineEL.classList.add(`past`);
  nineEL.classList.remove(`future`);
  tenEL.classList.add(`present`);
  tenEL.classList.remove(`future`);
  elevenEL.classList.add(`future`);
  twelveEL.classList.add(`future`);
  oneEL.classList.add(`future`);
  twoEL.classList.add(`future`);
  threeEL.classList.add(`future`);
  fourEL.classList.add(`future`);
  fiveEL.classList.add(`future`);
} else if (moment().hour() == 11) {
  nineEL.classList.add(`past`);
  nineEL.classList.remove(`future`);
  tenEL.classList.add(`past`);
  tenEL.classList.remove(`future`);
  elevenEL.classList.add(`present`);
  elevenEL.classList.remove(`future`);
  twelveEL.classList.add(`future`);
  oneEL.classList.add(`future`);
  twoEL.classList.add(`future`);
  threeEL.classList.add(`future`);
  fourEL.classList.add(`future`);
  fiveEL.classList.add(`future`);
} else if (moment().hour() == 12) {
  nineEL.classList.add(`past`);
  nineEL.classList.remove(`future`);
  tenEL.classList.add(`past`);
  tenEL.classList.remove(`future`);
  elevenEL.classList.add(`past`);
  elevenEL.classList.remove(`future`);
  twelveEL.classList.add(`present`);
  twelveEL.classList.remove(`future`);
  oneEL.classList.add(`future`);
  twoEL.classList.add(`future`);
  threeEL.classList.add(`future`);
  fourEL.classList.add(`future`);
  fiveEL.classList.add(`future`);
} else if (moment().hour() == 13) {
  nineEL.classList.add(`past`);
  nineEL.classList.remove(`future`);
  tenEL.classList.add(`past`);
  tenEL.classList.remove(`future`);
  elevenEL.classList.add(`past`);
  elevenEL.classList.remove(`future`);
  twelveEL.classList.add(`past`);
  twelveEL.classList.remove(`future`);
  oneEL.classList.add(`present`);
  oneEL.classList.remove(`future`);
  twoEL.classList.add(`future`);
  threeEL.classList.add(`future`);
  fourEL.classList.add(`future`);
  fiveEL.classList.add(`future`);
} else if (moment().hour() == 14) {
  nineEL.classList.add(`past`);
  nineEL.classList.remove(`future`);
  tenEL.classList.add(`past`);
  tenEL.classList.remove(`future`);
  elevenEL.classList.add(`past`);
  elevenEL.classList.remove(`future`);
  twelveEL.classList.add(`past`);
  twelveEL.classList.remove(`future`);
  oneEL.classList.add(`past`);
  oneEL.classList.remove(`future`);
  twoEL.classList.add(`present`);
  twoEL.classList.remove(`future`);
  threeEL.classList.add(`future`);
  fourEL.classList.add(`future`);
  fiveEL.classList.add(`future`);
} else if (moment().hour() == 15) {
  nineEL.classList.add(`past`);
  nineEL.classList.remove(`future`);
  tenEL.classList.add(`past`);
  tenEL.classList.remove(`future`);
  elevenEL.classList.add(`past`);
  elevenEL.classList.remove(`future`);
  twelveEL.classList.add(`past`);
  twelveEL.classList.remove(`future`);
  oneEL.classList.add(`past`);
  oneEL.classList.remove(`future`);
  twoEL.classList.add(`past`);
  twoEL.classList.remove(`future`);
  threeEL.classList.add(`present`);
  threeEL.classList.remove(`future`);
  fourEL.classList.add(`future`);
  fiveEL.classList.add(`future`);
} else if (moment().hour() == 16) {
  nineEL.classList.add(`past`);
  nineEL.classList.remove(`future`);
  tenEL.classList.add(`past`);
  tenEL.classList.remove(`future`);
  elevenEL.classList.add(`past`);
  elevenEL.classList.remove(`future`);
  twelveEL.classList.add(`past`);
  twelveEL.classList.remove(`future`);
  oneEL.classList.add(`past`);
  oneEL.classList.remove(`future`);
  twoEL.classList.add(`past`);
  twoEL.classList.remove(`future`);
  threeEL.classList.add(`past`);
  threeEL.classList.remove(`future`);
  fourEL.classList.add(`present`);
  fourEL.classList.remove(`future`);
  fiveEL.classList.add(`future`);
} else if (moment().hour() == 17) {
  nineEL.classList.add(`past`);
  nineEL.classList.remove(`future`);
  tenEL.classList.add(`past`);
  tenEL.classList.remove(`future`);
  elevenEL.classList.add(`past`);
  elevenEL.classList.remove(`future`);
  twelveEL.classList.add(`past`);
  twelveEL.classList.remove(`future`);
  oneEL.classList.add(`past`);
  oneEL.classList.remove(`future`);
  twoEL.classList.add(`past`);
  twoEL.classList.remove(`future`);
  threeEL.classList.add(`past`);
  threeEL.classList.remove(`future`);
  fourEL.classList.add(`past`);
  fourEL.classList.remove(`future`);
  fiveEL.classList.add(`present`);
  fiveEL.classList.remove(`future`);
} else {
  nineEL.classList.add(`past`);
  nineEL.classList.remove(`future`);
  tenEL.classList.add(`past`);
  tenEL.classList.remove(`future`);
  elevenEL.classList.add(`past`);
  elevenEL.classList.remove(`future`);
  twelveEL.classList.add(`past`);
  twelveEL.classList.remove(`future`);
  oneEL.classList.add(`past`);
  oneEL.classList.remove(`future`);
  twoEL.classList.add(`past`);
  twoEL.classList.remove(`future`);
  threeEL.classList.add(`past`);
  threeEL.classList.remove(`future`);
  fourEL.classList.add(`past`);
  fourEL.classList.remove(`future`);
  fiveEL.classList.add(`past`);
  fiveEL.classList.remove(`future`);
}
