import { validateEmail, validatePhoneNumber, validatePassword } from '../functions/ioValidation.js';

$(document).ready(function() {
    let formData;
    let mainCallid;
    let passkey;

    function updateValidationStatus(element, isValid, validField) {
        if (isValid) {
            $(element).removeClass('errorField');
            $(validField).val(true);
        } else {
            $(element).addClass('errorField');
            $(validField).val(false);
        }
    }

    $('#main-callid, #callid, #new-call-id').on('input', function() {
        mainCallid = $(this).val();
        if (validateEmail(mainCallid)) {
            formData = { inputType: 'email', input: mainCallid };
            updateValidationStatus(this, true, '#valideMail');
        } else if (validatePhoneNumber(mainCallid)) {
            formData = { inputType: 'phone', input: mainCallid };
            updateValidationStatus(this, true, '#valideMail');
        } else {
            updateValidationStatus(this, false, '#valideMail');
        }
    });

    $('#password, #new-password, #re-password').on('input', function() {
        passkey = $(this).val();
        updateValidationStatus(this, validatePassword(passkey), '#validePass');
    });

    $('#auth').on('click', function() {
        if ($('#valideMail').val() === 'true') {
            $.ajax({
                url: '/auth',
                data: formData,
                method: 'POST',
                success: function(response) {
                    console.log("Authentication successful");
                    console.log(response);
                    if(response){
                        $('#intro-form').removeClass('active');
                        $('#signin').addClass('active');
                        $('#callid').val(mainCallid);
                    }
                    else{
                        $('#intro-form').removeClass('active');
                        $('#signup').addClass('active');
                        $('#new-callid').val(mainCallid);
                    }
                    // Handle success
                },
                error: function(error) {
                    console.error("Error during authentication", error);
                    // Handle error
                }
            });
        } else {
            console.log("Validation failed");
        }
    });
});
