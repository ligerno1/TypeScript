// 抽象类

export {}

abstract class Animal {
    eat(food: string): void {
        console.log(`野蛮的暴食：${food}`)
    }

    abstract run(distance: number): void
}

class Dog extends Animal {
    run(distance: number): void {
        console.log(`四脚爬行：${distance}`)
    }
}

const d = new Dog()
d.eat('大骨头')
d.run(250)
