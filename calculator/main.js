let display = document.getElementById("screen");

function viewInput(input) {
    
    display.textContent += input;
    
}
function clearInput() {
    try {
        display.textContent = "";
    } catch (error) {
        display.textContent = "error";
    }
}
function calculate() {
    try {
        display.textContent = eval(display.innerHTML);
    } catch (error) {
        display.textContent = "error";
    }
}
