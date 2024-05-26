/*
    Callback Functions
*/

/*
    setTimeout: Give me a function and I will call it after a certain amount of time!

    Give me your number, I will call you later!
*/
// let sayHello = function () {
//     console.log('hello');
// }

// setTimeout(sayHello, 3000);

// function incBy10(number) {
//     return number + 10;
// }

// function arithmetic(N, incBy10) {
//     console.log(incBy10(N) * 2);
// }

// let N = 5;

// arithmetic(N, incBy10);

/*
    Callback exercise:

    1. Create a function called 'add' that takes two arguments (a, b) and returns the sum of the two numbers. Then, create a function called 'multiply' that takes two arguments (a, b) and returns the product of the two numbers. Finally, create a function called 'calc' that takes three arguments (a, b, callback) and returns the result of the callback function with the two arguments.
*/

const readline = require('readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function calc(a, b, callback) {
    return callback(a, b);
}

console.log('Welcome to Calculator App\n\n');
let shouldContinue;
let a;
let b;

(async () => {
    do {
        let choice = await rl.question('Please Select an option: \n\n[1] Add\n[2] Multiply\n[3] Exit\n');
        switch (choice) {
            case '1':
                a = await rl.question('Enter first number: ');
                b = await rl.question('Enter second number: ');
                console.log(`Sum of ${a} and ${b} is ${calc(Number(a), Number(b), add)}`);
                break;
            case '2':
                a = await rl.question('Enter first number: ');
                b = await rl.question('Enter second number: ');
                console.log(`Product of ${a} and ${b} is ${calc(Number(a), Number(b), multiply)}`);
                break;
            case '3':
                await rl.close();
                return;
            default:
                console.log('Enter a valid option: 1, 2, or 3.');
        }
        shouldContinue = await rl.question('Do you wish to continue? (y/n)');
    } while (shouldContinue == 'y');
})();