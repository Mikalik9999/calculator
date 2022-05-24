let input = document.getElementById('input');
//addListener, тру убрать, классы убрать(ид), ретурны, ифы убрать?, создать массив операторов и переделать условия
const plus = document.getElementById('plus');
const reset = document.getElementById('reset');
const subtract = document.getElementById('subtract');
const negative = document.getElementById('negative');
const percent = document.getElementById('percent');
const division = document.getElementById('division');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const multiplication = document.getElementById('multiplication');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const zero = document.getElementById('zero');
const comma = document.getElementById('comma');
const equals = document.getElementById('equals');

plus.addEventListener('click',addFunction);
reset.addEventListener('click',resetFunction);
subtract.addEventListener('click',subtractFunction);
negative.addEventListener('click',negativeFunction);
percent.addEventListener('click',addPercentFunction);
division.addEventListener('click',divisionFunction);
multiplication.addEventListener('click',multiplicationFunction);
comma.addEventListener('click',commaFunction);
equals.addEventListener('click',equalsFunction);
one.addEventListener('click',addOneFunction);
two.addEventListener('click',addOneFunction);
three.addEventListener('click',addOneFunction);
four.addEventListener('click',addOneFunction);
five.addEventListener('click',addOneFunction);
six.addEventListener('click',addOneFunction);
seven.addEventListener('click',addOneFunction);
eight.addEventListener('click',addOneFunction);
nine.addEventListener('click',addOneFunction);
zero.addEventListener('click',addOneFunction);


function addFunction () {
    let b = input.value.split('');
    if (!(b.includes('+', length - 1)) && !(b.includes('-', length - 1)) &&
        !(b.includes('/', length - 1)) && !(b.includes('*', length - 1))) {
        input.value = input.value + '+';
    } else {
        input.value = input.value.slice(0, -1);
        input.value = input.value + '+';
    }
}
function subtractFunction () {
        let b = input.value.split('');
        if (!(b.includes('+', length - 1)) && !(b.includes('-', length - 1)) &&
            !(b.includes('/', length - 1)) && !(b.includes('*', length - 1))) {
            input.value = input.value + '-';
        } else {
            input.value = input.value.slice(0, -1);
            input.value = input.value + '-';
        }
    }
function multiplicationFunction () {
    let b = input.value.split('');
          if (!(b.includes('+', length - 1)) && !(b.includes('-', length - 1)) &&
              !(b.includes('/', length - 1)) && !(b.includes('*', length - 1))) {
             input.value = input.value + '*';
         } else {
             input.value = input.value.slice(0, -1);
             input.value = input.value + '*';
         }
}
function divisionFunction () {
    let b = input.value.split('');
          if (!(b.includes('+', length - 1)) && !(b.includes('-', length - 1)) &&
              !(b.includes('/', length - 1)) && !(b.includes('*', length - 1))) {
             input.value = input.value + '/';
         } else {
             input.value = input.value.slice(0, -1);
             input.value = input.value + '/';
         }
}
function addPercentFunction () {
         let b = input.value.split('');
         if (!(b.includes('+', length - 1)) && !(b.includes('-', length - 1)) &&
             !(b.includes('/', length - 1)) && !(b.includes('*', length - 1))) {
            input.value = +input.value / 100;
       } else {
       }
}
function negativeFunction () {
    let b = input.value.split('');
    if (!(b.includes('+', length - 1)) && !(b.includes('-', length - 1)) &&
        !(b.includes('/', length - 1)) && !(b.includes('*', length - 1))) {
        input.value = +input.value * -1;
    } else {
    }
}
function resetFunction() {
    input.value = '';
}
function equalsFunction () {
    let b = input.value.split('');
    if (!(b.includes('+', length - 1)) && !(b.includes('-', length - 1)) &&
        !(b.includes('/', length - 1)) && !(b.includes('*', length - 1))) {
        input.value = eval(input.value);
        function sayHi() {
            input.value = '';
        }
        setTimeout(sayHi, 10000);
    } else {
    }
}
function commaFunction() {
         let b = input.value.split('');
         if (!(b.includes('+', length - 1)) && !(b.includes('-', length - 1)) &&
             !(b.includes('/', length - 1)) && !(b.includes('*', length - 1))) {
             input.value = +input.value + '.';
         } else {
        }
}
function addOneFunction() {
    input.value = input.value + event.target.innerHTML;
}
