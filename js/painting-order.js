$(function() {

    $("#paintingOrderForm input,#paintingOrderForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#nameOrderForm").val();
            var email = $("input#emailOrderForm").val();
            var phone = $("input#phone").val();
            var city = $("input#city").val();
            var paintingDimensions = $("input#paintingDimensions").val();
            var paintingTheme = $("textarea#paintingTheme").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $this = $("#sendOrderButton");
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
            $.ajax({
                url: "././mail/painting-order.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    city: city,
                    phone: phone,
                    paintingDimensions: paintingDimensions,
                    paintingTheme: paintingTheme
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#successOrderForm').html("<div class='alert alert-success'>");
                    $('#successOrderForm > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#successOrderForm > .alert-success')
                        .append("<strong>Your order has been sent. </strong>");
                    $('#successOrderForm > .alert-success')
                        .append('</div>');
                    //clear all fields
                    $('#paintingOrderForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#successOrderForm').html("<div class='alert alert-danger'>");
                    $('#successOrderForm > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#successOrderForm > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                    $('#successOrderForm > .alert-danger').append('</div>');
                    //clear all fields
                    $('#paintingOrderForm').trigger("reset");
                },
                complete: function() {
                    setTimeout(function() {
                        $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                }
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$('#nameOrderForm').focus(function() {
    $('#successOrderForm').html('');
});