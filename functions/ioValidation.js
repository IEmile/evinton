let mail="Ishimwe44Emile44";
function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email==="") return false;
    else if(emailRegex.test(email)) return true;
    else return false
}
function validatePassword(password){
    const passKey=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,40}$/;;
    if(password==="") return false;
    else if(passKey.test(password)) return true;
    else return false;
}
// function validateText(){}
// function validateIDnumber(){}
// function validatePhone(){}


console.log(validatePassword(mail))
const validation={
    validateEmail,
    validatePassword,
}
export default validation;