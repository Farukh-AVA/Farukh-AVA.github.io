"use strict";

/*Set the date displayed in the calendar*/
var thisDay= new Date();


/*Write the calendar to the element with ID "calendar"*/

document.getElementById("calendar").innerHTML = createCalendar(thisDay);

/*Function to generate the calendar table */

function createCalendar(calDate){

   var calendarHTML = "<table id ='calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate);
   calendarHTML += "</table>";
   return calendarHTML;
}

/*Function to write calendar caption*/

function calCaption(calDate){
   var monthName=["January", "February", "March", "Aprel",
    "May", "June", "July", "August", "September", "October",
     "November", "Desember"];

     var thisMonth = calDate.getMonth();
     var thisYear =calDate.getFullYear();

     return "<caption>"+ monthName[thisMonth]+ " "+thisYear+ "</caption>"

}


/*Create table header*/
function calWeekdayRow(){

   var dayName = ["SUN", "MON", "TUE", "WED", 
   "THU", "FRI", "SAT"];
   var rowHTML="<tr>";

   for(var i=0; i<dayName.length; i++){
      rowHTML+= "<th class='calendar_weekdays'>"+dayName[i]+ "</th>";
   }

   rowHTML+="</tr>";

   return rowHTML;
}

/*Function to calculate number of days in any given month*/

function daysInMonth(calDays){

   var dayCount=[31,28,31,30,31,30,31,31,30,31,30,31];

   var thisYear = calDays.getFullYear();
   var thisMonth = calDays.getMonth();

   if(thisYear%4===0){
      if(thisYear%100 !=0 || thisYear%400===0 ){
      daycount[1]= 29;
      }
   }

   return dayCount[thisMonth];

}

/*write table rows for each day of the month*/
function calDays(calDate){

   var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1 );
   var weekDay = day.getDay();

   var htmlCode = "<tr>";

   for(var i=0; i<weekDay; i++){
      htmlCode += "<td></td>"
   }

   var totalDays=daysInMonth(calDate);
   var highlightDay = calDate.getDate();

   for(var i=1; i<totalDays; i++){
      day.setDate(i);
      weekDay= day.getDay();

      if(weekDay===0){
         htmlCode+="<tr>";
      }

      if(highlightDay===i){
         htmlCode +="<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i]+"</td>";
      }else{

      htmlCode +="<td class='calendar_dates'>" + i + dayEvent[i] +"</td>";
      }

      if(weekDay==6){
         htmlCode += "</tr>";
      }
   }

   return htmlCode; 
}