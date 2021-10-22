$(function () {
  var $el = $(".banner");
  $(window).on("scroll", function () {
    var scroll = $(document).scrollTop() - 286;
    $el.css({
      "background-position": "50% " + 0.4 * scroll + "px",
    });
  });
});
