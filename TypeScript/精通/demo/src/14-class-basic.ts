// 类 (Class)

export {}

class Person {
    name: string // = 'init name'
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    sayHi(msg: string): void {
        console.log(`I am ${this.name}, ${msg}.`)
    }
}