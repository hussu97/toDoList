var toDoText;
$('ul').on("click", "li", function() {
  $(this).toggleClass("completedItem");
})
$('ul').on("click", "span", function(event) {
  $(this).parent().slideUp(600, function() {
    $(this).remove();
  });
  event.stopPropagation();
})
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    toDoText = $(this).val();
    $("ul").append("<li><span class='fa fa-trash'> </span>" + toDoText + "</li>");
    $(this).val("");
  }
})
$(".fa-pencil-square-o").on("click", function() {
  $("input[type='text']").fadeToggle(1000);
})
