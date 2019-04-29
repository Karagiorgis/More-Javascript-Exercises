
$(document).ready(function() {
  $(".box").on("click", function() {
    $(this).find(".color").slideToggle();
    $(".color").show();  
  })  
});
