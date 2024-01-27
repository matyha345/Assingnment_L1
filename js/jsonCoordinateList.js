const textJsonTextInner = document.querySelector(".jsonCoordinateList__inner-json")

class LinkedListNode {

    constructor(value, next = null){
        this.value = value
        this.next = next
    }

    toString(){
        return `${this.value}`
    }
}

class linkedList {
    
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value) {
        const newNode = new LinkedListNode(value);

        if(!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode

            return this
        }
        this.tail.next = newNode;

        this.tail = newNode

        return this
    }
}

const list = new linkedList()

list.append('Hi').append('Hello').append('Hello World').append('Привет').append('Привет мир').append('WB TOP')

console.log(`Json${JSON.stringify(list, null, 4)}`);

textJsonTextInner.innerHTML = `<pre>Json${JSON.stringify(list, null, 2)}</pre>`;

