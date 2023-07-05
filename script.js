const squareButton = document.querySelector(".square-button");
const blueButton = document.querySelector('.blue-button');
const redButton = document.querySelector('.red-button');
const greenButton = document.querySelector('.green-button');
const purpleButton = document.querySelector('.purple-button');
const yellowButton = document.querySelector('.yellow-button');
const orangeButton = document.querySelector('.orange-button');
const buttons = document.querySelectorAll('button');
function buttonHandler() {
    if (this === squareButton) {
        this.style.backgroundColor = '#ffffff';
    } else if (this === blueButton) {
        squareButton.style.backgroundColor = '#0000ff';
    } else if (this === redButton) {
        squareButton.style.backgroundColor = '#ff0000';
    } else if (this === greenButton) {
        squareButton.style.backgroundColor = '#00ff00';
    } else if (this === purpleButton) {
        squareButton.style.backgroundColor = '#a000ff';
    } else if (this === yellowButton) {
        squareButton.style.backgroundColor = '#ffff00';
    } else if (this === orangeButton) {
        squareButton.style.backgroundColor = '#ff8000';
    }
}
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonHandler);
};