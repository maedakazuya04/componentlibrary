$(function(){
  function keyupEvent(){
    const $input = $(".input");
    $input.keyup(function(){
      if( $(this).val() ) {
        $(this).addClass('is-active');
     } else {
        $(this).removeClass('is-active');
     }
    });
  }

  keyupEvent();
});