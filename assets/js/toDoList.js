$('li').on("click",function(){
  $(this).toggleClass("completedItem");
})
$('span').on("click",function(event){
  $(this).parent().slideUp(600,function(){
    $(this).remove();
  });
  event.stopPropagation();
})
