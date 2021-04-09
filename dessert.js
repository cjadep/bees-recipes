    $(document).on("click","button",function() {
      $("#book").turn("page", $(this).data("page"));
      console.log($(this).data("page"));
    });

    element = document.querySelector("#carrot-cake").html();
$("#book").turn("addPage", element, 10);

element = document.querySelector("#carrot-cake-2").html();
$("#book").turn("addPage", element, 11);

element = document.querySelector("#pear-pudding").html();
$("#book").turn("addPage", element, 12);

element = document.querySelector("#banana-bread").html();
$("#book").turn("addPage", element, 13);

element = document.querySelector("#royal-sponge-cake").html();
$("#book").turn("addPage", element, 14);

element = document.querySelector("#peppermint-crisp").html();
$("#book").turn("addPage", element, 15);

element = document.querySelector("#fruit-cake").html();
$("#book").turn("addPage", element, 16);

element = document.querySelector("#cover-inner-back").html();
$("#book").turn("addPage", element, 17);

element = document.querySelector("#cover-back").html();
$("#book").turn("addPage", element, 18);
