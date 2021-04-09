$(document).on("click","button",function() {
  $("#book").turn("page", $(this).data("page"));
  console.log($(this).data("page"));
});

element = document.querySelector("#belgium-waffles").html();
$("#book").turn("addPage", element, 10);

element = document.querySelector("#scones").html();
$("#book").turn("addPage", element, 11);

element = document.querySelector("#soet-koekies").html();
$("#book").turn("addPage", element, 12);

element = document.querySelector("#cover-inner-back-trt").html();
$("#book").turn("addPage", element, 13);

element = document.querySelector("#cover-back-trt").html();
$("#book").turn("addPage", element, 14);
