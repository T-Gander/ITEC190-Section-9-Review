"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Thomas Gander
   Date:   26/03/2023

*/
var thisDay = new Date("May 19, 2021 09:31:27");
var j4Date = nextJuly4(thisDay).setHours(21);

showClock(thisDay);
setInterval("runClock()", 1000);

function showClock(thisDay){
   
   var dateStr = thisDay.toLocaleDateString();
   var timeStr = thisDay.toLocaleTimeString();

   document.getElementById("date").textContent = dateStr;
   document.getElementById("time").textContent = timeStr;

   /* Calculate the days until July 4th, at 9PM */
   var daysLeft = (j4Date - thisDay)/(1000*60*60*24);
   /* Calculate the hours left in the current day */
   var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
   /* Calculate the minutes and seconds left in the current hour */
   var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

   document.getElementById("dLeft").textContent = Math.floor(daysLeft);
   document.getElementById("hLeft").textContent = Math.floor(hrsLeft);
   document.getElementById("mLeft").textContent = Math.floor(minsLeft);
   document.getElementById("sLeft").textContent = Math.floor(secsLeft);
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2021");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}