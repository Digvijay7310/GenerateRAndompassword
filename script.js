    
    const PasswordBox = document.getElementById('Password');
    const length = 12;
    

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const specialSymbols = "@#$%^&*()~_=-+{}[]?"

    const allChars = upperCase + lowerCase + number + specialSymbols;

    function createPassword(){
        let Password =  "";
        Password += upperCase[Math.floor(Math.random() * upperCase.length)];
        Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        Password += number[Math.floor(Math.random() * number.length)];
        Password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];


        while(length > Password.length){
            Password += allChars[Math.floor(Math.random() * allChars.length)];
            console.log(Password);
            
        }
        PasswordBox.value = Password;
    }



    function copyPassword() {
        PasswordBox.select();
        document.execCommand("copy");
    }