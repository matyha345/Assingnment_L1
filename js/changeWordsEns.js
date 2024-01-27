const textWordsEnd = document.querySelector(".changeWordsEnd__inner-text")

const textChangeWordsEnd = (() => {

    const getWordEnding = (number, endings) => {
        const arr = [2, 0, 1, 1, 1, 2]

        return endings[(number % 100 > 4 && number % 100 < 20) ?
            2 :
            arr[(number % 10 < 5) ? number % 10 : 5]];
    }


    const changeEnding = (number, words) => {
        const ending = getWordEnding(number, words)
        return `${number} ${ending}`
    }

    return {
        changeEnding
    }
})()

const updateResults = () => {
    const selectedValue = document.getElementById('selectNumber').value


    const results = textChangeWordsEnd.changeEnding(parseInt(selectedValue), ['сообщение', 'сообщения', 'сообщений'])
    textWordsEnd.textContent = results
}


