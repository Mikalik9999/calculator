const panel = document.getElementById('panel');
const input = document.getElementById('input');
const arrayOperation = ['+', '-', '/', '*'];

panel.addEventListener('click',(event) => {
    const btn = event.target.id;
    const lastSymbol = input.value[input.value.length - 1];
    console.log(lastSymbol);

    if ((arrayOperation.includes(btn) === true) && (input.value === '')){
        input.value = input.value.substring(0, input.value.length - 1);
        return;
    }
    if (arrayOperation.includes(lastSymbol) && arrayOperation.includes(btn)) {
        input.value = input.value.slice(0,-1) + btn;
        return;
    }

    if (!checkOperation() && arrayOperation.includes(btn)) {
        input.value = eval(input.value) + btn;
        return;
    }

    if (btn === '=') {
        input.value = eval(input.value);
        return;
    }
    if (btn === 'reset') {
        input.value = '';
        return;
    }
    if (btn === '.') {
        if (arrayOperation.includes(lastSymbol)) {
            return;
        }
        if (lastSymbol === '.') {
            return;
        }
        let checkFlag = checkDots();
        if (checkFlag) {
            return;
        }
    }
    if (btn === '%') {
        if (arrayOperation.includes(lastSymbol)) {
            return;
        }
        input.value = input.value/100;
        return;
    }
    if (btn === 'negative') {
        if (arrayOperation.includes(lastSymbol)) {
            return;
        }
        input.value = eval(input.value);
        input.value = input.value * (-1);
        return;
    }
    input.value = input.value + btn;
})

function checkDots () {
    return arrayOperation.every((e) => {
        let value = input.value;
        let position = value.indexOf(e);
        if (position !== -1) {
            if (value.slice(position).includes(".")) {
                return true;
            }
        } else if (value.includes('.')) {
            return true;
        }
    });
}

function checkOperation () {
    return arrayOperation.every((e) => {
        return input.value.indexOf(e) === -1;
    });
}

document.addEventListener('keypress',(e) => {
    input.value = input.value.replace (/[^0-9-+-=/*%]/g, '');
     const lastSymbol = input.value[input.value.length - 1];
     const qwe = ("+" === e.key ||
         "/" === e.key ||
         "*" === e.key ||
         "." === e.key ||
         "%" === e.key ||
         "=" === e.key ||
         "-" === e.key);

     if (input.value === '' && qwe) {
         input.value = input.value.substring(0, input.value.length - 1);
         return;
     }
     if (qwe && (lastSymbol === e.key)){
         input.value = input.value.substring(0, input.value.length - 1) + e.key;
         return;
     }
    switch (e.key){
        case "Enter":
            input.value = eval(input.value);
            break;
        case "%":
            if (arrayOperation.includes(lastSymbol)) {
                return;
            }
            input.value = input.value/100;
            break;
        default:
            input.value = input.value + e.key;
            break;
    }
})
document.addEventListener('keydown',(e) => {
    switch (e.key) {
        case "Delete":
            input.value = '';
            break;
        case "Escape":
            input.value = '';
            break;
        case "Backspace":
            input.value = input.value.substring(0, input.value.length - 1);
            break;
    }
})