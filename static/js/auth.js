import { validateEmail, validatePhoneNumber } from '../functions/ioValidation.js';
$(document).ready(function(){
    let errorField;
    let formData;
    let mainCallid;
    $('#main-callid, #callid, #new-call-id').on('input',function(){
        mainCallid=$(this).val();
        if(validateEmail(mainCallid)){
            FormData={
                inputType:'email',
                input:mainCallid
            }
        }
        else if(validatePhoneNumber(mainCallid)){
            FormData={
                inputType:'phone',
                input:mainCallid
            }
        }
        else{
            errorField=$(this);
        }
        errorField.css({
            'background-color': 'blue',
            'border': '2px',
            'font-weight': 'bold'
        });
    });

    $('#auth').on('click',function(){
        if(validateEmail(mainCallid) || validatePhoneNumber(mainCallid)){
        console.log("ddddddd3")
            // $.ajax({
            //     url:'/',
            //     data:FormData,
            //     method:'POST',
            //     success:function(){
            //     },
            //     error:function(){}
            // })


            $('#intro-form').removeClass('active');
            $('#signin').addClass('active')
            $('#callid').val(mainCallid)
        }
    })
});