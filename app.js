const app = {
    //? Declare
    number: "",
    calcul: "",

    //? Initial method
    init: () => {
        // Select number's buttons
        const buttonsNumber = document.querySelectorAll('button.number');
        // Setting up event listener on all number's buttons
        for (let i = 0; i < buttonsNumber.length; i++) {
            buttonsNumber[i].addEventListener('click', app.handleShowNumber);
        }

        // Select sign's buttons
        const buttonsSign = document.querySelectorAll('button.sign');
        // Setting up event listener on all sign's buttons
        for(let i = 0; i < buttonsSign.length; i++) {
            buttonsSign[i].addEventListener('click', app.handleCalc);
        }
    },

    //? Number handler
    handleShowNumber: (e) => {
        // Take the value
        const value = e.currentTarget.value;
        // Increment the value to number
        app.number = app.number + value;
        // Increment the value to calcul
        app.calcul = app.calcul + value;
        // Increment  number to #currentNumber
        const inputCurrentNumber = document.querySelector('#currentNumber');
        inputCurrentNumber.value = app.number
    },

    //? Sign handler
    handleCalc: (e) => {
        // Take the value
        const value = e.currentTarget.value;
        const inputCalcul = document.querySelector('#calcul');
        const inputCurrentNumber = document.querySelector('#currentNumber');
        // Add sign by concatenation
        app.calcul = app.calcul + ' ' + value + ' ';
        inputCalcul.value = app.calcul;
        app.number = '';
        inputCurrentNumber.value = app.number;
    }
}

document.addEventListener('DOMContentLoaded', app.init);