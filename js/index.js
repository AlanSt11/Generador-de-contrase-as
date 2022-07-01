const btnNewPassword = document.getElementById('btn');
let resutPass = document.getElementById('resultPass');
let btnCopy = document.getElementById('btn-copy');

btnNewPassword.addEventListener('click', function (e) {
    e.preventDefault();
    generatePassword();
});

btnCopy.addEventListener('click', function (e) {
    e.preventDefault();
    copyPass();
});

function generatePassword(){
    let = caracteres_one =  generatesLetters() + generatesSymbols() + generatesNumbers();
    let caracteres_two = generatesSymbols() + generatesNumbers() + generatesLetters();
    let caracteres_tree = generatesNumbers() + generatesLetters() + generatesSymbols();
    let caracteres_four = generatesLetters() + generatesLetters() + generatesNumbers();
    let resultCaracteres = caracteres_one + caracteres_two + caracteres_tree + caracteres_four;

    resutPass.innerHTML = resultCaracteres;
}

function copyPass(){
    resutPass.select();
    document.execCommand('copy');
    alert("Copiado en el portapapeles " + resutPass.value);
}

function generatesLetters(){
    const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    aleatorio = Math.random() * (alfabeto.length)
    aleatorio = Math.floor(aleatorio)

    return alfabeto[aleatorio];
}

function generatesSymbols(){
    const symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

    aleatorio = Math.random() * (symbols.length);
    aleatorio = Math.floor(aleatorio);

    return symbols[aleatorio];
}

function generatesNumbers(){
    const numbers = ["0","1","2","3","4","5","6","7","8","9"];

    aleatorio = Math.random() * (numbers.length);
    aleatorio = Math.floor(aleatorio);

    return numbers[aleatorio];
}