$(document).ready(function () {
  $(".hide").click(function () {
    $(this).parent("div").find("h1").hide();
  });
});

$("button").click(function () {
  $(this).parent("div").find("h1").show();
});