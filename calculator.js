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
        if (arrayOperation.includes(lastSymbol)) {
            return;
        }
        if (lastSymbol === '.') {
            return;
        }
        arrayOperation.forEach((e) => {
            console.log(input.value.indexOf(e) !== -1);
            if (input.value.indexOf(e) !== -1) { // проверка на нахождение знака (узнаем позицию)
                console.log(input.value.slice(input.value.indexOf(e)).includes("."));
                if (input.value.slice(input.value.indexOf(e)).includes(".")) { // (берем строку после знака
                                                                                // и проверяем, есть ли точка
                    console.log(input.value);
                    return input.value;
                }
                } else if (input.value.includes('.')) {
                return;
            }
        })

        // if (input.value.indexOf("+") !== -1) { //сократить при помощи forEach
        //     if (input.value.slice(input.value.indexOf("+")).includes(".") ) {
        //         return
        //     }
        // } else if (input.value.includes('.')) {
        //     return;
        // }
        // if (input.value.indexOf("-") !== -1) {
        //     if (input.value.slice(input.value.indexOf("+")).includes(".") ) {
        //         return
        //     }
        // }
        // if (input.value.indexOf("/") !== -1) {
        //     if (input.value.slice(input.value.indexOf("+")).includes(".") ) {
        //         return
        //     }
        // }
        // if (input.value.indexOf("*") !== -1) {
        //     if (input.value.slice(input.value.indexOf("+")).includes(".") ) {
        //         return
        //     }
        // }
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

