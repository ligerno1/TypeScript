/* 
    原始数据类型
*/

const a: string = 'foobar'

const b: number = 100  // NaN Infinity

const c: boolean = true  // false

// const d: string = null  // 报错时，设置 tsconfig.json 中的 strict = false

const e: void = undefined

const f: null = null

const g: undefined = undefined

const h: symbol = Symbol()  // 报错时，把配置里面的 target "es5" 改成 es2015 因为symbol 是es6之后才有的特性

// Array

// Promise

const error: string = "100"