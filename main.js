const display = document.getElementById('display');
function appendInput(input) {
    display.value += input;
}
function Clear() {
    display.value = '';
}
function calculate() {
    if (eval(display.value)) {
        display.value = eval(display.value);
    }
    else {
        display.value = 'Error'
    }
}