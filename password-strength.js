// Check password strength


let password = prompt("Enter password");

let passwordLength = password.length;

if(passwordLength > 8){
    console.log("Strong");
}else{
    console.log("Weak");
}

