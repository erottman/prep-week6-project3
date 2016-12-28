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

$(".cute").click(function () {

$(this).clone().appendTo($(".clones"));
});


  // Question #6

  $("body").dblclick(function () {

    $("#makeSquare").addClass("altsquare")
  });



// Question #7

$(".black swatch").click(function () {

  $("body").addClass("body.black");
})


$(".wood swatch").click(function () {

  $("body").addClass("body.wood");
})


$(".chaos swatch").click(function () {

  $("body").addClass("");
})



$(".restor swatch").click(function () {

  $("body").addClass("");
})



  // Question #8


$("#hover").mouseover(function () {

  $(this).addClass("red");

});

$("#hover").click(function () {
  $(this).toggleClass("green");
});


});
