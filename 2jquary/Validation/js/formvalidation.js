$(function () {
    $("form[name ='registration']").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            },
            confirmpassword: {
                required: true,
                minlength: 5,
                equalTo: "#password"

            },
        },
        messages: {
            name: "Please enter your name",
            email: {
                required: "Please enter your email edress",
                email: "Please Enter a valid email address"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be consist of at least 5 characters"
            },
            confirmpassword: {
                required: "Please Re-enter the password",
                minlength: "Your password must be consist of at least 5 characters",
                equalTo: "Please enter the same password as above"
            },
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            form.submit();
        }
    });
});