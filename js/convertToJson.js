

const myJsonInnerText = document.querySelector(".convertToJson__inner-сonclusion")

const convertObjectToJson = (jsonObject) => {
    try {
        const myJsonString = JSON.stringify(jsonObject);
        return myJsonString
    } catch (error){
        console.error("Ошибка при конвертации в MyJson:", error)
        return null
    }
}

const dataObject = {name: 'Николай', age: 29, city: "Москва"}

const myJsonString = convertObjectToJson(dataObject)

if (myJsonString !== null){
    console.log("Json строка", myJsonString);
}

myJsonInnerText.innerHTML = `Json строка ${myJsonString}`