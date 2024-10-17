
$(document).ready(function(){
    function confirmPassword(){
        return $('#re-password').val() === $('#new-password').val();
    }
    $('#signup-btn').on('click', function(){
        let callid=$('#new-callid').val();
        let password=$('#new-password').val();
        if ($('#valideMail').val() === 'true' && $('#validePass').val() === 'true' && confirmPassword()){
            let formData = {
                callid: callid,
                password: password,
                type:"email"
            };
            console.log(formData)
            $.ajax({
                url: '/signup',
                method: 'POST',
                data: formData,
                success: function(response) {
                    console.log('Server response:', response);
                },
                error: function(error) {
                    console.log('Error:', error);
                }
            });
        } else {
            alert('Invalid data or passwords do not match');
        }
    });
})