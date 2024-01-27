//======= Задача. Реализовать аналог библиотеки Math  =======//
//======= Задача. Реализовать аналог библиотеки Math  =======//

const alertElementMathX = document.querySelector('.libraries__mathx-allert1')
const alertElementMathX2 = document.querySelector('.libraries__mathx-allert2')
const alertElementMathX3 = document.querySelector('.libraries__mathx-allert3')
const alertElementMathX4 = document.querySelector('.libraries__mathx-allert4')
const alertElementMathX5 = document.querySelector('.libraries__mathx-allert5')

const MathX = (function() {

    function calculatingFibonacci(num) {
        let fibonacci1 = 0, fibonacci2 = 1, calFibonacci = 1;
        for (let index = 2; index <= num; index++) {
            calFibonacci = fibonacci1 + fibonacci2;
            fibonacci1 = fibonacci2;
            fibonacci2 = calFibonacci;
        }
        return fibonacci1;
    }

    function generateFibonacci(num) {
        var fibonacciSequence = [0, 1];
        for (let index = 2; index <= num; index++) {
            fibonacciSequence[index] = fibonacciSequence[index - 1] + fibonacciSequence[index - 2]
        }
        return fibonacciSequence;
    }

    function isPrime(num) {
        if (num <= 1) return false;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    function getNthPrime(n) {
        if (n <= 0) {
            return false;
        }

        let count = 0;
        let num = 2;

        while (count < n) {
            if (isPrime(num)) {
                count++;
            }
            if (count < n) {
                num++;
            }
        }

        return num;
    }

    function getAllPrimesUpToN(N) {
        let primesArray = [];

        for (let num = 2; num <= N; num++) {
            if (isPrime(num)) {
                primesArray.push(num);
            }
        }

        return primesArray;
    }

    return {
        calculatingFibonacci: calculatingFibonacci,
        generateFibonacci: generateFibonacci,
        isPrime: isPrime,
        getNthPrime: getNthPrime,
        getAllPrimesUpToN: getAllPrimesUpToN
    };
})();

console.log("5е число Фибоначчи", MathX.calculatingFibonacci(5));
console.log("числа Фибоначчи до 6", MathX.generateFibonacci(6));
console.log("число 4 не является простым числом ", MathX.isPrime(4));
console.log("число 3 является простым числом", MathX.getNthPrime(3));
console.log("все простые числа до 20", MathX.getAllPrimesUpToN(20));

alertElementMathX.innerHTML += "5-е число Фибоначчи: " + MathX.calculatingFibonacci(5) + "<br>";
alertElementMathX2.innerHTML += "Числа Фибоначчи до 6: " + MathX.generateFibonacci(6).join(', ') + "<br>";
alertElementMathX3.innerHTML += "Число 4 не является простым числом: " + MathX.isPrime(4) + "<br>";
alertElementMathX4.innerHTML += "Число 3 является простым числом: " + MathX.getNthPrime(3) + "<br>";
alertElementMathX5.innerHTML += "Все простые числа до 20: " + MathX.getAllPrimesUpToN(20).join(', ') + "<br>";









