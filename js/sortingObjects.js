
const sortingAge = document.querySelector(".sorting__objects-inner-text")

const dataNameAndAge = [
    {
        name: 'Nikolas',
        age: 15
    },
    {
        name: 'Bobus',
        age: 23
    },
    {
        name: 'Eve',
        age: 25
    },
    {
        name: 'Alice',
        age: 22
    },
    {
        name: 'Bob',
        age: 10
    },
    {
        name: 'John',
        age: 15
    }
]

dataNameAndAge.sort((obj1, obj2) => {
    if (obj1.age !== obj2.age) {
        return obj1.age - obj2.age
    }

    return obj1.name.localeCompare(obj2.name)
})

console.log(dataNameAndAge);

sortingAge.innerHTML = `<pre>Json${JSON.stringify(dataNameAndAge, null, 2)}
</pre> <div class="sorting__objects-alert">Объект отсортирован по возрастанию и полю name</div>`;

