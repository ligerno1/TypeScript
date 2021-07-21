// 类的只读属性

export {}

class Person {
    public name: string // public 共有成员
    private age: number  // private 私有成员
    protected readonly gender: boolean  // protected 受保护成员, readonly只读属性要跟在访问属性后面

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
// tom.gender = false // 属性“gender”受保护，只能在类“Person”及其子类中访问。ts(2445)
// 无法分配到 "gender" ，因为它是只读属性。