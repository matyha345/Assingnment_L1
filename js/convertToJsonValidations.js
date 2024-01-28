
const convertValidationsInnerHtml = document.querySelector(".convertToJsonValidations__inner-сonclusion")

const convertToJsonValidations = (jsonString) => {
    try {
        if (!jsonString.trim())
            throw new Error("строка JSON пуста.")

        const myJsonObject = JSON.parse(jsonString)

        return jsonString
    } catch (error) {
        console.error('Ошибка при конвертации JSON строки в объект:', error.message);
        return null;
    }
}


const jsonString = '{"key1": "value1", "key2": 42, "key3": true}';



const myJsonObject = convertToJsonValidations(!jsonString); //Вызывает ошибку путем присваивания null

if (myJsonObject === null) {
    convertValidationsInnerHtml.innerHTML = '<span class="color__red">Ошибка при конвертации JSON строки в объекту присвоен null </span>';
} else {
    convertValidationsInnerHtml.innerHTML = `<span class="color__green">Json: ${myJsonObject} </span>`;
}

