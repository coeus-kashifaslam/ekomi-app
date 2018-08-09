$(document).ready(function(e){
    $('.selectpicker').selectpicker();

    $('.input-group__search .input-group-text').on('click', function(e) {
       $current =  $(this);
       $current.closest('.input-group__search').find('.form-control').toggle();
    });
});
