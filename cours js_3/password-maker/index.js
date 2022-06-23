const boutonGenerer = document.getElementById('generateButton');
const pwdLength = document.getElementById('password-length');
const pwdOutput = document.getElementById('password-output');
let newPassword = '';

const dataLowercase="azertyuiopqsdfghjklmwxcvbn";
const dataUppercase =dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$£€%*§;:,?&#!\"'";

const generatePassword = () =>{
    let data = [];
    if(lowercase.checked)   data.push(...dataLowercase);
    if(uppercase.checked)   data.push(...dataUppercase);
    if(number.checked)   data.push(...dataNumbers);
    if(symbols.checked)   data.push(...dataSymbols);

    if(data.length === 0 ){
        alert('Veuillez sélectionner des critères !')
        return;
    }
    for(i=0; i<pwdLength.value-1;i++){
        newPassword += data[Math.floor(Math.random() * data.length)]; 
    }
    console.log(newPassword);
    pwdOutput.value = newPassword;
    newPassword='';

    pwdOutput.select();
    document.execCommand('copy');

    boutonGenerer.textContent = 'Copié';
    setTimeout(() => {
        boutonGenerer.textContent = 'Générer mot de passe';
    }, 3000);

}

boutonGenerer.addEventListener('click', generatePassword);