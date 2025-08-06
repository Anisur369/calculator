const display = document.getElementById('display');

function press(char) {
display.value += char;
}

function calculate() {
try {
    display.value = eval(display.value);
} catch (e) {
    display.value = 'Error';
}
}

function clearDisplay() {
display.value = '';
}

function deleteChar() {
display.value = display.value.slice(0, -1);
}