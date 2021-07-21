// 类的访问修饰符

export {}

class Person {
    public name: string // public 共有成员
    private age: number  // private 私有成员
    protected gender: boolean  // protected 受保护成员

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    sayHi(msg: string): void {
        console.log(`I am ${this.name}, ${msg}.`)
        console.log(this.age)
    }
}

const tom = new Person('tom', 18)
console.log(tom.name)
// console.log(tom.age)  // 属性“age”为私有属性，只能在类“Person”中访问。
// console.log(tom.gender) // 属性“gender”受保护，只能在类“Person”及其子类中访问。

class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age)
        console.log(this.gender)
    }

    // static 静态方法
    static create(name: string, age: number) {
        return new Student(name, age)
    }
}


const jack = Student.create('jack', 18)
