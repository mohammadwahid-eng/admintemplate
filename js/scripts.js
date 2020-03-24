(function() {

    if($('[data-feather]').length) {
        feather.replace();
    }


    $('#checkAll').on('change', function() {
        $(this).closest('table').find('tbody input[type=checkbox]').prop('checked', $(this).prop("checked")).closest('tr').toggleClass('bg-warning');
    });

    $('table tbody input[type=checkbox]').change(function(){
        var checkLen = $(this).closest('tbody').find('input[type=checkbox]:checked').length,
            totalLen = $(this).closest('tbody').find('input[type=checkbox]').length;
       
        $(this).closest('tr').toggleClass('bg-warning');

        if(checkLen == totalLen) {
            $('#checkAll').prop('checked', true);
        } else {
            $('#checkAll').prop('checked', false);
        }
    });


    $('.navbar-toggler').click(function () {
        $('.sidebar, .wrapper').toggleClass('show');
    });

    $('.wrapper').click(function () {
        $('.sidebar, .wrapper').removeClass('show');
    });

    $('.sidebar li').on('hide.bs.collapse', function () {
        $('.sidebar').find('li').removeClass('active');
    });
    $('.sidebar li').on('show.bs.collapse', function (e) {
        $('.collapse.show').not(e.target).collapse('hide');
        $(e.target).closest('li').addClass('active');
    });


    $('[data-toggle="tooltip"]').tooltip();


    $('.delBtn').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');

        swal({
            text: "Do you really want to delete the data?",
            buttons: [true, "Ok"],
            closeOnClickOutside: false,
            dangerMode: true,
        })
        .then(function(result) {
            if(result) {
                //do
            }
        });
    });




    Dropzone.options.mediaDropzone = {
        
    };

}(jQuery))