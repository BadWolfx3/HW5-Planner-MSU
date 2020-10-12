
$("#currentDay").text(moment().format('MMMM Do YYYY'));

$(document).ready(function(){

    $(".saveBtn").on("click", function (){
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
})
})




