// 任意类型（弱类型）

export {}

function stringify (value: any) {
    return JSON.stringify(value)
}

stringify('string')

stringify(100)

stringify(true)

let foo: any = 'string'

foo = 100

foo.bar()

// any 是不接受类型检查，要慎用，一般是用来兼容老的项目