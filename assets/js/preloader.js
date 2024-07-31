$(window).on('load', function () {
    $('.loader').fadeOut();
    $('.loader-mask').delay(350).fadeOut('slow');
    if (!sessionStorage.getItem('shown-modal')){
        $('#disclaimerModal').modal('show');
        sessionStorage.setItem('shown-modal', 'true');
      }
});
