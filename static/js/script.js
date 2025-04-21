function convertToRoman(form) {
    let number = form.number.value;
    let outputMessage; // init empty string

    if (number == '') {
        outputMessage = "Please enter a valid number";
    } else if (number < 1) {
        outputMessage = "Please enter a number greater than or equal to 1";
    } else if (number > 3999) {
        outputMessage = "Please enter a number less than or equal to 3999";
    } else {
        console.log(number);
        outputMessage = `${number}`;
    }

    document.getElementById('output').innerText = outputMessage;
}