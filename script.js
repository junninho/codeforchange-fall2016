/*global $*/
/* global toastr */
 $("#button").click(function() {
  toastr.success($("#input_content").val() + " you can change the world!");
});
$("#earth").hover(function() {
 // hovering in
 $("#earth").attr("src", "moving_earth.gif");
}, function() {
 // hovering out
$("#earth").attr("src", "paused_earth.gif");
});

$(".navbar").hover(function() { 
 $(".list-inline").show("text");
}, function() {
     $(".list-inline").hide("text");
});