jQuery(function($) {
    $('#formsubmit').on('click', function(e) {
        e.preventDefault();
        // data = $('#justice_insert_form').serialize();

        form = document.getElementById('insert_form');
        data = new FormData(form);
        console.log(data);
        //alert(data);
        if ($('#title').val() == "") {
            alert('Title must be filled out !');
            return false;
        }

        $(this).html("Uploading...").attr('disabled', 'disabled');

        jQuery.ajax({

            type: 'POST',

            url: apfajax.ajaxurl,

            // data: {
            //     action: 'kingstreets_add_new_justice',
            //     title: 'hi',
            //     post_content: 'rakesh'
            // },
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            dataType: "json",
            success: function(data, textStatus, XMLHttpRequest) {
                alert('Form submitted successfully');
                // console.log(data);
                location.reload(true);

                //resetvalues();
            },

            error: function(MLHttpRequest, textStatus, errorThrown) {
                alert(errorThrown + ' Failed to submit data ! Please check whether you entered correct image or video format or not !');
                //location.reload(true);
            }

        });

        function resetvalues() {
            alert('hi');
        }
    })

});