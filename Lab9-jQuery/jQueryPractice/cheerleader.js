$(function() {
    $(document).keypress(cheer);
  });
  
  function cheer(e) {
    $("<li>")
      .text(String.fromCharCode(e.which).toUpperCase() + "!")
      .appendTo($("#cheers"));
    setTimeout(removeCheer, 2000);
  }
  
  function removeCheer() {
    $("#cheers li").first().remove();
  }