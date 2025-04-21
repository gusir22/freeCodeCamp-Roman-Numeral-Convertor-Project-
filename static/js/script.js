const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
];

function convertToRoman(form) {
    let number = form.number.value;
    let outputMessage = ''; // init empty string

    // validate input, if on flags are triggered then convert to roman numerals
    if (number == '') {
        outputMessage = "Please enter a valid number";
    } else if (number < 1) {
        outputMessage = "Please enter a number greater than or equal to 1";
    } else if (number > 3999) {
        outputMessage = "Please enter a number less than or equal to 3999";
    } else {
        // check all numeral key/value pairs
        for (let n=0; n<romanNumerals.length; n++){
            // keep checking same value until number is less than the current numeral value
            while (number >= romanNumerals[n].value) {
                outputMessage += romanNumerals[n].numeral; // save numeral to outputMessage
                number -= romanNumerals[n].value; // subtract roman numeral value from number
            }
        }
    }

    document.getElementById('output').innerText = outputMessage;
}