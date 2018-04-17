var $img = $("img");

$("#show-btn").click(function() {
   $img.show("normal");
});

$("#hide-btn").click(function() {
   $img.hide("normal");
});

$("#toggle-btn").click(function() {
   $img.toggle("normal");
});

$("#fadein-btn").click(function() {
   $img.fadeIn("normal");
});

$("#fadeout-btn").click(function() {
   $img.fadeOut("normal");
});

$("#fadetoggle-btn").click(function() {
   $img.fadeToggle("normal");
});

$("#slidedown-btn").click(function() {
   $img.slideDown("normal");
});

$("#slideup-btn").click(function() {
   $img.slideUp("normal");
});

$("#slidetoggle-btn").click(function() {
   $img.slideToggle("normal");
});

$img.click(function() {
$img.hide("fast").show("fast").fadeOut("fast").fadeIn("fast").slideUp("fast").slideDown("fast").css("border", "thick solid red");
});
