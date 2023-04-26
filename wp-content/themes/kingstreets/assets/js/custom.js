jQuery(function($) {
    $('[data-toggle="tooltip"]').tooltip()
})

jQuery(function($) {
    $('.kingstv_form select').on('change', function() {
        if ($(this).val() == 'other') {
            $(this).after('<input type="text" class="form-control mt-2" id="new_taxonomy" name="new_taxonomy"/>');
        } else {
            $('.kingstv_form #new_taxonomy').remove();
        }
    });
})