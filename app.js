const app = {
    //? Declare
    number: "",

    //? Initial method
    init: () => {
        // Select number's buttons
        const buttonsNumber = document.querySelectorAll('button.number');
        // Setting up event listener on all number's buttons
        for (let i = 0; i < buttonsNumber.length; i++) {
            buttonsNumber[i].addEventListener('click', app.handleShowNumber);
        }
    },

    //? Number handler
    handleShowNumber: (e) => {
        // Take the value
        const value = e.currentTarget.value;
        // Increment the value to number
        app.number = app.number + value;
        // Increment  number to #currentNumber
        const inputCurrentNumber = document.querySelector('#currentNumber');
        inputCurrentNumber.value = app.number
    }
}

document.addEventListener('DOMContentLoaded', app.init);