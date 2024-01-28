
const figuresContent = document.querySelector(".figures__inner-text")


class Figure {
    getArea() {
        throw new Error("метод 'getArea'")
    }

    getName() {
        throw new Error("метод 'getName'")
    }
}

class Circle extends Figure {
    constructor(radius) {
        super();
        this.name = "Круг"
        this.radius = radius
    }


    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getName() {
        return this.name
    }

    getRadius() {
        return this.radius
    }

    setRadius(radius) {
        this.radius = radius
    }
}

class Rectangle extends Figure {
    constructor(width, height) {
        super()
        this.name = "Прямоугольник"
        this.width = width
        this.height = height
    }

    getArea() {
        return this.width * this.height
    }

    getName() {
        return this.name
    }

    getWidth() {
        return this.width
    }

    setWidth(width) {
        this.width = width
    }

    getHeight() {
        return this.height;
    }

    setHeight(height) {
        this.height = height;
    }
}

class Triangle extends Figure {
    constructor(sideA, sideB, sideC) {
        super();
        this.name = "Треугольник";
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    getArea() {
        const halfPerimeter = (this.sideA + this.sideB + this.sideC) / 2;
        return Math.sqrt(halfPerimeter * (halfPerimeter - this.sideA) * (halfPerimeter - this.sideB) * (halfPerimeter - this.sideC))
    }

    getName() {
        return this.name;
    }

    getSideA() {
        return this.sideA;
    }

    setSideA(sideA) {
        this.sideA = sideA;
    }

    getSideB() {
        return this.sideB;
    }

    setSideB(sideB) {
        this.sideB = sideB;
    }

    getSideC() {
        return this.sideC;
    }

    setSideC(sideC) {
        this.sideC = sideC;
    }
}

const figures = [
    new Rectangle(8, 12),
    new Triangle(5, 8, 5),
    new Circle(10)
]

for (const figure of figures) {
    const figureInfo = `Площадь: ${figure.getName()}  (<span class="color__green">${figure.getArea()}</span>)`;

    const element = document.createElement('p')
    element.innerHTML = figureInfo

    figuresContent.appendChild(element)
}