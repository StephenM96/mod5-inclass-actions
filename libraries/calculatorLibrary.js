class Calculator {
    constructor() {
        this.id = Math.random()
    }

    #log = (value) => // private method
    console.log(`[Calculator :${this.id}: value: ${value}]`)

    add(num1, num2) {
        const value = num1 + num2
        this.#log(value) //public method calling private method
        return value
    }

    sub(num1, num2) {
        const value = num1 - num2
        this.#log(value) //public method calling private method
        return value
    }

    mult(num1, num2) {
        const value = num1 * num2
        this.#log(value) //public method calling private method
        return value
    }

    div(num1, num2) {
        const value = num1 / num2
        this.#log(value) //public method calling private method
        return value
    }
}

module.exports = Calculator