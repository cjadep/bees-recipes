$(document).on("click","button",function() {
  $("#book").turn("page", $(this).data("page"));
  console.log($(this).data("page"));
});
