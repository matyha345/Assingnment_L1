
const functionsSequence = document.querySelector(".functionsSequence__inner-сonclusion")

const func1 = () => 1+1;
const func2 = () => 2 * 10;
const func3 = () => 3 - 1;


const combineFunctions = (functions) => {
    return () => functions.map(func => func());
}

const functionsArray = [func1, func2, func3];

const challengeFunctions = combineFunctions(functionsArray)


const resultArray = challengeFunctions()

console.log(`Задача о замыканиях, ${resultArray}`);

formatResultArray = resultArray.join(', ')

functionsSequence.innerHTML =` Возвращать новую функцию и их результат {<span class="color__green"> ${formatResultArray} </span>}`