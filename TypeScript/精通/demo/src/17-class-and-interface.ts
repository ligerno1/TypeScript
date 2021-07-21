// 类与接口

export {}

interface EatAndRun {
    eat(food: string): void
    run(distance: number): void
}

interface Eat {
    eat(food: string): void
}
interface Run {
    run(distance: number): void
}

// 方式1
class Person implements EatAndRun {
    eat(food: string): void {
        console.log(`优雅的进餐：${food}`)
    }

    run(distance: number) {
        console.log(`直立行走：${distance}`)
    }
}

// 方式2
class Animal implements Eat, Run {
    eat(food: string): void {
        console.log(`野蛮的暴食：${food}`)
    }

    run(distance: number) {
        console.log(`爬行：${distance}`)
    }
}
