
const functionsButtonChallenge = document.getElementById('startButton');

const functionArray = [
    () => { askYouName(); },
    () => { askYouAge(); },
    () => { youLoveWb(); },
]

const askYouName = () => {
    const userName = prompt('Пожалуйста, введите ваше имя:');

    if (userName !== null && userName !== '') {
        const userNameCreate = document.querySelector(".functionsArray__inner-name")

        userNameCreate.innerHTML = `Привет, <span class="color__green">${userName}</span>! Ваше имя добавлено на страницу.`
    } else {
        alert('Имя не было введено.');
    }
}
const askYouAge = () => {
    const userAge = prompt('Пожалуйста, укажите ваш возраст')

    if (userAge !== null && userAge !== '') {
        const userAgeCreate = document.querySelector(".functionsArray__inner-age")

        userAgeCreate.innerHTML = `<span class="color__green">${userAge}</span> Ваш возраст добавлен на страницу.`
    } else {
        alert('Возраст не был введен')
    }
}

const youLoveWb = () => {
    const negativeAnswers = ['нет', 'неа','нее','no', 'nope', 'неточно', 'возможно', 'может быть', 'ну хз', 'лялял'];

    const userLoveWb = prompt("Ты любишь WB так же, как мы его любим?");
    const userLoveCreate = document.querySelector(".functionsArray__inner-love--wb");

    if (userLoveWb !== null && userLoveWb !== '' && !negativeAnswers.includes(userLoveWb.toLowerCase())) {
        userLoveCreate.innerHTML = `<span class="color__green">${userLoveWb}</span>, Я рад что у нас совпадают мнения!`;
    } else {
        userLoveCreate.innerHTML = 'Все равно ты его любишь!';
    }
};

const executeFunctionsSequentially = () => {
    const execute = (index) => {
        if (index < functionArray.length) {
            functionArray[index]();
            execute(index + 1);
        }
    }
    execute(0)
}

functionsButtonChallenge.addEventListener('click', executeFunctionsSequentially);