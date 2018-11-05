/**
 * Набор функций для рисования человечка на canvas
 */
var canvas = document.getElementById('dude');

// объявляем глобальную переменную sheet, которая будет нужна нам для рисования
var sheet = canvas.getContext('2d');
sheet.fillStyle = '#fafafa';
sheet.fillRect(0, 0, canvas.width, canvas.height);

/**
 * Рисует голову
 */
function drawHead() {
  sheet.beginPath();
  sheet.arc(75, 75, 30, 0, Math.PI*2, true);
  sheet.stroke();
}

/**
 * Рисует тельце
 */
function drawBody() {
  sheet.beginPath();
  sheet.moveTo(75, 105);
  sheet.lineTo(75, 180);
  sheet.stroke();
}

/**
 * Рисует левую руку
 */
function drawLeftHand() {
  sheet.beginPath();
  sheet.moveTo(75, 120);
  sheet.lineTo(40, 150);
  sheet.stroke();
}

/**
 * Рисует правую руку
 */
function drawRightHand() {
  sheet.beginPath();
  sheet.moveTo(75, 120);
  sheet.lineTo(110, 150);
  sheet.stroke();
}

/**
 * Рисует левую ногу
 */
function drawLeftLeg() {
  sheet.beginPath();
  sheet.moveTo(75, 180);
  sheet.lineTo(50, 250);
  sheet.stroke();
}

/**
 * Рисует правую ногу
 */
function drawRightLeg() {
  sheet.beginPath();
  sheet.moveTo(75, 180);
  sheet.lineTo(100, 250);
  sheet.stroke();
}
