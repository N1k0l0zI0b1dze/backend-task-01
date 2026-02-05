


function fixName(text) {
    let newText = text.replace(/\s/g, "").toLowerCase();
    
    return newText[0].toUpperCase() + newText.slice(1);
};

// const name = " Ni K AaaaA";
// console.log(fixName(name));


function maskedEmail(email) {
    let hidden = email.split("");
    for(let i = 1; i < hidden.length; i++) {
        if(hidden[i] === "@") break;
        hidden[i] = "*";
    }

    return hidden.join("");
};


// const myEmail = "nikoloz@gmail.com";
// console.log(maskedEmail(myEmail));


module.exports = {
    fixName,
    maskedEmail,
};