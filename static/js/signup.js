
$(document).ready(function(){
    function confirmPassword(){
        return $('#re-password').val() === $('#new-password').val();
    }
    $('#signup-btn').on('click', function(){
        let callid=$('#callid').val();
        let password=$('#password').val();
        let emailValidation=$('#valideMail').val();
        let passValidation=$('#validePass').val();
        if(emailValidation && passValidation && confirmPassword()){
            let formData = {
                callid: callid,
                passKey: password
            };
            console.log(formData)


            // $.ajax({
            //     url: '/your-server-endpoint',
            //     method: 'POST',
            //     data: formData,
            //     success: function(response) {
            //         console.log('Server response:', response);
            //     },
            //     error: function(error) {
            //         console.log('Error:', error);
            //     }
            // });
        } else {
            alert('Invalid data or passwords do not match');
        }
    });

})