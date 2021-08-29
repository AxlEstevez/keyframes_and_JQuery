$(document).ready(function (){
  $("div").click(function (){
    var Color = $(this).attr("data-color");
    $("body").css("background", Color);
    $("#texto").css("color", "#000");
    return false;
  });
});