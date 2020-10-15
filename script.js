
let m = moment();

let currentTime = m.format("h:mma");

let timeBlockContainer = document.getElementsByClassName("time-block");


var nine = $("#9");
var ten = $("#10");
var eleven = $("#11");
var twelve = $("#12");
var thirteen = $("#13");
var fourteen = $("#14");
var fifteen = $("#15");
var sixteen = $("#16");
var seventeen = $("#17");

function currentDate () {
    $("#currentDay").text(moment().format("dddd MMMM Do YYYY"));
    $("#currentTime").html("${currentTime}");
}
currentDate();

$(".time-block").each(function(){
    var id= $(this).attr("id");
    var schedule = localStorage.getItem(id);
    
    if (schedule !== null) {
        $(this).children(".schedule").val(schedule);
    }
});

function changeColor() {

    $(".time-block").each(function () {
        hour = m.hours();
        var thisHour = parseInt($(this).attr("id"));
        if (thisHour > hour) {
            $(this).addClass('future');

        } else if (thisHour === hour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
     
    });
}
changeColor();


var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

