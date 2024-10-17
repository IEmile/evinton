import { validateEmail, validatePhoneNumber,validatePassword } from '../functions/ioValidation.js';
$(document).ready(function(){
    // let errorField;
    let formData;
    let mainCallid;
    let passkey;
    // let submit;
    $('#main-callid, #callid, #new-call-id').on('input',function(){
        mainCallid=$(this).val();
        if(validateEmail(mainCallid)){
            formData = { inputType: 'email', input: mainCallid };
            $('#valideMail').val(true);
            $(this).removeClass('errorField');
        }
        else if(validatePhoneNumber(mainCallid)){
            formData = { inputType: 'phone', input: mainCallid };
            $(this).removeClass('errorField');
            $('#valideMail').val(true);
        }
        else{
            $(this).addClass('errorField');
            $('#valideMail').val(false);
        }
    });
    $('#password, #new-password, #re-password').on('input',function(){
        passkey=$(this).val();
        if(validatePassword(passkey)){
            console.log("correct");
            $(this).removeClass('errorField');
            $('#validePass').val(true);
        }
        else{
            $(this).addClass('errorField');
            $('#validePass').val(false);
        }   
    });

    $('#auth').on('click',function(){
        if(validateEmail(mainCallid) || validatePhoneNumber(mainCallid)){
        console.log("ddddddd3")
        $.ajax({
            url: '/auth',
            data: formData,
            method: 'POST',
            success: function(response) {
                console.log("Authentication successful");
                // Handle success
            },
            error: function(error) {
                console.error("Error during authentication", error);
                // Handle error
            }
        });
            // $('#intro-form').removeClass('active');
            // $('#signin').addClass('active');
            // $('#callid').val(mainCallid);
        }
    })
});