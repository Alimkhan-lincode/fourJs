const myButton = document.getElementById('buttonCl')

myButton.addEventListener('click', () => {
  console.log('Кнопка была нажата!')
})

// Напишите код, который будет реагировать на клик по кнопке и выводить в консоль сообщение "Кнопка была нажата!".

const colorButton = document.getElementById('colorButton');
const colorBlock = document.getElementById('colorBlock');

colorButton.addEventListener('dblclick', function(){
  colorBlock.style.backgroundColor = 'green';
});
// Создайте HTML-страницу с кнопкой и элементом div. Напишите код, который будет реагировать на двойной клик по кнопке и изменять цвет фона элемента div на зеленый.

const vseEllement = document.getElementsByTagName("*");
const subEllement = Array.prototype.slice.call(vseEllement);

subEllement.forEach(element => {
  element.addEventListener('dblclick', function(){
    console.log("dblclick");
  })
});
// Напишите код, который будет выводить сообщение в консоль при двойном клике по любому элементу страницы.

const tablDbl = document.getElementsByTagName('td');
const subTablDbl = Array.prototype.slice.call(tablDbl);

subTablDbl.forEach(function(tab){
  tab.addEventListener('dblclick', function(){
    tab.textContent = "Double clicked"
  })
});
// Создайте таблицу на HTML-странице и напишите код, который будет реагировать на двойной клик по ячейке таблицы и заменять текст в ячейке на "Double clicked!".

const imgDbl = document.getElementsByTagName('img');
const arrImgDbl = Array.prototype.slice.call(imgDbl);

arrImgDbl.forEach(img => {
  img.addEventListener('dblclick', function(){
    console.log(img.alt);
  })
});
// Создайте список изображений на HTML-странице и напишите код, который будет реагировать на двойной клик по каждому изображению и выводить его альтернативный текст в консоль.

const titleDbl = document.getElementById('titleH1');

titleDbl.addEventListener('dblclick', function(){
  titleDbl.textContent = "Double clicked"
});
// Напишите код, который будет реагировать на двойной клик по заголовку страницы и изменять его текст на "Double clicked!".

document.addEventListener('keydown', (evetn) => {
  console.log("Вы нажали кнопку: " + evetn.key);
});
// Напишите код который будет выводить нажатие любой кнопки в консоль.

let stringProm = prompt("Запрашиваю строку!!!");
console.log(stringProm);

// напишите код который будет запрашивать строку у пользователя и выводить введенную строку в консоль.

document.addEventListener('keyup', (evetn) => {
  console.log("Вы отпустили кнопку: " + evetn.key);
});

// Напишите код который будет выводить отпускание любой кнопки в консоль.