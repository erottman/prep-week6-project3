/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {



// Question #1

$(".changeColor").click(function () {
  $("li:nth-child(3)").addClass("alt-color")

});



// Question #2

$("li:nth-child(4)").click(function () {

  $("li:nth-child(4)").append($("li:nth-child(4").clone(false));
});


// Question #3

$("#removeLi").click(function () {

  $("li:nth-child(2)").remove();
});


// Question #4

$("li:last").click(function () {

  $("li:last").addClass("altfont-size");

  $("li:nth-child(1n+2)").remove();

});


// Question #5


  // Question #6



// Question #7



  // Question #8




});
