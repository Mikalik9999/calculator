const panel = document.getElementById('panel');
const input = document.getElementById('input');
const arrayOperation = ['+', '-', '/', '*'];

panel.addEventListener('click',(event) => {
    const btn = event.target.id;
    const lastSymbol = input.value[input.value.length - 1];

    if (arrayOperation.includes(lastSymbol) && arrayOperation.includes(btn)) {
        input.value = input.value.slice(0,-1) + btn;
        return;
    }

    if ((check() === false) && ((arrayOperation.includes(btn)) === true)) {
        input.value = eval(input.value);
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
        console.log(checkDots())
        console.log(checkFlag);
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

function check () {
    return arrayOperation.every((e) => {
        return input.value.indexOf(e) === -1;
    });
}