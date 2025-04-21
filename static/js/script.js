function convertToRoman(form) {
    let number = form.number.value;

    if (number) {
        console.log(number);
    } else {
        document.getElementById('output').innerText = "Please enter a valid number";
    }
}