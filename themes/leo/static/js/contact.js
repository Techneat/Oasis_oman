$(document).ready(function() {
    $("#contactform").validate({
        rules: {
            "entry.1784000184": {
                required: true,
                minlength: 4,
                maxlength: 50,
            },
            "entry.1999103742": {
                required: true,
                email: true
            },
            "entry.5625347": {
                number:true,
                minlength:10,
                maxlength:10,
                required:true
            },
            "entry.1734229837": {
                required:true,
                maxlength:250,
            }
        
        },
        messages: {
            "entry.1784000184":{
                required:"Please enter Name",
                minlength:"Name requires a minimum of 4 Characters",
                maxlength:"Name cannot exceed 50 Characters"
            },
            "entry.1999103742": {
                required:"Please enter email",
                email:"Please enter a valid email address",
                maxlength:"Message cannot exceed 250 Characters"
            },
            "entry.5625347": {
                number:"Please provide a valid Phone No",
                minlength:"Please provide a valid Phone No",
                maxlength:"Please provide a valid Phone No",
                required:"Please provide Phone No"
            },
            "entry.1734229837":{
                required:"Please enter Message",
                maxlength:"Message cannot exceed 250 Characters"
            }
        },
        errorPlacement: function(error, element) {
            // Custom placement of error messages
            error.insertAfter(element); // Display error message after the input element
        },
        submitHandler: function(form) {
            $('#contactform-success-msg').text(''); // Clear any existing success message
            $.ajax({
                url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScVRYP74dev2OGVjCx7LYPJ-p_O7lNJXRfTK-2FQR01R0dJZw/formResponse',
                data: $(form).serialize(),
                type: 'POST',
                dataType: "json",
                statusCode: {
                    0: function(data) {
                        // Success
                        $('#contactform-success-msg').text('We have received your request. We will contact you shortly. Thank You!!');
                        $(form)[0].reset();
                    },
                    200: function(data) {
                        // Success
                        $('#contactform-success-msg').text('We have received your request. We will contact you shortly. Thank You!!');
                        $(form)[0].reset();
                    },
                    403: function(data) {
                        // Error
                        // Don't display the success message if a 403 error occurs
                        alert('Please check the data submitted');
                    }
                }
            });
        }
        
    });
});
