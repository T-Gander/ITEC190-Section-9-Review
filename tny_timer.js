"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Thomas Gander
   Date:   26/03/2023

*/
var j4Date = nextJuly4(thisDay);
j4Date.setHours(21);

var days;
var hrs;
var mins;
var secs;

var thisDay = new Date("May 19, 2021 09:31:27");

function showClock(){
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();

   document.getElementById("currentTime").textContent =
   localDate + " " + localTime;
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2021");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}