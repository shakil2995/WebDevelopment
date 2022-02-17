var generator = require('generate-password');

function generatePassword(){
    var password = generator.generate({
        length: 10,
        numbers: true
    });
    return password;
}

// 'uEyMTw32v9'
for (let i=0;i<10;i++){
    console.log(generatePassword());
}