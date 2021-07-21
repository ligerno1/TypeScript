// 函数类型
// 可选参数和默认参数都要出现在参数位置的最末，否则会报错

export {}

// 固定参数
function func1 (a: number, b: number): string {
    return 'func1'
}

func1(100, 200)

// 可选参数
function func2 (a: number, b?: number): string {
    return 'func2'
}

func2(100)

// 任意参数

function func3 (...rest: number[]): string {
    return 'func3'
}

func3()

// ------------------------



// 等同于下面
const func4: (a: number) => string = function (a:number): string {
    return 'func4'
}

