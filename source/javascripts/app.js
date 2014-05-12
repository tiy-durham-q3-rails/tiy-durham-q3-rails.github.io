$(document).foundation();

$(document).ready(function () {
  var $li = $("h2").
  each(function () {
    var id = this.id;
    $(this).attr("data-magellan-destination", id);
  }).
  map(function () {
    var id = this.id;
    return "<li data-magellan-arrival='" + id + "'><a href='#" + id + "'>" +
    this.innerText + "</a></li>";
  }).get();

  $("#doc-nav").empty();
  $("#doc-nav").append($li);
});
