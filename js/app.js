var context = $("canvas")[0].getContext("2d");
var $canvas = $("canvas");
//Getting selected color
var color = $(".selected").css("background-color");
//When click on color:

//switch color
  //deselect current

$(".controls").on("click","li", function(){

    //DESELECT SIBLING ELEMENTS
    $(this).siblings().removeClass("selected");
    //SELECT 
    $(this).addClass("selected");

    color = $(this).css("background-color");

});


$("#revealColorSelect").click(function(){

    changeColor();
    $("#colorSelect").toggle();


});

function changeColor(){
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  //CHange value of new color span
  $("#newColor").css("background-color", "rgb("+r+","+g+","+b+")");

}


$("input[type=range]").on("input", changeColor);


// when add color is pressed
  //Append the color to ul

$("#addNewColor").click(function(){

    $newColor = $("<li></li>");
    
    $newColor.css("background-color", $("#newColor").css("background-color") );



    $(".controls ul").append($newColor);
    $newColor.click();

});

//DRAW
var lastEvent;
var mousedown;
$canvas.mousedown(function(e){

  lastEvent = e;
  mousedown = true;

}).mousemove(function(e){

  if(mousedown){
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }

}).mouseup(function(){

  mousedown= false;

}).mouseleave(function(){

  $canvas.mouseup();

});



