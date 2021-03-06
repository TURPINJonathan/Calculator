const app = {
    //? Declare
    number: "",
    calcul: "",

    //? Inputs
    inputCurrentNumber: document.querySelector('#currentNumber'),
    inputCalcul: document.querySelector('#calcul'),

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

        // Equal button
        const buttonEqual = document.querySelector('button#equal');
        buttonEqual.addEventListener('click', app.handleCalculResult);

        // Reset button
        const buttonReset = document.querySelector('button#reset');
        buttonReset.addEventListener('click', app.handleReset);
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
        app.inputCurrentNumber.value = app.number
    },

    //? Sign handler
    handleCalc: (e) => {
        // Take the value
        const value = e.currentTarget.value;
        // Add sign by concatenation
        app.calcul = app.calcul + ' ' + value + ' ';
        app.inputCalcul.value = app.calcul;
        app.number = '';
        app.inputCurrentNumber.value = app.number;
    },

    //? Result handler
    handleCalculResult: (e) => {
        // Split on spaces, wich give a table
        const number = app.calcul.split(' ');
        let result = 0;

        for(let i = 0; i < number.length; i++) {
            switch (number[i]){
                // if sign is +
                case '+' :
                    if(result === 0) {
                        // Calculation between numbers before and after the sign
                        result = parseInt(number[i-1], 10) + parseInt(number[i+1], 10);
                    } else {
                        // Calculation between the result ever done and the next number
                        result += parseInt(number[i+1], 10);
                    }
                    break;
                // if sign is -
                case '-' :
                    if(result === 0) {
                        result = parseInt(number[i-1], 10) - parseInt(number[i+1], 10);
                    } else {
                        result -= parseInt(number[i+1], 10);
                    }
                    break;
                // if sign is *
                case '*' :
                    if(result === 0) {
                        result = parseInt(number[i-1], 10) * parseInt(number[i+1], 10);
                    } else {
                        result = result * parseInt(number[i+1], 10);
                    }
                    break;
                // if sign is /
                case '*' :
                    if(result === 0) {
                        result = parseInt(number[i-1], 10) / parseInt(number[i+1], 10);
                    } else {
                        result = result / parseInt(number[i+1], 10);
                    }
                    break;
            }
            
        }
        // Recovery the calculation with the sign =
        app.inputCalcul.value = app.calcul + ' ' + '=';
        app.inputCurrentNumber.value = result;
    },

    //? Reset handler
    handleReset: (e) => {
        // Update variables
        app.calcul = "";
        app.number = "";
        // Update inputs
        app.inputCalcul.value = app.calcul;
        app.inputCurrentNumber.value = app.number;
    }
}

document.addEventListener('DOMContentLoaded', app.init);