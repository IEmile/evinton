const validate=require('functions/iovalidation')
let data="hy there";
let password=$("#password").value();
let contact=$("#call-id").value();
let callId=validate.validateEmail(contact);
let passkey=validate.validatePassword(password)




let formData={
    callId:callId,
    passKey:passKey
}


    $.ajax({
    url:'/input',
    method:'POST',
    data:'data',
    success: function(data){
        console.log("yes")
    },
    error: function(error){
        console.log("non")
    }
});




import { validateEmail, validatePhoneNumber } from '../functions/ioValidation.js';
$(document).ready(function(){

})
