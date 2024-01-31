
$(document).ready(function () {
    // Evento "INGREDIENTES"
    $("#ingredientes").on("click", function () {
        $(this).css("color", "red");
        $(this).css("border-bottom", "1px solid red");
    });
});

$(document).ready(function () {
    // Evento "PREPARACION"
    $("#preparacion").on("click", function () {
        $(this).css("color", "red");
        $(this).css("border-bottom", "1px solid red");
    });
});

$(".vanish-btn").click(function () {
    $(".vanish").toggle();
  });
  

//Tooltip
var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
var tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


