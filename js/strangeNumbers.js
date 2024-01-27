//============================ Задача о странных числах ============================//
//============================ Задача о странных числах ============================//

const buttonIsStrangeNumber = document.querySelector(".strange__numbers-btn")
const spanIsStrangeNumber = document.querySelector(".strange__numbers-number")

const isStrangeNumber = (number) => {
    if (number <=1) {
        return false
    }

    let sum = 0;

    for (let index = 1; index <= Math.floor(number / 2); index++) {
        if (number % index === 0) {
            sum += index;
        }
    }

    return sum === number
}

const checkNumber = () => {

    let user = prompt("Введите число")

    let userNumber = parseInt(user)

    if (!isNaN(userNumber)) {
        if (isStrangeNumber(userNumber)) {
            spanIsStrangeNumber.innerText = userNumber + " является странным числом"
            spanIsStrangeNumber.style.color = "green";
            console.log(`%c${userNumber}%c` + " является странным числом", "color: green", "color: black");
        } else {
            spanIsStrangeNumber.innerText = userNumber + " не является странным числом"
            spanIsStrangeNumber.style.color = "red"
            console.log(`%c${userNumber}%c` + " не является странным числом", "color: red", "color: black");
        }
    } 
}

buttonIsStrangeNumber.addEventListener("click", checkNumber)