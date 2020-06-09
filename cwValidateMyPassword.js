//Validate My Password
// I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.
// Passwords must abide by the following requirements:
// More than 3 characters but less than 20.
// Must contain only alphanumeric characters.
// Must contain letters and numbers.

function validPass(password){
    if(typeof password !== 'string' || password.length < 4 || password.length > 19){
        return 'INVALID';}
    if(/\d+/.test(password) && /[a-zA-Z]+/.test(password) && /^\w+$/.test(password)){
        return 'VALID'
    }
    return 'INVALID'
}