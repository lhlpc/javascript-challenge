function runLengthEncoding(receivingString) {
    let count = 1;
    let response = "";
    for(let i = 0; i < receivingString.length; i++) {
        if(receivingString[i] === receivingString[i+1] && count < 9)  {
            count++;    
        } else {
          response = `${response}${count}${receivingString[i]}`
          count = 1;  
        }
    }
    return response;
}

console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD')); // Correct output: "9A4A2B4C2D"
console.log(runLengthEncoding('aA')); // Correct output: "1a1A"
console.log(runLengthEncoding('122333')); // Correct output: "112233"