document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            if (e.target.innerText === 'C') {
                display.innerText = '';
            } else if (e.target.innerText === '=') {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
            } else {
                display.innerText += e.target.innerText;
            }
        });
    });

    clearButton.addEventListener('click', () => {
        display.innerText = '';
    });

    equalsButton.addEventListener('click', () => {
        try {
            display.innerText = eval(display.innerText);
        } catch {
            display.innerText = 'Error';
        }
    });
});
