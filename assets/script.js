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
            var text = $(this).siblings('.description').val();
            localStorage.setItem(time, text);
        });
    }
    // Write code to get the input from the local storage and into the schedule so that it doesn't 
    // disappear when the webpage in refreshed.
        $('.time-block').each(function() {
            var time = $(this).attr('id');
            var text = localStorage.getItem(time);
            $(this).children('.description').val(text);
        });

    // Create a function to change the background color of each time block in order to depict past,
    // present, and future. Use the current time variable created earlier in this function.
    function color() {
        $('.time-block').each(function() {
            var originalTime = parseInt($(this).attr('id'));
            if (originalTime < currentHour) {
                $(this).addClass('past');
            } else if (originalTime == currentHour){
                $(this).addClass('present');
                $(this).removeClass('past');
            } else {
                $(this).addClass('future');
                $(this).removeClass('past');
                $(this).removeClass('present');
            }
        })
    }

    // Call the functions to them to appear on the webpage.
    input();
    color();

  });
  