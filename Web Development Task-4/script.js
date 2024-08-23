// Function to append numbers to the display
function appendNumber(number) {
    let display = document.getElementById('display');
    display.value += number;
}

// Function to append operators to the display
function appendOperator(operator) {
    let display = document.getElementById('display');
    display.value += operator;
}

// Function to calculate the result
function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);  // Evaluate the expression
    } catch (e) {
        display.value = 'Error';  // If there's an error in the expression
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character
function deleteChar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
