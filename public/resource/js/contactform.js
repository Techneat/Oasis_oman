$("#contact-one-form").validate({
    rules: {
        "entry.1341634167": {
            required: true,
            minlength: 4,
            maxlength: 50,
        },
        "entry.": {
            required: true,
            email: true
        },
        "entry.1018418181": {
            number:true,
            minlength:10,
            maxlength:10,
            required:true
        },
        "entry.571016185":{
            required:true,
            maxlength:250
        },
        "entry.1087276252": {
            required:true,
            maxlength:250,
        }
       
    },
    messages: {
        "entry.1341634167":{
            required:"Please enter Name",
            minlength:"Name requires a minimum of 4 Characters",
            maxlength:"Name cannot exceed 50 Characters"
        },
        "entry.": {
            required:"Please enter Message",
            maxlength:"Message cannot exceed 250 Characters"
        },
        "entry.1018418181": {
            number:"Please provide a valid Phone No",
            minlength:"Please provide a valid Phone No",
            maxlength:"Please provide a valid Phone No",
            required:"Please provide Phone No"
        },
        "entry.571016185":{
            required:"Please enter Message",
            maxlength:"Message cannot exceed 250 Characters"
        },
        "entry.1087276252":{
            required:"Please enter Message",
            maxlength:"Message cannot exceed 250 Characters"
        }
    },
    submitHandler: function() {
        $.ajax({
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSc1Ii_yE7USudN77yaud_c0W_YGlhUUrJkhWy85PqgC7H7WmA/viewform?usp=sf_link',     //The public Google Form url, but replace /view with /formResponse
            data: $('#contact-one-form').serialize(),
            type: 'POST',
            dataType: "json",
            statusCode: {
                0: function(data) { //0 is when Google gives a CORS error, don't worry it went through
                    //success
                    $('#contact-one-form-success-msg').text('We have received your request. We will contact you shortly. Thank You!!');
                    $("#contact-one-form")[0].reset();
                }, 
                200: function(data) {//200 is a success code. it went through!
                    //success
                    $('#contact-one-form-success-msg').text('We have received your request. We will contact you shortly. Thank You!!');
                    $("#contact-one-form")[0].reset();
                },
                403: function(data) {//403 is when something went wrong and the submission didn't go through
                    //error
                    alert('Please check the data submitted');
                }
            }
        });
    }
});