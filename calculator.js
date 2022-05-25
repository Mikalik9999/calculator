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
    if (btn === '=') {
        input.value = eval(input.value);
        return;
    }
    if (btn === 'reset') {
        input.value = '';
        return;
    }
    if (btn === '.') {
        if (lastSymbol === '.') {
            return;
        }
        if (input.value.indexOf("+") !== -1) {
            if (input.value.slice(input.value.indexOf("+")).includes(".") !== false) {
                return
            }
        } else if (input.value.includes('.') === true) {
            return;
        }
        if (input.value.indexOf("-") !== -1) {
            if (input.value.slice(input.value.indexOf("+")).includes(".") !== false) {
                return
            }
        }
        if (input.value.indexOf("/") !== -1) {
            if (input.value.slice(input.value.indexOf("+")).includes(".") !== false) {
                return
            }
        }
        if (input.value.indexOf("*") !== -1) {
            if (input.value.slice(input.value.indexOf("+")).includes(".") !== false) {
                return
            }
        }
    }
    if (btn === '%') {
        input.value = '';
        return;
    }
    input.value = input.value + btn;
})

