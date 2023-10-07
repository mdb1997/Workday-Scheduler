// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Create a global variable for dayjs.
var localeSettings = {};
dayjs.locale(localeSettings);

// Create a variable for the current day using dayjs
var currentDay = dayjs().format('dddd, MMMM DD')
$('#currentDay').text(currentDay);


$(function () {

    // Create a variable to get the current hour of the day using dayjs.
    var currentHour = dayjs().format('H');
    
    // Create a function that will save the user's input into the local storage when the save button is clicked.
    // Use 'this' and DOM traversal for this function.
    function input() {
        $('.saveBtn').on('click', function() {
            var time = $(this).parent().attr('id');
            var text = $(this).siblings('description').val();
            localStorage.setItem(time, text);
        });
    }
    // Write code to get the input from the local storage and into the schedule so that it doesn't 
    // disappear when the webpage in refreshed.
        $('.time-block').each(function() {
            var time = $(this).attr('id');
            var text = localStorage.getItem(time);
            $(this).children('description').val(text);
        });

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  