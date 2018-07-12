jQuery(document).keypress(function(e) {
    if (e.keyCode == 27) {
        // window.close();
        // jQuery(".portfolio-modal").modal('toggle');
        jQuery(".portfolio-modal").modal('hide');
    }
});