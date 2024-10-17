export function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email==="") return false;
    else return emailRegex.test(email);
}
export function validatePassword(password){
    const passKey=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,40}$/;;
    if(password==="") return false;
    else if(passKey.test(password)) return true;
    else return false;
}
// function validateText(){}
// function validateIDnumber(){}
export function validatePhoneNumber(phone) {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if(phone==="") return false;
    else return phoneRegex.test(phone);
}
// module.exports = {
//     validateEmail,
//     validatePhoneNumber
// };