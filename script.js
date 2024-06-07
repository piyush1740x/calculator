const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');
const equalButton = document.querySelector('.btn-equal');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.textContent.trim();
        if (value === 'C') {
            display.value = '0';
        } else if (value === 'X') {
            display.value = display.value.slice(0, -1) || '0';
        } else {
            if (display.value === '0') {
                display.value = value;
            } else {
                display.value += value;
            }
        }
    });
});

equalButton.addEventListener('click', () => {
    try {
        display.value = eval(display.value) || '0';
    } catch {
        display.value = 'Error';
    }
});


